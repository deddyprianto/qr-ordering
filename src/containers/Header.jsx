import {
  HamburgerIcon,
  LogoIcon,
  SearchIcon,
  TaskListIcon,
} from "../assets/svgIcon";
import { useNavigate, useLocation } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  const renderMain = () => {
    if (pathname === "/auth") {
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
          <HamburgerIcon />
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
        </div>
      );
    }
  };

  return <>{renderMain()}</>;
}
