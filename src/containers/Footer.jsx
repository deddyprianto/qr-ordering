import {  useNavigate } from "react-router-dom";
import { HomeIcon, ProfileIcon, TaskListIcon } from "../assets/svgIcon";

const Footer = () => {
  const navigate = useNavigate();

  const renderMain = () => {
    return (
      <header
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <nav
          style={{
            boxShadow: "0px -5px 10px 0px rgba(0, 0, 0, 0.05)",
            backgroundColor: "var(--brand-color-tertiary, #FFF)",
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            gap: "20px",
            padding: "8px 10px",
          }}
        >
          <div
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexGrow: "1",
              flexBasis: "0%",
              flexDirection: "column",
            }}
            onClick={() => navigate("/")}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                navigate("/");
              }
            }}
          >
            <HomeIcon />
            <div
              style={{
                alignSelf: "stretch",
                color: "var(--brand-color-primary, #00524C)",
                textAlign: "center",
                letterSpacing: "0.28px",
                marginTop: "4px",
                font: "700 14px/20px Helvetica Neue, sans-serif ",
              }}
            >
              Home
            </div>
          </div>
          <div
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexGrow: "1",
              flexBasis: "0%",
              flexDirection: "column",
              padding: "2px 0",
            }}
            onClick={() => navigate("/cart")}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                navigate("/cart");
              }
            }}
          >
            <TaskListIcon />
            <div
              style={{
                alignSelf: "stretch",
                color: "var(--brand-color-secondary, #E80B52)",
                textAlign: "center",
                letterSpacing: "0.28px",
                marginTop: "7px",
                whiteSpace: "nowrap",
                font: "700 14px/20px Helvetica Neue, sans-serif ",
              }}
            >
              Orders
            </div>
          </div>
          <div
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexGrow: "1",
              flexBasis: "0%",
              flexDirection: "column",
            }}
            onClick={() => navigate("/profile")}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                navigate("/profile");
              }
            }}
          >
            <ProfileIcon />
            <div
              style={{
                alignSelf: "stretch",
                color: "var(--brand-color-secondary, #E80B52)",
                textAlign: "center",
                letterSpacing: "0.28px",
                marginTop: "4px",
                whiteSpace: "nowrap",
                font: "700 14px/20px Helvetica Neue, sans-serif ",
              }}
            >
              Profile
            </div>
          </div>
        </nav>
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/57494403ec46a0ffc5b864060697a5d9bb2cfc8590a5ee00b48a031b757e82c9?apiKey=7ef2d401d2464e0bb0e4708e7eee43f9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/57494403ec46a0ffc5b864060697a5d9bb2cfc8590a5ee00b48a031b757e82c9?apiKey=7ef2d401d2464e0bb0e4708e7eee43f9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/57494403ec46a0ffc5b864060697a5d9bb2cfc8590a5ee00b48a031b757e82c9?apiKey=7ef2d401d2464e0bb0e4708e7eee43f9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/57494403ec46a0ffc5b864060697a5d9bb2cfc8590a5ee00b48a031b757e82c9?apiKey=7ef2d401d2464e0bb0e4708e7eee43f9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/57494403ec46a0ffc5b864060697a5d9bb2cfc8590a5ee00b48a031b757e82c9?apiKey=7ef2d401d2464e0bb0e4708e7eee43f9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/57494403ec46a0ffc5b864060697a5d9bb2cfc8590a5ee00b48a031b757e82c9?apiKey=7ef2d401d2464e0bb0e4708e7eee43f9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/57494403ec46a0ffc5b864060697a5d9bb2cfc8590a5ee00b48a031b757e82c9?apiKey=7ef2d401d2464e0bb0e4708e7eee43f9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/57494403ec46a0ffc5b864060697a5d9bb2cfc8590a5ee00b48a031b757e82c9?apiKey=7ef2d401d2464e0bb0e4708e7eee43f9&"
          style={{
            aspectRatio: "12.65",
            objectFit: "contain",
            objectPosition: "center",
            width: "100%",
            overflow: "hidden",
          }}
          alt="Banner"
        />
      </header>
    );
  };
  return <>{renderMain()}</>;
};

export default Footer;
