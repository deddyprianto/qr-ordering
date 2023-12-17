import { Outlet, useNavigation, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import React from "react";
import screen from "../../hooks/useWindowSize";

export default function Layout() {
  let navigation = useNavigation();
  const location = useLocation();
  const pathname = location.pathname;

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
            gridTemplateRows:
              pathname === "/auth" || pathname === "/otp"
                ? "70px 1fr 50px"
                : "100px 1fr 80px",
            gap: "0px 0px",
            gridAutoFlow: "row",
            gridTemplateAreas: '"."\n    "."\n    "."',
          }}
        >
          <div style={{ position: "fixed", top: 0, right: 0 }}>
            {navigation.state !== "idle" && <p>Navigation in progress...</p>}
          </div>
          <Header />
          <div className="h-full overflow-x-auto">
            <Outlet />
          </div>
          <Footer />
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
                gridTemplateRows: "100px 1fr 80px",
                gap: "0px 0px",
                gridAutoFlow: "row",
                gridTemplateAreas: '"."\n    "."\n    "."',
              }}
            >
              <div style={{ position: "fixed", top: 0, right: 0 }}>
                {navigation.state !== "idle" && (
                  <p>Navigation in progress...</p>
                )}
              </div>
              <Header />
              <div className="h-full overflow-x-auto">
                <Outlet />
              </div>
              <Footer />
            </div>
          </div>
        </div>
      );
    }
  };
  return <React.Fragment>{renderResponsiveDesign()}</React.Fragment>;
}
