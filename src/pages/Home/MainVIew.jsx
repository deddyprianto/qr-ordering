import {  useState } from "react";
import { NavbarMenu } from "./NavbarMenu";
import { Insights } from "../../components/Insights";
import { SummaryTabMenu } from "./SummaryTabMenu";
import {  useSelector } from "react-redux";
import { RenderItemProduct } from "../../components/RenderItemProduct";
import image3 from "../../assets/image3.png";
import RenderToastCart from "./RenderToastCart";
import "../../scss/animation.scss";
import Skeleton from "../../components/Skeleton";


export const MainView = () => {
  const [highlights, setHighlights] = useState(true);
  const [dataSummaryTabMenu, setDataSummaryTabMenu] = useState([]);
  const [dataItem, setDataItem] = useState([]);
  const isSearchItem = useSelector(
    (state) => state.dataSlicePersisted.isSearchItem,
  );

  return (
    <div>
      <NavbarMenu
        procSummaryTabMenu={setDataSummaryTabMenu}
        procItem={setDataItem}
      />
      <div style={{ padding: "16px 16px 0px 16px" }}>
        {highlights && (
          <Insights
            title="Tag Insights"
            description="Explore tags as you navigate the menu. You might encounter these tags
                          anywhere in our menu."
            onClick={() => setHighlights(false)}
          />
        )}
        <SummaryTabMenu
          isShow={dataSummaryTabMenu.length > 0}
          dataSummaryTabMenu={dataSummaryTabMenu}
        />
        <p
          style={{
            fontWeight: "700",
            fontSize: "22px",
            marginTop: "16px",
          }}
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
          {dataItem.map((x) => {
            return (
              <RenderItemProduct
                key={`${x.buttonType}_${x.buttonTitle}`}
                isPromo={x.productInfo?.promotions.length > 0}
                imageProduct={image3}
                productInfo={x.productInfo}
              />
            );
          })}
        </div>
      </div>
      <RenderToastCart />
      <Skeleton />
      {isSearchItem && (
        <div className="absolute inset-0 backdrop-filter backdrop-blur-lg z-0"></div>
      )}
    </div>
  );
};
