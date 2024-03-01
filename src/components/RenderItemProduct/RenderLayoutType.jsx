import { useSelector } from "react-redux";
import { RenderItemPrice } from "../Home/SearchItemBar/ItemCard/ItemPrice";
import { RenderTagInsight } from "../Home/TagInsight";
import { RenderTagPromo } from "../Home/TagPromo";
import { RenderButtonAddToCart } from "./ButtonAddToCart";
import { RenderRetailPrice } from "./RetailPrice";
import PropTypes from "prop-types";
import RenderButtonImageItemProd from "../RenderButtonImageItemProd";

export const RenderLayoutType = ({
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
          <div>
            {cartInfo && cartInfo?.details.length === 0
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
    let componentUsed;
    if (
      viewType === "list" ||
      (viewTypeGroup && viewTypeGroup.viewType === "list")
    ) {
      componentUsed = (
        <div
          style={{
            boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.10)",
          }}
          className="grid grid-cols-[128px_1fr]  bg-white mt-4 rounded-2xl"
        >
          <button
            className="flex-col overflow-hidden relative flex aspect-square w-[150px] items-stretch pr-12 pb-2"
            onClick={handleOpenModalAddItem}
          >
            <img
              alt={"itemImage"}
              loading="lazy"
              src={item?.defaultImageURL || theme?.Image_Item_Place_Holder}
              className="absolute h-full w-full object-cover object-center inset-0 rounded-l-xl"
            />
            {(item?.isDiscounted || false) && <RenderTagPromo />}
            <div className="absolute bottom-1 left-1 right-0">
              <div className="relative items-stretch flex gap-2 mt-16">
                <RenderTagInsight insights={item.insight} />
              </div>
            </div>
          </button>
          <div className="justify-between items-stretch flex grow basis-[0%] flex-col p-2">
            <button className="text-left" onClick={handleOpenModalAddItem}>
              <div className="text-gray-700 text-sm font-medium leading-5 tracking-wide">
                {item.itemName}
              </div>
            </button>
            <div className="grid grid-cols-[50px_1fr]">
              <div className=" flex justify-center items-center">
                <RenderItemPrice
                  isPromo={item.promo?.length > 0}
                  item={item}
                  styleMargin="mt-0"
                />
              </div>
              <div className="w-full">{renderButtonAdd()}</div>
            </div>
          </div>
        </div>
      );
    } else if (
      viewType === "detailed" ||
      (viewTypeGroup && viewTypeGroup.viewType === "detailed")
    ) {
      componentUsed = (
        <div
          style={{
            boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.10)",
          }}
          className="grid grid-cols-1 grid-rows-1 bg-white mt-4 rounded-2xl w-full"
        >
          <div>
            <RenderButtonImageItemProd
              handleOpenModalAddItem={handleOpenModalAddItem}
              item={item}
              theme={theme}
              width='w-full'
            />
            <div className="justify-between items-stretch flex grow basis-[0%] flex-col p-2">
              <button className="text-left" onClick={handleOpenModalAddItem}>
                <div className="text-gray-700 text-sm font-medium leading-5 tracking-wide">
                  {item.itemName}
                </div>
              </button>
              <div className="flex justify-between items-center mt-[18px]">
                <div className="flex justify-center items-center">
                  <RenderItemPrice
                    isPromo={item.promo?.length > 0}
                    item={item}
                    styleMargin="mt-0"
                  />
                </div>
                <div className="w-1/2">{renderButtonAdd()}</div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (
      viewType === "grid" ||
      (viewTypeGroup && viewTypeGroup.viewType === "grid")
    ) {
      componentUsed = (
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
              justifyContent: !item?.isDiscounted
                ? "flex-end"
                : "space-between",
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
    }
    return componentUsed;
  };
  return <>{renderViewType()}</>;
};

RenderLayoutType.propTypes = {
  viewType: PropTypes.string,
  handleOpenModalAddItem: PropTypes.func,
  item: PropTypes.string,
  isLoading: PropTypes.func,
  cartLineID: PropTypes.string,
  qtyInCart: PropTypes.string,
  handleClickButtonAdd: PropTypes.func,
  isQtyExist: PropTypes.bool,
  theme: PropTypes.object,
};
