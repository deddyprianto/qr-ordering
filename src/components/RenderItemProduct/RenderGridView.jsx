import { useSelector } from "react-redux";
import { RenderTagInsight } from "../Home/TagInsight";
import { RenderTagPromo } from "../Home/TagPromo";
import { RenderButtonAddToCart } from "./ButtonAddToCart";
import { RenderRetailPrice } from "./RetailPrice";
import PropTypes from "prop-types";
import { ImageOptimization } from "../ImageOptimization";

const RenderGridView = ({
  handleOpenModalAddItem,
  item,
  theme,
  isLoading,
  qtyInCart,
  cartLineID,
  handleClickButtonAdd,
  isQtyExist,
}) => {
  const { outletDetail } = useSelector((state) => state.dataSlicePersisted);
  return (
    <div
      style={{
        borderRadius: "16px",
        boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.10)",
        backgroundColor: theme?.Color_Tertiary,
        display: "flex",
        flexDirection: "column",
        width: "100%",
        textAlign: "left",
      }}
    >
      <button
        disabled={outletDetail?.qrOrderingAvailability === "Hidden"}
        onClick={() => handleOpenModalAddItem()}
        className="h-[191px] w-full relative"
        style={{
          borderTopLeftRadius: "16px",
          borderTopRightRadius: "16px",
        }}
      >
        <ImageOptimization
          altCustom={"itemImage"}
          imageItems={item?.defaultImageURL || theme?.Image_Item_Place_Holder}
          classNaming="h-full w-full object-cover object-center"
          customStyle={{
            borderTopLeftRadius: "16px",
            borderTopRightRadius: "16px",
          }}
        />
        {(item?.isDiscounted || false) && <RenderTagPromo />}
        <div className="flex gap-1 absolute bottom-0">
          <RenderTagInsight insights={item?.insight} />
        </div>
      </button>

      {/* <button
        disabled={outletDetail?.qrOrderingAvailability === "Hidden"}
        onClick={() => handleOpenModalAddItem()}
        style={{
          backgroundImage: `url(${
            item.defaultImageURL || theme.Image_Item_Place_Holder
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: !item?.isDiscounted ? "flex-end" : "space-between",
          borderTopLeftRadius: "16px",
          borderTopRightRadius: "16px",
          height: "191px",
        }}
      >
        {(item?.isDiscounted || false) && <RenderTagPromo />}
        <div className="p-2 flex gap-1">
          <RenderTagInsight insights={item.insight} />
        </div>
      </button> */}

      <div className="grid grid-cols-1 grid-rows-[40px_1fr] p-[8px]">
        <table>
          <tbody>
            <tr>
              <td
                id="nameProd"
                style={{
                  textAlign: "left",
                  width: "85%",
                  display: "-webkit-box",
                  WebkitLineClamp: "3",
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  padding: 0,
                  margin: 0,
                }}
              >
                {item?.itemName}
              </td>
            </tr>
          </tbody>
        </table>

        <div>
          <RenderRetailPrice item={item} />
          {isLoading ? (
            <button
              type="button"
              className="bg-[#9D9D9D] rounded-lg flex justify-center items-center py-[5px] text-white mt-[8px] w-full"
              disabled
            >
              <span className="loader"></span>
              <div id="updatingButtonLabel">
                {!isQtyExist ? "Adding..." : "Updating..."}
              </div>
            </button>
          ) : (
            <RenderButtonAddToCart
              isLoading={isLoading}
              qtyInCart={qtyInCart}
              item={item}
              cartLineID={cartLineID}
              handleClickButtonAdd={handleClickButtonAdd}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default RenderGridView;
RenderGridView.propTypes = {
  handleOpenModalAddItem: PropTypes.func,
  item: PropTypes.object,
  theme: PropTypes.object,
  isLoading: PropTypes.bool,
  qtyInCart: PropTypes.number,
  cartLineID: PropTypes.string,
  handleClickButtonAdd: PropTypes.func,
  isQtyExist: PropTypes.bool,
};
