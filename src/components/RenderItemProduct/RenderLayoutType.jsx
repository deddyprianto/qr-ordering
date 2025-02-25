import { useSelector } from "react-redux";
import { RenderButtonAddToCart } from "./ButtonAddToCart";
import PropTypes from "prop-types";
import RenderListView from "./RenderListView";
import RenderDetailedView from "./RenderDetailedView";
import RenderGridView from "./RenderGridView";

const RenderLayoutType = ({
  viewType,
  theme,
  handleOpenModalAddItem,
  item,
  isLoading,
  cartLineID,
  qtyInCart,
  handleClickButtonAdd,
  isQtyExist,
}) => {
  const { cartInfo } = useSelector((state) => state.dataSlicePersisted);
  const { groupCollecting, saveRefNoGroup } = useSelector(
    (state) => state.dataSlice,
  );

  const viewTypeGroup = groupCollecting.find(
    (item) => item.refNo === saveRefNoGroup,
  );

  const renderButtonAdd = () => {
    if (isLoading) {
      return (
        <button
          type="button"
          className="bg-[#9D9D9D] rounded-lg flex justify-center items-center py-2 text-white w-full"
          disabled
        >
          <span className="loader"></span>
          <div id="updatingButtonLabel">
            {cartInfo && cartInfo?.details?.length === 0
              ? "Adding..."
              : "Updating..."}
          </div>
        </button>
      );
    } else {
      return (
        <RenderButtonAddToCart
          isLoading={isLoading}
          qtyInCart={qtyInCart}
          item={item}
          cartLineID={cartLineID}
          handleClickButtonAdd={handleClickButtonAdd}
        />
      );
    }
  };

  const renderViewType = () => {
    let usedType = viewType;
    if(!usedType || usedType=="" || usedType=="inherit")
      usedType=(viewTypeGroup?.viewType || "grid") 
    if (usedType === "list") {
      return (
        <RenderListView
          handleOpenModalAddItem={handleOpenModalAddItem}
          item={item}
          renderButtonAdd={renderButtonAdd}
          theme={theme}
        />
      );
    } else if (usedType === "detailed") {
      return (
        <RenderDetailedView
          handleOpenModalAddItem={handleOpenModalAddItem}
          item={item}
          renderButtonAdd={renderButtonAdd}
          theme={theme}
        />
      );
    } else {
      return (
        <RenderGridView
          handleOpenModalAddItem={handleOpenModalAddItem}
          item={item}
          theme={theme}
          isLoading={isLoading}
          qtyInCart={qtyInCart}
          cartLineID={cartLineID}
          handleClickButtonAdd={handleClickButtonAdd}
          isQtyExist={isQtyExist}
        />
      );
    }
  };

  return <>{renderViewType()}</>;
};

RenderLayoutType.propTypes = {
  viewType: PropTypes.string,
  handleOpenModalAddItem: PropTypes.func,
  item: PropTypes.object,
  isLoading: PropTypes.bool,
  cartLineID: PropTypes.string,
  qtyInCart: PropTypes.number,
  handleClickButtonAdd: PropTypes.func,
  isQtyExist: PropTypes.bool,
  theme: PropTypes.object,
};
export default RenderLayoutType;