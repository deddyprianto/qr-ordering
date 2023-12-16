import React, { useEffect, useState } from "react";
import { RenderItemProduct } from "../components/RenderItemProduct";
import { useSelector, useDispatch } from "react-redux";
import { setShowSplashScreen } from "../app/dataSlicePersisted";
import image1 from "../assets/image1.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import { IconClose } from "../assets/svgIcon";

export function Component() {
  const [summaryTabMenu, setSummaryTabMenu] = useState("Local Beverages");
  const [isSelectedItem, setIsSelectedItem] = useState("Christmas Menu 2023");
  const [highlights, setHighlights] = useState(true);
  const dispatch = useDispatch();
  const isSplashScreen = useSelector(
    (state) => state.dataSlicePersisted.isSplashScreenShow,
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(setShowSplashScreen(false));
    }, 2000); // 5000 milliseconds = 5 seconds

    return () => {
      clearTimeout(timeoutId);
    };
  }, [dispatch]);

  const renderSplashScreen = () => {
    return (
      <img
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
  const renderItemScroll = ({ label, imageItem }) => {
    return (
      <div
        onClick={() => setIsSelectedItem(label)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            setIsSelectedItem(label);
          }
        }}
        style={{
          flex: "0 0 auto",
          width: "100px",
        }}
        className={`mt-[16px] flex items-center flex-col p-[5px] ${
          label === isSelectedItem &&
          "border-b-[6px] border-solid border-b-[color:var(--Brand-color-Secondary,#FF4782)]"
        }`}
      >
        <img
          loading="lazy"
          src={imageItem}
          className={`w-[64px] rounded-2xl ${
            label === isSelectedItem
              ? "border-4 border-[#FF4782]"
              : "border-[2px] border-[#FFFFFF]"
          } `}
        />
        <div
          className={`flex justify-center items-center text-sm h-full text-center ${
            label === isSelectedItem
              ? "font-bold text-[#FF4782]"
              : "font-normal text-white"
          }`}
        >
          <div>{label}</div>
        </div>
      </div>
    );
  };
  const renderNavbarMenu = () => {
    const data = [
      {
        name: "Christmas Menu 2023",
        img: image1,
      },
      {
        name: "Christmas Menu 20",
        img: image1,
      },
      {
        name: "Snacks",
        img: image4,
      },
      {
        name: "Side Dishes",
        img: image5,
      },
      {
        name: "Beverages",
        img: image6,
      },
      {
        name: "Christmas Menu 202",
        img: image1,
      },
      {
        name: "Snacks",
        img: image4,
      },
      {
        name: "Side Dishes",
        img: image5,
      },
      {
        name: "Beverages",
        img: image6,
      },
    ];
    return (
      <div className="overflow-x-auto flex border-t-[color:var(--Grey-Scale-color-Grey-Scale-4,#F9F9F9)] bg-[#00524C] rounded-b-lg pl-[16px] pr-[16px]">
        {data.map((item) => {
          return renderItemScroll({
            label: item.name,
            imageItem: item.img,
          });
        })}
      </div>
    );
  };

  const renderTumbs = ({ bgColor, label, icon }) => {
    return (
      <div
        className={`${bgColor} flex justify-between gap-1 pl-1.5 pr-3 py-1 rounded-[100px]`}
      >
        <img
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

  const renderSummaryTabMenu = () => {
    const data = ["Local Beverages", "Homemade Drinks", "Canned Drinks"];
    return (
      <div className="flex overflow-x-auto mt-[24px] mb-[24px] gap-[8px]">
        {data.map((item) => {
          return (
            <div
              onClick={() => setSummaryTabMenu(item)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  setSummaryTabMenu(item);
                }
              }}
              key={item}
              style={{
                flex: "0 0 auto",
                width: "150px",
              }}
              className={`flex items-center text-sm tracking-wide  justify-center py-2 rounded-full ${
                item === summaryTabMenu
                  ? "text-white bg-[#FF4782] font-bold"
                  : "text-gray-700 border border-[color:var(--Grey-Scale-color-Grey-Scale-1,#343A4A)] border-solid"
              }`}
            >
              {item}
            </div>
          );
        })}

        {/* <div
          style={{
            flex: "0 0 auto",
            width: "150px",
          }}
          className="text-gray-700 flex text-sm font-medium whitespace-nowrap justify-center items-center border border-[color:var(--Grey-Scale-color-Grey-Scale-1,#343A4A)] grow px-4 py-2 rounded-full border-solid"
        >
          Homemade Drinks
        </div>
        <div
          style={{
            flex: "0 0 auto",
            width: "150px",
          }}
          className="flex text-gray-700 text-sm font-medium justify-center items-center border border-[color:var(--Grey-Scale-color-Grey-Scale-1,#343A4A)] grow pl-4 py-2 rounded-full border-solid"
        >
          Canned Drinks
        </div> */}
      </div>
    );
  };
  const renderMain = () => {
    if (isSplashScreen) {
      return renderSplashScreen();
    } else {
      return (
        <div>
          {renderNavbarMenu()}
          <div style={{ padding: "16px" }}>
            {highlights && renderInsight()}
            {renderSummaryTabMenu()}
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
              <RenderItemProduct isPromo={true} imageProduct={image1} />
              <RenderItemProduct isPromo={false} imageProduct={image3} />
              <RenderItemProduct isPromo={true} imageProduct={image4} />
              <RenderItemProduct isPromo={false} imageProduct={image5} />
              <RenderItemProduct isPromo={true} imageProduct={image6} />
              <RenderItemProduct isPromo={true} imageProduct={image1} />
              <RenderItemProduct isPromo={false} imageProduct={image3} />
              <RenderItemProduct isPromo={true} imageProduct={image4} />
              <RenderItemProduct isPromo={false} imageProduct={image5} />
              <RenderItemProduct isPromo={true} imageProduct={image6} />
            </div>
          </div>
        </div>
      );
    }
  };

  return <React.Fragment>{renderMain()}</React.Fragment>;
}
