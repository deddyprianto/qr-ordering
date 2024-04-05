import { lazy } from "react";
import { useSelector } from "react-redux";

const RenderItemProduct = lazy(
  () => import("../../components/RenderItemProduct"),
);

export const ProductCatalog = () => {
  const cartInfo = useSelector((state) => state.dataSlicePersisted.cartInfo);

  const { groupCollecting, saveRefNoGroup, menuSubGroup } = useSelector(
    (state) => state.dataSlice,
  );

  const viewTypeGroup = groupCollecting.find(
    (item) => item.refNo === saveRefNoGroup,
  );

  const handleLayoutStyle = (viewType, viewTypeGroup) => {
    let styleObj;
    let usedType = viewType;
    if(!usedType || usedType=="" || usedType=="inherit")
      usedType=(viewTypeGroup?.viewType || "grid") 

    if (usedType === "list") {
      styleObj = {
        width: "100%",
        display: "flex",
        flexDirection: "column",
      };
    } else if (usedType === "detailed") {
      styleObj = {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
      };
    } else {
      styleObj = {
        width: "100%",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "1fr",
        gap: "16px",
        gridAutoFlow: "row",
        gridTemplateAreas: '". ."',
      };
    }
    return styleObj;
  };

  return menuSubGroup?.map((menu, idx) => {
    const viewType = menu.viewType;
    return (
      <div key={menu.refNo} id={"sub_" + idx + "_" + menu.refNo}>
        <div className="text-gray-700 text-lg font-bold leading-6 mt-6 mb-2">
          {menu.buttonTitle}
        </div>
        <div style={handleLayoutStyle(viewType, viewTypeGroup)}>
          {menu.items?.map((item) => {
            return (
              <RenderItemProduct
                viewType={viewType}
                cartId={item.productInfo.uniqueID}
                key={`${item.buttonType}_${item.refNo}`}
                cartID={cartInfo?.uniqueID}
                qtyInCart={item?.cartQuantity || 0}
                cartLineID={item?.cartLineID || ""}
                item={item?.productInfo}
              />
            );
          })}
        </div>
      </div>
    );
  });
};
