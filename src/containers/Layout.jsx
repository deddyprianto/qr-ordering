import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  let navigation = useNavigation();

  return (
    <>
      <div style={{ position: "fixed", top: 0, right: 0 }}>
        {navigation.state !== "idle" && <p>Navigation in progress...</p>}
      </div>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
