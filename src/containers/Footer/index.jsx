import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { RenderNavigationBar } from "./NavigationBar";
import RenderToastCart from "../../components/Home/RenderToastCart";

const Footer = () => {
  const { cartInfo, memberInfo } = useSelector((state) => state.dataSlicePersisted);
  const location = useLocation();

  const renderMain = () => {
    return (
      <header
        style={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        {(memberInfo?.membershipNo) && <RenderNavigationBar/>}
        {((typeof(cartInfo.uniqueID) != 'undefined') && location.pathname=="/") &&
          <RenderToastCart 
            numOfItems={cartInfo.noOfItems}
            totalAmount={cartInfo.nettAmount}
          />
        }
      </header>
    );
  };
  return <>{renderMain()}</>;
};

export default Footer;
