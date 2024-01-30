import Layout from "./containers/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loading from "./components/Loading";
import "./scss/App.scss";

import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiCart } from "./services/Cart";
import { apiOutlet } from "./services/Outlet";
import {
  setSearchItemObj,
  setEnableSearchUsingScroll,
  setCartInfo,
  setOutletName,
  setTheme,
  setOrderType,
  setAccessToken,
} from "./app/dataSlicePersisted";
import {
  setIsSearchItem,
  setOutletSetting,
  setServiceCharge,
} from "./app/dataSlice";
import { callAPI } from "./services/services";

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

  const { cartInfo, orderType, accessToken, memberInfo } = useSelector(
    (state) => state.dataSlicePersisted,
  );

  const getCartInfoRef = useRef();
  const getOutletSetting = useRef();
  const getAuthUser = useRef();
  const getLayoutRef = useRef();

  getLayoutRef.current = async () => {
    try {
      const response = await callAPI(
        `${import.meta.env.VITE_API_URL}/outlets/layout`,
        "GET",
      );

      const stateDefaultTheme = {};
      response?.data?.forEach((item) => {
        stateDefaultTheme[item.settingKey] = item.settingValue;
      });

      dispatch(setTheme(stateDefaultTheme));
    } catch (error) {
      console.log(error);
    }
  };

  const resetCartAndOrderType = (data) => {
    if(data?.status != 'PENDING'){
      dispatch(setCartInfo({}));
      dispatch(setOrderType(""));
    }
    else{
      dispatch(setCartInfo(data));
      dispatch(setOrderType(data?.orderType));
    }
  }

  getCartInfoRef.current = async () => {
    if (!cartInfo.uniqueID) return;
    try {
      const result = await apiCart("GET", cartInfo.uniqueID, {}, accessToken);
      if (result.resultCode === 200) {
        resetCartAndOrderType(result.data);
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
        for (const setting of result.data) {
          switch (setting.settingKey) {
            case "Enable_QR_DineIn":
              outletSetting["dineInOption"] = {
                enable: setting.settingValue.toLowerCase() == "true",
                displayName: setting.displayName,
                serviceCharges: JSON.parse(setting.dataOptions || "[]"),
              };
              break;
            case "Enable_QR_TakeAway":
              outletSetting["takeAwayOption"] = {
                enable: setting.settingValue.toLowerCase() == "true",
                displayName: setting.displayName,
                serviceCharges: JSON.parse(setting.dataOptions || "[]"),
              };
              break;
            default:
              break;
          }
        }
        dispatch(setOutletSetting(outletSetting));
      } else {
        throw result.message;
      }
      if (orderType == "DINEIN")
        dispatch(
          setServiceCharge(outletSetting["dineInOption"]?.serviceCharges || []),
        );
      else
        dispatch(
          setServiceCharge(
            outletSetting["takeAwayOption"]?.serviceCharges || [],
          ),
        );
    } catch (error) {
      console.log(error);
    }
  };

  getAuthUser.current = async () => {
    try {
      const responseAuth = await callAPI(
        `${import.meta.env.VITE_API_URL}/auth`,
        "GET",
      );
      if (Object.keys(memberInfo).length === 0) {
        console.log("LOGIN AS GUEST");
        dispatch(
          setAccessToken({
            accessToken: responseAuth?.data?.accessToken,
            type: "guest",
          }),
        );
      }
    } catch (error) {
      console.log("error on auth detected", error);
    }
  };

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
    dispatch(setOutletName("edge cafe"));

    getCartInfoRef.current();
    getOutletSetting.current("edge cafe");
    getLayoutRef.current();
    getAuthUser.current();
  }, [dispatch]);
  return <RouterProvider router={router} fallbackElement={<Loading />} />;
}
