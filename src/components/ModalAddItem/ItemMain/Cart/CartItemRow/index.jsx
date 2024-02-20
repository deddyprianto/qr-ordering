import PropTypes from "prop-types";
import { getItemType } from "../../../../RenderItemProduct/GetItemType";
import { RenderItemDetailInCart } from "./ItemDetail";
import { useSelector, useDispatch } from "react-redux";
import { IconMinus, IconPlus } from "../../../../../assets/svgIcon";
import { useState } from "react";
import { apiCart } from "../../../../../services/Cart";
import { setCartInfo } from "../../../../../app/dataSlicePersisted";
import { useEdgeSnack } from "../../../../EdgeSnack/utils/useEdgeSnack";

export const RenderCartItemRow = ({ item }) => {
  const { cartInfo } = useSelector((state) => state.dataSlicePersisted);
  const dispatch = useDispatch();
  const toast = useEdgeSnack();

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
  const handleAPIQtyCartItemRow = async (quantityParams) => {
    try {
      setIsLoading(true);
      let body = {
        uniqueID: item.uniqueID,
        quantity: quantityParams,
      };
      if (quantityParams > 0) {
        const result = await apiCart(
          "PATCH",
          `${cartInfo.uniqueID}/${body.uniqueID}/changeitemqty`,
          body,
        );
        toast.open(`${item?.productInfo?.itemName} has been updated in cart`, 'success')
        dispatch(setCartInfo(result.data));
      } else {
        const result = await apiCart(
          "DELETE",
          `${cartInfo.uniqueID}/${item.uniqueID}`,
        );
        toast.open(`${item?.productInfo?.itemName} has been removed from cart`, 'error')
        dispatch(setCartInfo(result.data));
      }
      setIsLoading(false);
    } catch (error) {
      toast.open(`Failed to modify item quantity`, 'error')
      console.log(error)
      setIsLoading(false);
    }
  };

  const increaseQuantityCartItemRow = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + 1;
      handleAPIQtyCartItemRow(newQuantity);
      return newQuantity;
    });
  };

  const decreaseQuantityCartItemRow = () => {
    setQuantity((prevQuantity) => {
      if (prevQuantity > 0) {
        const newQuantity = prevQuantity - 1;
        handleAPIQtyCartItemRow(newQuantity);
        return newQuantity;
      }
      return prevQuantity;
    });
  };

  if(quantity<1 && !isLoading) return null;
  return (
    <div className="mt-2.5 pl-0 px-4 grid grid-cols-[1fr_1fr_50px] items-center">
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

      <div className="w-full">
        {isLoading ? (
          <div className="flex items-center">
            <button
              type="button"
              className="bg-[#9D9D9D] rounded-lg flex justify-center items-center py-2 text-white px-2 mt-2"
              disabled
            >
              <span className="loader"></span>
              <div>Updating...</div>
            </button>
          </div>
        ) : (
          <div className="flex items-center">
            <div className="items-stretch flex gap-1 mt-2">
              <button
                className="justify-center items-center flex flex-col px-3 py-1 rounded-lg"
                style={{ backgroundColor: theme.Color_Secondary }}
                onClick={decreaseQuantityCartItemRow}
              >
                <IconMinus width="16" />
              </button>
              <span className="text-gray-700 text-center text-base font-bold leading-6 whitespace-nowrap justify-center items-stretch bg-zinc-300 px-7 py-1 rounded-lg">
                {quantity}
              </span>
              <button
                className="justify-center items-center flex flex-col px-3 py-1 rounded-lg"
                style={{ backgroundColor: theme.Color_Secondary }}
                onClick={increaseQuantityCartItemRow}
              >
                <IconPlus width="16" />
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="fixed-width-content text-gray-700 text-right text-sm font-bold whitespace-nowrap my-auto mt-[20px]">
        $ {item.amount}
      </div>
    </div>
  );
};
RenderCartItemRow.propTypes = {
  item: PropTypes.object,
};
