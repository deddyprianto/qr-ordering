import Layout from "./containers/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loading from "./components/Loading";
import "./scss/App.scss";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchItemObj, setEnableSearchUsingScroll, setCartInfo, setOutletName } from "./app/dataSlicePersisted";
import { setIsSearchItem } from "./app/dataSlice";
import { apiCart } from "./services/Cart";

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
        path: "*",
        lazy: () => import("./pages/NotFound"),
      },
    ],
  },
]);

export default function App() {
  const dispatch = useDispatch();
  
  const cartInfo = useSelector(
    (state) => state.dataSlicePersisted.cartInfo,
  );

  const getCartInfo = async() => {
    if(!cartInfo.uniqueID) return
    try {
      const result = await apiCart("GET", cartInfo.uniqueID, {});
      if(result.resultCode == 200){
        dispatch(setCartInfo(result.data))
      }
      else throw(result.message);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    dispatch(setIsSearchItem(false)); 
    dispatch(setSearchItemObj({
      doSearch: false,
      searchText: "",
      isResetList: true
    })); 
    dispatch(setEnableSearchUsingScroll(false)); 
    dispatch(setOutletName("edge cafe")); 
    getCartInfo();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return <RouterProvider router={router} fallbackElement={<Loading />} />;
}
