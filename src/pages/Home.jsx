import React, { useEffect } from "react";
import { RenderItemProduct } from "../components/RenderItemProduct";
import { useSelector, useDispatch } from "react-redux";
import { setShowSplashScreen } from "../app/dataSlicePersisted";
export function Component() {
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

  const renderNavbarMenu = () => {
    const itemScroll = () => {
      return (
        <div
          style={{
            display: "flex",
            flexGrow: "1",
            flexBasis: "0%",
            flexDirection: "column",
            padding: "10px 8px",
            width: "96px",
          }}
        >
          <div
            style={{
              borderRadius: "16px",
              border: "2px solid var(--grey-scale-color-grey-scale-4, #F9F9F9)",
              backgroundColor: "var(--button-color-disable, #B7B7B7)",
              display: "flex",
              height: "64px",
              flexDirection: "column",
            }}
          />
          <div
            style={{
              justifyContent: "center",
              overflow: "hidden",
              color: "var(--text-color-primary, #343A4A)",
              textAlign: "center",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              letterSpacing: "0.28px",
              marginTop: "12px",
              font: "500 14px/20px Helvetica Neue, sans-serif ",
            }}
          >
            Chef Recommendation
          </div>
        </div>
      );
    };
    return (
      <div
        style={{
          borderBottom:
            "1px solid var(--grey-scale-color-grey-scale-3, #D6D6D6)",
          display: "flex",
          gap: "0px",
          width: "100%",
          overflowY: "auto",
        }}
      >
        {itemScroll()}
        {itemScroll()}
        {itemScroll()}
        {itemScroll()}
        {itemScroll()}
      </div>
    );
  };

  const renderMain = () => {
    if (isSplashScreen) {
      return renderSplashScreen();
    } else {
      return (
        <div style={{ padding: "16px" }}>
          {renderNavbarMenu()}
          <p
            style={{ fontWeight: "700", fontSize: "22px", margin: "16px 0px" }}
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
            <RenderItemProduct isPromo={true} />
            <RenderItemProduct isPromo={false} />
            <RenderItemProduct isPromo={true} />
            <RenderItemProduct isPromo={false} />
            <RenderItemProduct isPromo={true} />
          </div>
        </div>
      );
    }
  };

  return <React.Fragment>{renderMain()}</React.Fragment>;
}
