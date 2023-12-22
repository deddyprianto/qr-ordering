import React, { useEffect, useState } from "react";
import { RenderItemProduct } from "../../components/RenderItemProduct";
import { useSelector, useDispatch } from "react-redux";
import {
  setShowSplashScreen,
  setEnableSearchUsingScroll,
} from "../../app/dataSlicePersisted";

import image3 from "../../assets/image3.png";
import { IconClose } from "../../assets/svgIcon";


import { RenderItemSearch } from "../../components/Home/RenderItemSearch";
import { RenderNavbarMenu } from "./NavbarMenu";
import { RenderSummaryTabMenu } from "./SummaryTabMenu";

export function Component() {
  
  const [highlights, setHighlights] = useState(true);
  const [dataSummaryTabMenu, setDataSummaryTabMenu] = useState([]);
  const [dataItem, setDataItem] = useState([]);
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

  const renderSplashScreen = () => {
    return (
      <img
        alt=""
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fb0551243645df4fdd79fa97aa6b14d9368a75de464edf18120823a4068a0133?apiKey=7ef2d401d2464e0bb0e4708e7eee43f9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fb0551243645df4fdd79fa97aa6b14d9368a75de464edf18120823a4068a0133?apiKey=7ef2d401d2464e0bb0e4708e7eee43f9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fb0551243645df4fdd79fa97aa6b14d9368a75de464edf18120823a4068a0133?apiKey=7ef2d401d2464e0bb0e4708e7eee43f9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fb0551243645df4fdd79fa97aa6b14d9368a75de464edf18120823a4068a0133?apiKey=7ef2d401d2464e0bb0e4708e7eee43f9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fb0551243645df4fdd79fa97aa6b14d9368a75de464edf18120823a4068a0133?apiKey=7ef2d401d2464e0bb0e4708e7eee43f9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fb0551243645df4fdd79fa97aa6b14d9368a75de464edf18120823a4068a0133?apiKey=7ef2d401d2464e0bb0e4708e7eee43f9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fb0551243645df4fdd79fa97aa6b14d9368a75de464edf18120823a4068a0133?apiKey=7ef2d401d2464e0bb0e4708e7eee43f9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fb0551243645df4fdd79fa97aa6b14d9368a75de464edf18120823a4068a0133?apiKey=7ef2d401d2464e0bb0e4708e7eee43f9&"
        style={{
          position: "absolute",
          inset: "0",
          height: "100%",
          width: "100%",
          objectPosition: "center",
        }}
      />
    );
  };

  const renderTumbs = ({ bgColor, label, icon }) => {
    return (
      <div
        className={`${bgColor} flex justify-between gap-1 pl-1.5 pr-3 py-1 rounded-[100px]`}
      >
        <img
          alt=""
          loading="lazy"
          src={icon}
          className="aspect-square object-contain object-center w-[18px] overflow-hidden shrink-0 max-w-full"
        />
        <div className="text-white text-xs font-medium leading-4 tracking-wide">
          {label}
        </div>
      </div>
    );
  };

  const renderInsight = () => {
    return (
      <div className="bg-orange-100 flex max-w-[398px] flex-col pb-2 px-2 rounded-2xl">
        <div className="flex w-full justify-between gap-5 mt-1.5 items-start">
          <div className="items-stretch flex gap-1">
            <img
              alt=""
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/14f562e35fb290deedd2e1894727d725e021330e099e319a33268d4b786041f2?apiKey=7ef2d401d2464e0bb0e4708e7eee43f9&"
              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
            />
            <div className="text-gray-700 text-sm font-bold leading-5 tracking-wide self-center grow whitespace-nowrap my-auto">
              Tag Insights
            </div>
          </div>
          <div
            onClick={() => setHighlights(false)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                setHighlights(false);
              }
            }}
            className="justify-center items-center bg-[#FF4782] self-stretch flex aspect-square flex-col w-7 h-7 px-1 rounded-[1000px]"
          >
            <IconClose />
          </div>
        </div>
        <div className="text-gray-700 text-xs font-medium leading-4 tracking-wide">
          Explore tags as you navigate the menu. You might encounter these tags
          anywhere in our menu.
        </div>
        <div className="flex flex-wrap mt-2 gap-2">
          {renderTumbs({
            bgColor: "bg-lime-700",
            icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0271d4175bcbe9354d8b97e5f1623617c1f73da2ef180946a2ebd96d7d026452?apiKey=7ef2d401d2464e0bb0e4708e7eee43f9&",
            label: "Chef’s Recommendation",
          })}

          {renderTumbs({
            bgColor: "bg-red-600",
            icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/551ae8011c7dbd3b38d06852e761d994a329f0996c28433dc20bd955cbd76657?apiKey=7ef2d401d2464e0bb0e4708e7eee43f9&",
            label: "Spicy!",
          })}

          {renderTumbs({
            bgColor: "bg-amber-500",
            icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d3ac0717d6088c9ce3e26db410d23f6abe1f30171654953eb76260706605014c?apiKey=7ef2d401d2464e0bb0e4708e7eee43f9&",
            label: "Customer Favorites",
          })}
        </div>
      </div>
    );
  };

  const renderMenu = () => {
    return (
      <div className="relative">
        <RenderNavbarMenu
          procSummaryTabMenu = {setDataSummaryTabMenu}
          procItem = {setDataItem}
        />
        <div style={{ padding: "16px" }}>
          {highlights && renderInsight()}
          <RenderSummaryTabMenu 
            isShow={dataSummaryTabMenu.length > 0}
            dataSummaryTabMenu = {dataSummaryTabMenu}
          />
          <p
            style={{
              fontWeight: "700",
              fontSize: "22px",
              margin: "16px 0px",
            }}
          >
            You Might Like This!
          </p>
          <div
            style={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gridTemplateRows: "1fr",
              gap: "16px",
              gridAutoFlow: "row",
              gridTemplateAreas: '". ."',
            }}
          >
            {dataItem.map((x) => {
              return (
                <RenderItemProduct
                  key={`${x.buttonType}_${x.buttonTitle}`}
                  isPromo={x.productInfo?.promotions.length > 0}
                  imageProduct={image3}
                  productInfo={x.productInfo}
                />
              );
            })}
          </div>
        </div>
        {isSearchItem && (
          <div className="absolute inset-0 backdrop-filter backdrop-blur-lg z-0"></div>
        )}
      </div>
    );
  };

  const renderMain = () => {
    if (isSplashScreen) return renderSplashScreen();
    else if (isFirstOpenSearchBar) return renderMenu();
    else return <RenderItemSearch searchText={searchItemObj?.searchText} />;
  };

  return <React.Fragment>{renderMain()}</React.Fragment>;
}
