import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setShowSplashScreen,
  setEnableSearchUsingScroll,
} from "../../app/dataSlicePersisted";


import { RenderItemSearch } from "../../components/Home/RenderItemSearch";
import { RenderSplashScreen } from "../../components/SplashScreen";
import { MainView } from "./MainVIew";

export function Component() {
  
  const [isFirstOpenSearchBar, setIsFirstOpenSearchBar] = useState(true);

  const dispatch = useDispatch();
  const isSplashScreen = useSelector(
    (state) => state.dataSlicePersisted.isSplashScreenShow,
  );
  const isSearchItem = useSelector(
    (state) => state.dataSlicePersisted.isSearchItem,
  );
  const searchItemObj = useSelector(
    (state) => state.dataSlicePersisted.searchItemObj,
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(setShowSplashScreen(false));
    }, 2000); // 5000 milliseconds = 5 seconds
    return () => {
      clearTimeout(timeoutId);
    };
  }, [dispatch]);

  useEffect(() => {
    if (searchItemObj?.doSearch) {
      setIsFirstOpenSearchBar(false);
    }
  }, [searchItemObj]);

  useEffect(() => {
    if (!isSearchItem) {
      dispatch(setEnableSearchUsingScroll(false));
      setIsFirstOpenSearchBar(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSearchItem]);


  

  const renderMain = () => {
    if (isSplashScreen) return <RenderSplashScreen />;
    else if (isFirstOpenSearchBar) return <MainView/>;
    else return <RenderItemSearch searchText={searchItemObj?.searchText} />;
  };

  return <React.Fragment>{renderMain()}</React.Fragment>;
}
