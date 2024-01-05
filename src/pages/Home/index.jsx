import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setShowSplashScreen,
  setEnableSearchUsingScroll,
} from "../../app/dataSlicePersisted";
import { RenderSplashScreen } from "../../components/SplashScreen";
import { MainView } from "./MainVIew";
import { RenderSearchItemBar } from "../../components/Home/SearchItemBar";

export function Component() {
  const [isFirstOpenSearchBar, setIsFirstOpenSearchBar] = useState(true);

  const dispatch = useDispatch();
  const { searchItemObj, isSplashScreen } = useSelector(
    (state) => state.dataSlicePersisted,
  );
  const isSearchItem = useSelector(
    (state) => state.dataSlice.isSearchItem,
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
    else if (isFirstOpenSearchBar) return <MainView />;
    else return <RenderSearchItemBar searchText={searchItemObj?.searchText} />;
  };

  return <React.Fragment>{renderMain()}</React.Fragment>;
}
