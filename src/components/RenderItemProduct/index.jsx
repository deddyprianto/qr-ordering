import PropTypes from "prop-types";
import { useEdgeSnack } from "../EdgeSnack/utils/useEdgeSnack";
import RenderModalItemDetail from "../ModalAddItem";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItemType } from "./GetItemType";
import { addItemToCart } from "./AddItemToCart";
import { RenderButtonAddToCart } from "./ButtonAddToCart";
import { setMenuSubGroup } from "../../app/dataSlice";
import { mapCartAndProduct } from "../Home/productAndCartMapper";
import { setCartInfo } from "../../app/dataSlicePersisted";
import { addNewCart } from "../GenerateCart";
import { RenderRetailPrice } from "./RetailPrice";
import { RenderTagInsight } from "../Home/TagInsight";
import { RenderTagPromo } from "../Home/TagPromo";

export const RenderItemProduct = ({ item, cartID, qtyInCart, cartLineID, cartId }) => {
  const { menuSubGroup } = useSelector((state) => state.dataSlice);
  const { outletName, theme, orderType, cartInfo } = useSelector(
    (state) => state.dataSlicePersisted,
  );
  const isQtyExist = cartInfo?.details?.some(
    (itemCart) => itemCart.productInfo.itemNo === item.itemNo,
  );

  const [openModalAddItem, setOpenModalAddItem] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const toast = useEdgeSnack();

  const handleOpenModalAddItem = () => {
    setOpenModalAddItem(true);
  };

  const reMapProductAndCart = (newCartInfo) => {
    let newMenuSubGroup = JSON.parse(JSON.stringify(menuSubGroup));
    for (const sb of newMenuSubGroup) {
      let itemReplacer = mapCartAndProduct(sb.items, newCartInfo);
      sb.items = itemReplacer;
      dispatch(setMenuSubGroup([...newMenuSubGroup]));
    }
  };

  const saveNewCartInfo = (data) => {
    dispatch(setCartInfo(data));
  };

  const handleClickButtonAdd = async (qty, lineID) => {
    if (getItemType(item) == "main") {
      setIsLoading(true);
      let curCartID = cartID;
      if (!curCartID) {
        curCartID = await addNewCart(
          setIsLoading,
          outletName,
          saveNewCartInfo,
          orderType,
        );
      }
      await addItemToCart({
        cartID: curCartID,
        item,
        dispatch,
        toast,
        qty,
        lineID,
        reMapProductAndCart,
        cartInfo,
        cartId,
        isQtyExist,
      });
      setIsLoading(false);
      return;
    }
    setOpenModalAddItem(true);
  };
  return (
    <>
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
            backgroundImage: `url(${item.defaultImageURL || theme.Image_Item_Place_Holder})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: (!item?.isDiscounted)?"flex-end":"space-between",
            borderTopLeftRadius: "16px",
            borderTopRightRadius: "16px",
            height: "191px",
          }}
        >
          {(item?.isDiscounted || false) && (
            <RenderTagPromo/>
          )}
          <div className="p-2 flex gap-1">
            <RenderTagInsight insights={item.insight}/>
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
      {openModalAddItem && (
        <RenderModalItemDetail
          openModal={openModalAddItem}
          item={item}
          itemType={getItemType(item)}
          setOpenModal={setOpenModalAddItem}
        />
      )}
    </>
  );
};

RenderItemProduct.propTypes = {
  item: PropTypes.any,
  cartID: PropTypes.string,
  qtyInCart: PropTypes.number,
  cartLineID: PropTypes.string,
  cartId: PropTypes.string,
};
