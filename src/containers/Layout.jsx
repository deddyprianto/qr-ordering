import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  let navigation = useNavigation();
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "80px 1fr 80px",
        gap: "0px 0px",
        gridAutoFlow: "row",
        gridTemplateAreas: '"."\n    "."\n    "."',
      }}
    >
      <div style={{ position: "fixed", top: 0, right: 0 }}>
        {navigation.state !== "idle" && <p>Navigation in progress...</p>}
      </div>
      <Header />
      <div
        style={{
          height: "100%",
          overflowX: "auto",
        }}
      >
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
