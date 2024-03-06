import { RenderItemProduct } from "../../components/RenderItemProduct";
import { useSelector } from "react-redux";

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

    if (
      viewType === "list" ||
      (viewTypeGroup && viewTypeGroup.viewType === "list")
    ) {
      styleObj = {
        width: "100%",
        display: "flex",
        flexDirection: "column",
      };
    } else if (
      viewType === "detailed" ||
      (viewTypeGroup && viewTypeGroup.viewType === "detailed")
    ) {
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
}