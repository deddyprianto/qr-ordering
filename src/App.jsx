import Layout from "./containers/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loading from "./components/Loading";
import "./scss/App.scss";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setIsSearchItem, setSearchItemObj, setEnableSearchUsingScroll } from "./app/dataSlicePersisted";

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
        path: "auth",
        lazy: () => import("./pages/Auth"),
      },
      {
        path: "cart",
        lazy: () => import("./pages/Cart"),
      },
      {
        path: "profile",
        lazy: () => import("./pages/Profile"),
      },
      {
        path: "otp",
        lazy: () => import("./pages/AuthOtp"),
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
  useEffect(()=>{
    dispatch(setIsSearchItem(false)); 
    dispatch(setSearchItemObj({
      doSearch: false,
      searchText: "",
      isResetList: true
    })); 
    dispatch(setEnableSearchUsingScroll(false)); 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return <RouterProvider router={router} fallbackElement={<Loading />} />;
}
