import Layout from "./containers/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loading from "./components/Loading";
import "./scss/App.scss";

import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setSearchItemObj,
  setEnableSearchUsingScroll,
  setCartToListen
} from "./app/dataSlicePersisted";
import {setIsSearchItem} from "./app/dataSlice";
import { fetchAuthMember, fetchCartInfo, fetchInsight, fetchLayout, fetchOutletAvailability, fetchOutletSetting, urlQueryExtractor } from "./components/DataPreparation";
import { startListeningInterval } from "./helper/fetchOrderStatus";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        lazy: () => import("./pages/Home"),
      },
      {
        path: "cart",
        lazy: () => import("./pages/Cart"),
      },
      {
        path: "order",
        lazy: () => import("./pages/Order"),
      },
      {
        path: "ordersummary",
        lazy: () => import("./pages/OrderSummary"),
      },
      {
        path: "profile",
        lazy: () => import("./pages/Profile"),
      },
      {
        path: "payment",
        lazy: () => import("./pages/Payment"),
      },
      {
        path: "*",
        lazy: () => import("./pages/NotFound"),
      },
    ],
  },
]);

export default function App() {
  

  const dispatch = useDispatch();

  const { cartInfo, orderType, memberInfo, cartToListen } =
    useSelector((state) => state.dataSlicePersisted);

  const dataPreparation = useRef();
  dataPreparation.current = () => {
    const lastCallTimestamp = localStorage.getItem("lastCallTimestamp");
    const currentDate = new Date().toDateString();
    const outlet = urlQueryExtractor(dispatch);
    if (!outlet) return;
    fetchLayout(dispatch);
    if (lastCallTimestamp || lastCallTimestamp === currentDate) {
      fetchCartInfo(dispatch, outlet, cartInfo);
    }
    fetchOutletSetting(dispatch, outlet, orderType);
    fetchInsight(dispatch);
    fetchOutletAvailability(dispatch, outlet);
    fetchAuthMember(dispatch, memberInfo);
    listenProcessedcart();
  };

  const listenProcessedcart = () => {
    try {
      if(cartToListen?.length < 1) return;
      for(const cart of cartToListen){
        if(["COMPLETED", "VOIDED", "CANCELLED"].includes(cart.status)){
          const newCartToListen = cartToListen.filter(cartObj => cartObj.cartID !== cart.cartID);
          dispatch(setCartToListen(newCartToListen))
          continue;
        }

        startListeningInterval(cart.cartID, dispatch);
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    dispatch(setIsSearchItem(false));
    dispatch(
      setSearchItemObj({
        doSearch: false,
        searchText: "",
        isResetList: true,
      }),
    );
    dispatch(setEnableSearchUsingScroll(false));
    dataPreparation.current();
  }, [dispatch]);

  return <RouterProvider router={router} fallbackElement={<Loading />} />;
}
