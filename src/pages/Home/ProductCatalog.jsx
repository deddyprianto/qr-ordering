import PropTypes from "prop-types";
import { RenderItemProduct } from "../../components/RenderItemProduct";

export const ProductCatalog = ({ 
  menuSubGroup
}) => {
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
                isPromo={item.productInfo?.promotions.length > 0}
                item={item.productInfo}
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
  menuSubGroup: PropTypes.array
}