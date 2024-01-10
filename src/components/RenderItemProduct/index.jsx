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

export const RenderItemProduct = ({ 
  isPromo = false, 
  item, 
  cartID,
  qtyInCart,
  cartLineID,
  reMapProductAndCart
}) => {
  const theme = useSelector((state) => state.dataSlice.theme);
  const [openModalAddItem, setOpenModalAddItem] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const labelPromo = {
    color: theme.disableColor,
    textAlign: "center",
    whiteSpace: "nowrap",
    font: "700 16px/22px Helvetica Neue, sans-serif ",
  };

  const toast = useEdgeSnack();

  const labelNonPromo = {
    color: theme.warning,
    textAlign: "center",
    whiteSpace: "nowrap",
    font: "700 16px/22px Helvetica Neue, sans-serif ",
  };

  const handleOpenModalAddItem = () => {
    setOpenModalAddItem(true);
  };

  const actionType = (qty, lineID) => {
    if((lineID || "")=="")
      return "add";
    else if(qty<1)
      return "delete";
    else 
      return "update";
  }

  const handleClickButtonAdd = (qty, lineID) => {
    if (getItemType(item) == "main") {
      addItemToCart(
        cartID, 
        setIsLoading, 
        item, 
        dispatch, 
        toast, 
        qty,
        actionType(qty, lineID),
        lineID,
        reMapProductAndCart
        );
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
            backgroundImage: `url(${item.defaultImageURL})`,
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
          {isPromo && (
            <div
              style={{
                width: "92px",
                borderRadius: "16px 0px 16px 0px",
                backgroundColor: theme.warning,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "4px",
                padding: "4px 16px",
              }}
            >
              <IconPercentage />
              <div9
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
              </div9>
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

          <div
            style={{
              display: "flex",
              marginTop: "18px",
              gap: "8px",
            }}
          >
            {item?.promotions.length > 0 && (
              <div
                className="line-through"
                style={{
                  color: theme.disableColor,
                  textAlign: "center",
                  textDecorationLine: "strikethrough",
                  whiteSpace: "nowrap",
                  font: "500 16px/22px Helvetica Neue, sans-serif ",
                }}
              >
                $ 9.99
              </div>
            )}

            <div
              style={item.promotions.length > 0 ? labelPromo : labelNonPromo}
            >
              $ {item?.retailPrice.toFixed(2)}
            </div>
          </div>
          <RenderButtonAddToCart
            isLoading={isLoading}
            qtyInCart={qtyInCart}
            cartLineID={cartLineID}
            handleClickButtonAdd={handleClickButtonAdd}
            reMapProductAndCart={reMapProductAndCart}
          />
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
  isPromo: PropTypes.bool,
  item: PropTypes.any,
  cartID: PropTypes.string,
  qtyInCart: PropTypes.number,
  cartLineID: PropTypes.string,
  reMapProductAndCart: PropTypes.func
};
