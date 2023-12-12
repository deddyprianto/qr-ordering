import {
  HamburgerIcon,
  LoginIcon,
  LogoIcon,
  SearchIcon,
  TaskListIcon,
} from "../assets/svgIcon";
import { useNavigate, useLocation } from "react-router-dom";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  const renderMenuDrawer = () => {
    return (
      <div
        onClick={() => navigate("/auth")}
        style={{
          width: "100%",
          padding: "16px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <LoginIcon />
        <div style={{ marginLeft: "10px" }}>Login</div>
      </div>
    );
  };
  const renderMain = () => {
    if (pathname === "/auth" || pathname === "/otp") {
      return (
        <div
          style={{
            padding: "16px",
          }}
        >
          <LogoIcon />
          <p>[store location]</p>
        </div>
      );
    } else {
      return (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 100px 1fr",
            gridTemplateRows: "1fr",
            gap: "0px 0px",
            gridAutoFlow: "row",
            gridTemplateAreas: '". . ."',
            borderBottom:
              "1px solid var(--grey-scale-color-grey-scale-4, #F9F9F9)",
            backgroundColor: "var(--brand-color-tertiary, #FFF)",
            padding: "10px 16px",
            alignItems: "center",
          }}
        >
          <div onClick={toggleDrawer}>
            <HamburgerIcon />
          </div>
          <div onClick={() => navigate("/auth")}>
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/53d8af31e6ef65393d12fb910d1a94d2038972ee16066326db946515a4806c5f?apiKey=7ef2d401d2464e0bb0e4708e7eee43f9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/53d8af31e6ef65393d12fb910d1a94d2038972ee16066326db946515a4806c5f?apiKey=7ef2d401d2464e0bb0e4708e7eee43f9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/53d8af31e6ef65393d12fb910d1a94d2038972ee16066326db946515a4806c5f?apiKey=7ef2d401d2464e0bb0e4708e7eee43f9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/53d8af31e6ef65393d12fb910d1a94d2038972ee16066326db946515a4806c5f?apiKey=7ef2d401d2464e0bb0e4708e7eee43f9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/53d8af31e6ef65393d12fb910d1a94d2038972ee16066326db946515a4806c5f?apiKey=7ef2d401d2464e0bb0e4708e7eee43f9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/53d8af31e6ef65393d12fb910d1a94d2038972ee16066326db946515a4806c5f?apiKey=7ef2d401d2464e0bb0e4708e7eee43f9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/53d8af31e6ef65393d12fb910d1a94d2038972ee16066326db946515a4806c5f?apiKey=7ef2d401d2464e0bb0e4708e7eee43f9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/53d8af31e6ef65393d12fb910d1a94d2038972ee16066326db946515a4806c5f?apiKey=7ef2d401d2464e0bb0e4708e7eee43f9&"
              style={{
                aspectRatio: "4.18",
                objectFit: "contain",
                objectPosition: "center",
                width: "117px",
                overflow: "hidden",
                maxWidth: "100%",
                margin: "auto 0",
              }}
              alt="Image 1"
            />
          </div>
          <div
            style={{
              alignItems: "center",
              alignSelf: "stretch",
              display: "flex",
              paddingLeft: "6px",
              justifyContent: "flex-end",
              gap: "14px",
            }}
          >
            <TaskListIcon />
            <SearchIcon />
          </div>

          <Drawer open={isOpen} onClose={toggleDrawer} direction="left">
            {renderMenuDrawer()}
          </Drawer>
        </div>
      );
    }
  };

  return <>{renderMain()}</>;
}
