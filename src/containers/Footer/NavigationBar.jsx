import { useNavigate } from "react-router-dom";
import { HomeIcon, ProfileIcon, TaskListIcon } from "../../assets/svgIcon";

export const RenderNavigationBar = () => {
  const navigate = useNavigate();
  return (
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
  );
}