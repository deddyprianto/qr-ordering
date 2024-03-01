import { RenderTagInsight } from "../Home/TagInsight";
import { RenderTagPromo } from "../Home/TagPromo";
import { RenderButtonAddToCart } from "./ButtonAddToCart";
import { RenderRetailPrice } from "./RetailPrice";
import PropTypes from "prop-types";

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
  return (
    <div
      style={{
        borderRadius: "16px",
        boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.10)",
        backgroundColor: "var(--brand-color-tertiary, #FFF)",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        textAlign: "left",
      }}
    >
      <button
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
      </button>

      <div className="grid grid-cols-1 grid-rows-[40px_1fr] p-[8px]">
        <table>
          <tbody>
            <tr>
              <td
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
              <div>{!isQtyExist ? "Adding..." : "Updating..."}</div>
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
  theme: PropTypes.theme,
  isLoading: PropTypes.bool,
  qtyInCart: PropTypes.number,
  cartLineID: PropTypes.string,
  handleClickButtonAdd: PropTypes.func,
  isQtyExist: PropTypes.bool,
};
