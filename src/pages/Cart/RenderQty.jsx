import { IconEdit, IconExpand, IconExpandHide } from "../../assets/svgIcon";
import PropTypes from "prop-types";
import { apiProduct } from "../../services/Product";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { apiCart } from "../../services/Cart";
import { setCartInfo } from "../../app/dataSlicePersisted";

export const RenderQty = ({
  isEmptyArray,
  expandItem,
  theme,
  setExpandItem,
  setOpenEditModal,
  setItemDataEdit,
  itemNo,
  item,
  idCart,
}) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(item?.quantity || 0);
  const [isLoading, setIsLoading] = useState(false);
  const { outletName } = useSelector((state) => state.dataSlicePersisted);

  const handleEdit = async () => {
    const body = {
      itemNo,
    };
    try {
      setIsLoading(true);
      const result = await apiProduct("GET", `${outletName}/all`, body);
      setIsLoading(false);
      setItemDataEdit(result.data[0].productInfo);
      setOpenEditModal(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAPIQty = async (quantityParams, increaseQuantity) => {
    let body = {
      uniqueID: item.uniqueID,
      quantity: quantityParams,
    };
    if (item.quantity > 1 || increaseQuantity) {
      const result = await apiCart(
        "PATCH",
        `${idCart}/${body.uniqueID}/changeitemqty`,
        body,
      );
      dispatch(setCartInfo(result.data));
    } else {
      const result = await apiCart("DELETE", `${idCart}/${item.uniqueID}`);
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
    <div className="justify-between items-center border-t-[color:var(--Grey-Scale-color-Grey-Scale-3,#D6D6D6)] flex border-t border-solid py-2 px-2">
      <div className="items-stretch flex justify-between my-auto">
        {!isEmptyArray && (
          <button
            onClick={() => setExpandItem(!expandItem)}
            className="items-center flex justify-between gap-1 "
          >
            {expandItem ? (
              <IconExpandHide primary={theme.Color_Secondary} />
            ) : (
              <IconExpand primary={theme.Color_Secondary} />
            )}
            <div
              style={{
                color: theme.Color_Secondary,
              }}
              className="text-sm font-medium leading-5 tracking-wide underline self-stretch grow whitespace-nowrap"
            >
              {expandItem ? "Hide" : "Expand"} Details
            </div>
          </button>
        )}

        <div
          className={`items-center flex justify-between ${
            !isEmptyArray && "ml-[8px]"
          }`}
        >
          <IconEdit primary={theme.Color_Secondary} />
          <button
            style={{
              color: theme.Color_Secondary,
            }}
            onClick={handleEdit}
            className="text-sm font-medium leading-5 tracking-wide underline self-stretch grow whitespace-nowrap ml-1 cursor-pointer"
          >
            {isLoading ? "Get your data..." : "Edit"}
          </button>
        </div>
      </div>
      {/* col 2 */}
      <div className="flex gap-1 ">
        <button
          style={{
            backgroundColor: theme.Color_Secondary,
          }}
          onClick={decreaseQuantity}
          className="justify-center items-center flex flex-col w-9 h-9 px-2 rounded-lg text-white"
        >
          -
        </button>
        <div className="flex text-gray-700 text-center text-base font-bold justify-center items-center bg-zinc-300  px-6 rounded-lg">
          <div>{quantity}</div>
        </div>
        <button
          onClick={increaseQuantity}
          style={{
            backgroundColor: theme.Color_Secondary,
          }}
          className="justify-center items-center flex flex-col w-9 h-9 px-2 rounded-lg text-white"
        >
          +
        </button>
      </div>
    </div>
  );
};
RenderQty.propTypes = {
  isEmptyArray: PropTypes.bool,
  theme: PropTypes.object,
  setExpandItem: PropTypes.func,
  expandItem: PropTypes.bool,
  setOpenEditModal: PropTypes.func,
  setItemDataEdit: PropTypes.func,
  itemNo: PropTypes.string,
  item: PropTypes.any,
  idCart: PropTypes.string,
};
