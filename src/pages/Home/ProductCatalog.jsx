import PropTypes from "prop-types";
import { RenderItemProduct } from "../../components/RenderItemProduct";
import { useSelector } from "react-redux";
import { mapCartAndProduct } from "../../components/Home/productAndCartMapper";

export const ProductCatalog = ({ 
  menuSubGroup,
  setMenuSubGroup
}) => {
  const cartInfo = useSelector(
    (state) => state.dataSlicePersisted.cartInfo,
  );

  const reMapProductAndCart = (newCartInfo) => {
    for (const sb of menuSubGroup) {
      let itemReplacer = mapCartAndProduct(sb.items, newCartInfo)
      sb.items = itemReplacer;
      setMenuSubGroup([...menuSubGroup]);
    }
  }

  return (
    menuSubGroup?.map((menu, idx)=>{
      return(
        <div key={menu.refNo} id={"sub_"+idx+"_"+menu.refNo}>
          <div className="text-gray-700 text-lg font-bold leading-6 mt-6 mb-2">
            {menu.buttonTitle}
          </div>
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
          {menu.items?.map((item) => {
            return (
              <RenderItemProduct
                key={`${item.buttonType}_${item.refNo}`}
                cartID={cartInfo.uniqueID}
                qtyInCart={item.cartQuantity || 0}
                cartLineID={item.cartLineID || ""}
                isPromo={item.productInfo?.promotions.length > 0}
                item={item.productInfo}
                reMapProductAndCart={reMapProductAndCart}
              />
            );
          })}
          
        </div>
        </div>
      );
    })
  );
}

ProductCatalog.propTypes = {
  menuSubGroup: PropTypes.array,
  setMenuSubGroup: PropTypes.func
}