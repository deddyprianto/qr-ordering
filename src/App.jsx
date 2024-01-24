import Layout from "./containers/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loading from "./components/Loading";
import "./scss/App.scss";

import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchItemObj, setEnableSearchUsingScroll, setCartInfo, setOutletName } from "./app/dataSlicePersisted";
import { setIsSearchItem, setOutletSetting, setServiceCharge } from "./app/dataSlice";
import { apiCart } from "./services/Cart";
import { apiOutlet } from "./services/Outlet";

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
  
  const { cartInfo, orderType } = useSelector(
    (state) => state.dataSlicePersisted,
  );

  const getCartInfoRef = useRef();
  const getOutletSetting = useRef();

  getCartInfoRef.current = async () => {
    if (!cartInfo.uniqueID) return;
    try {
      const result = await apiCart("GET", cartInfo.uniqueID, {});
      if (result.resultCode === 200) {
        dispatch(setCartInfo(result.data));
      } else {
        throw result.message;
      }
    } catch (error) {
      console.log(error);
    }
  };

  getOutletSetting.current = async (outletName) => {
    try {
      let outletSetting = {};
      const result = await apiOutlet("GET", `${outletName}/settings`, {});
      if (result.resultCode === 200) {
        for(const setting of result.data){
          switch (setting.settingKey) {
            case "Enable_QR_DineIn":
              outletSetting["dineInOption"] = {
                enable: setting.settingValue.toLowerCase()=="true",
                displayName: setting.displayName,
                serviceCharges: JSON.parse((setting.dataOptions||"[]"))
              }
              break;
            case "Enable_QR_TakeAway":
              outletSetting["takeAwayOption"] = {
                enable: setting.settingValue.toLowerCase()=="true",
                displayName: setting.displayName,
                serviceCharges: JSON.parse((setting.dataOptions||"[]"))
              }
              break;
            default:
              break;
          }
        }
        dispatch(setOutletSetting(outletSetting));
      } else {
        throw result.message;
      }
      if(orderType=="DINEIN")
        dispatch(setServiceCharge((outletSetting["dineInOption"]?.serviceCharges || [])))
      else
        dispatch(setServiceCharge((outletSetting["takeAwayOption"]?.serviceCharges || [])))
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    dispatch(setIsSearchItem(false)); 
    dispatch(setSearchItemObj({
      doSearch: false,
      searchText: "",
      isResetList: true
    })); 
    dispatch(setEnableSearchUsingScroll(false)); 
    dispatch(setOutletName("edge cafe")); 
    getOutletSetting.current("edge cafe");
    getCartInfoRef.current();
  },[dispatch])
  return <RouterProvider router={router} fallbackElement={<Loading />} />;
}
