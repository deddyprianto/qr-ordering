import PropTypes from "prop-types";
import { getItemType } from "../../../../RenderItemProduct/GetItemType";
import { RenderItemDetailInCart } from "./ItemDetail";
import { useSelector, useDispatch } from "react-redux";
import { IconMinus, IconPlus } from "../../../../../assets/svgIcon";
import { useState } from "react";
import { apiCart } from "../../../../../services/Cart";
import { setCartInfo } from "../../../../../app/dataSlicePersisted";

export const RenderCartItemRow = ({ item }) => {
  const { cartInfo } = useSelector((state) => state.dataSlicePersisted);
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(item.quantity);
  const { theme } = useSelector((state) => state.dataSlicePersisted);
  const [isLoading, setIsLoading] = useState(false);
  const renderBundleItemDet = (bundle) => {
    return (
      <>
        <RenderItemDetailInCart
          key={bundle.bundleItemCode}
          name={`(${bundle.quantity}X) ${bundle.productInfo?.itemName}`}
        />
        {bundle.attributes?.length > 0 ? (
          <div className="ml-4">{renderItemDetail(bundle)}</div>
        ) : (
          ""
        )}
      </>
    );
  };

  const renderItemDetail = (item) => {
    let itemType = getItemType(item);
    switch (itemType) {
      case "attribute":
        return item.attributes?.map((attItem) => {
          return (
            <RenderItemDetailInCart
              key={attItem.attCode}
              name={attItem.attName}
            />
          );
        });
      case "bundle":
        return item.bundles?.map((bundle) => {
          return renderBundleItemDet(bundle);
        });

      default:
        break;
    }
  };
  const handleAPIQty = async (quantityParams, increaseQuantity) => {
    let body = {
      uniqueID: item.uniqueID,
      quantity: quantityParams,
    };
    if (item.quantity > 1 || increaseQuantity) {
      setIsLoading(true);
      const result = await apiCart(
        "PATCH",
        `${cartInfo.uniqueID}/${body.uniqueID}/changeitemqty`,
        body,
      );
      setIsLoading(false);
      dispatch(setCartInfo(result.data));
    } else {
      const result = await apiCart(
        "DELETE",
        `${cartInfo.uniqueID}/${item.uniqueID}`,
      );
      dispatch(setCartInfo(result.data));
    }
  };

  const increaseQuantity = () => {
    const increaseQuantity = true;
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + 1;
      handleAPIQty(newQuantity, increaseQuantity);
      return newQuantity;
    });
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => {
      if (prevQuantity > 0) {
        const newQuantity = prevQuantity - 1;
        handleAPIQty(newQuantity);
        return newQuantity;
      }
      return prevQuantity;
    });
  };

  return (
    <div className="items-stretch flex justify-between mt-2.5  pl-0 gap-2 px-4">
      <div className="fixed-width-content w-full flex flex-row my-auto">
        <div>
          <div className="text-gray-700 text-sm font-medium leading-5 tracking-wide">
            {item.productInfo?.itemName}
          </div>
          <div className="flex items-center ml-4">
            <div className="text-neutral-400 text-xs leading-5 tracking-wide">
              {renderItemDetail(item)}
            </div>
          </div>
        </div>
      </div>
      {isLoading ? (
        <button
          type="button"
          className="bg-[#9D9D9D] rounded-lg flex justify-center items-center py-2 text-white px-2"
          disabled
        >
          <span className="loader"></span>
          <div>Updating...</div>
        </button>
      ) : (
        <div className="items-stretch flex gap-1 mt-2">
          <button
            className="justify-center items-center flex flex-col px-3 py-1 rounded-lg"
            style={{ backgroundColor: theme.Color_Secondary }}
            onClick={decreaseQuantity}
          >
            <IconMinus width="16" />
          </button>
          <span className="text-gray-700 text-center text-base font-bold leading-6 whitespace-nowrap justify-center items-stretch bg-zinc-300 px-7 py-1 rounded-lg">
            {quantity}
          </span>
          <button
            className="justify-center items-center flex flex-col px-3 py-1 rounded-lg"
            style={{ backgroundColor: theme.Color_Secondary }}
            onClick={increaseQuantity}
          >
            <IconPlus width="16" />
          </button>
        </div>
      )}

      <div
        className="fixed-width-content text-gray-700 text-right text-sm font-bold whitespace-nowrap my-auto"
        style={{ width: "75px" }}
      >
        $ {item.amount}
      </div>
    </div>
  );
};
RenderCartItemRow.propTypes = {
  item: PropTypes.object,
  updateCartItem: PropTypes.func,
};
