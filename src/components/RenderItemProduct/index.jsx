import PropTypes from "prop-types";
import { useEdgeSnack } from "../EdgeSnack/utils/useEdgeSnack";
import RenderModalItemDetail from "../ModalAddItem";
import { useState } from "react";
import { IconPercentage } from "../../assets/svgIcon";
import { useDispatch, useSelector } from "react-redux";
import { Trans } from "react-i18next";
import { getItemType } from "./GetItemType";
import { addItemToCart } from "./AddItemToCart";
import { RenderButtonAddToCart } from "./ButtonAddToCart";
import { setMenuSubGroup } from "../../app/dataSlice";
import { mapCartAndProduct } from "../Home/productAndCartMapper";
import { setCartInfo } from "../../app/dataSlicePersisted";
import { addNewCart } from "../GenerateCart";
import { RenderRetailPrice } from "./RetailPrice";

export const RenderItemProduct = ({
  item,
  cartID,
  qtyInCart,
  cartLineID,
  cartId,
}) => {

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
      await addItemToCart(
        curCartID,
        item,
        dispatch,
        toast,
        qty,
        lineID,
        reMapProductAndCart,
        cartInfo,
        cartId,
        isQtyExist,
      );
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
            backgroundImage: `url(${item.defaultImageURL || theme.Image_Logo})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            borderTopLeftRadius: "16px",
            borderTopRightRadius: "16px",
            height: "191px",
          }}
        >
          {(item?.isDiscounted || false) && (
            <div
              style={{
                width: "92px",
                borderRadius: "16px 0px 16px 0px",
                backgroundColor: "var(--semantic-color-error, #CF3030)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "4px",
                padding: "4px 16px",
              }}
            >
              <IconPercentage />
              <div
                style={{
                  color: "var(--text-color-secondary, #FFF)",
                  textAlign: "center",
                  letterSpacing: "0.24px",
                  alignSelf: "start",
                  flexGrow: "1",
                  whiteSpace: "nowrap",
                  font: "500 12px/17px Helvetica Neue, sans-serif ",
                }}
              >
                <Trans i18nKey={"promo"} />
              </div>
            </div>
          )}
        </button>

        <div
          style={{
            justifyContent: "center",
            display: "flex",
            width: "100%",
            flexDirection: "column",
            padding: "8px",
          }}
        >
          <div
            style={{
              color: "var(--text-color-primary, #343A4A)",
              letterSpacing: "0.28px",
              font: "500 14px/20px Helvetica Neue, sans-serif ",
            }}
          >
            {item?.itemName}
          </div>

          <RenderRetailPrice item={item} />

          {isLoading ? (
            <button
              type="button"
              className="bg-[#9D9D9D] rounded-lg flex justify-center items-center py-[5px] text-white mt-[8px]"
              disabled
            >
              <span className="loader"></span>
              <div>
                {cartInfo && cartInfo?.details.length === 0
                  ? "Adding..."
                  : "Updating..."}
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
