import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import { useEffect, useRef } from "react";
import screen from "../../hooks/useWindowSize";
import { useDispatch, useSelector } from "react-redux";
import { setSearchItemObj } from "../app/dataSlicePersisted";
import { EdgeSnackProvider } from "../components/EdgeSnack";
// import RenderCartSummary from "../components/Home/RenderCartSummary";

export default function Layout() {
  const childRef = useRef(null);

  const dispatch = useDispatch();
  const isSearchItem = useSelector((state) => state.dataSlice.isSearchItem);
  const { enableSearchUsingScroll, searchItemObj } = useSelector(
    (state) => state.dataSlicePersisted,
  );

  const handleParentScroll = () => {
    if (!isSearchItem || !enableSearchUsingScroll) return;
    const childElement = childRef.current;
    if (!childElement) return;
    let scrollPosition = parseInt(
      childElement.scrollHeight - childElement.scrollTop,
    );

    if (
      scrollPosition - 5 < childElement.clientHeight &&
      childElement.clientHeight < scrollPosition + 5
    ) {
      let tempSearchItemObj = JSON.parse(JSON.stringify(searchItemObj));
      tempSearchItemObj.doSearch = true;
      tempSearchItemObj.isResetList = false;
      dispatch(setSearchItemObj(tempSearchItemObj));
    }
  };

  useEffect(() => {
    const childElement = childRef.current;
    if (childElement) {
      childElement.addEventListener("scroll", handleParentScroll);
    }

    return () => {
      if (childElement) {
        childElement.removeEventListener("scroll", handleParentScroll);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let navigation = useNavigation();
  const { width } = screen();
  const gadgetScreen = width < 980;

  const renderResponsiveDesign = () => {
    if (gadgetScreen) {
      return (
        <div
          style={{
            height: "100vh",
            width: "100vw",
            display: "grid",
            gridTemplateColumns: "1fr",
            gridTemplateRows: "100px 1fr",
            gap: "0px 0px",
            gridAutoFlow: "row",
            gridTemplateAreas: '"."\n    "."\n    "."',
            overflow: "hidden",
          }}
        >
          <div style={{ position: "fixed", top: 0, right: 0 }}>
            {navigation.state !== "idle" && <p>Navigation in progress...</p>}
          </div>
          <Header />
          <div
            className="h-full overflow-x-auto"
            ref={childRef}
            onScroll={handleParentScroll}
          >
            <Outlet />
          </div>
          {/* <RenderCartSummary /> */}
        </div>
      );
    } else {
      return (
        <div style={{ width: "100vw" }}>
          <div
            style={{
              width: "45%",
              marginLeft: "auto",
              marginRight: "auto",
              backgroundColor: "white",
              borderRadius: "8px",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              overflowY: "auto",
              marginTop: "10px",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "98vh",
                display: "grid",
                gridTemplateColumns: "1fr",
                gridTemplateRows: "100px 1fr",
                gap: "0px 0px",
                gridAutoFlow: "row",
                gridTemplateAreas: '"."\n    "."\n    "."',
                overflow: "hidden",
              }}
            >
              <div style={{ position: "fixed", top: 0, right: 0 }}>
                {navigation.state !== "idle" && (
                  <p>Navigation in progress...</p>
                )}
              </div>
              <Header />
              <div
                className="h-full overflow-x-auto"
                ref={childRef}
                onScroll={handleParentScroll}
              >
                <Outlet />
              </div>
              {/* <RenderCartSummary /> */}
            </div>
          </div>
        </div>
      );
    }
  };
  return <EdgeSnackProvider>{renderResponsiveDesign()}</EdgeSnackProvider>;
}
