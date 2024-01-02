import PropTypes from "prop-types";
import { useEdgeSnack } from "./EdgeSnack/utils/useEdgeSnack";
import RenderModalItemDetail from "./ModalAddItem";
import { useState } from "react";
import { IconPlus } from "../assets/svgIcon";
import { apiCart } from "../services/Cart";
import { setCartInfo } from "../app/dataSlicePersisted";
import { useDispatch } from "react-redux";
import { setIsCartSummaryBlink } from "../app/dataSlice";

export const RenderItemProduct = ({ 
  isPromo = false,
  item,
  cartID
}) => {
  const [openModalAddItem, setOpenModalAddItem] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [typeOfModalAddItem, setTypeOfModalAddItem] = useState('main'); //option "main", "attribute", "bundle", "bundle&attribute"
  const dispatch = useDispatch();

  const labelPromo = {
    color: "var(--semantic-color-error, #CF3030)",
    textAlign: "center",
    whiteSpace: "nowrap",
    font: "700 16px/22px Helvetica Neue, sans-serif ",
  };

  const toast = useEdgeSnack();

  const labelNonPromo = {
    color: "var(--semantic-color-error, #000000)",
    textAlign: "center",
    whiteSpace: "nowrap",
    font: "700 16px/22px Helvetica Neue, sans-serif ",
  };

  const handleOpenModalAddItem = () => {
    setTypeOfModalAddItem("main")
    setOpenModalAddItem(true);
  };

  const addItemToCart = async() => {
    setIsLoading(true);
    let body = {
      "itemNo": item.itemNo,
      "quantity": 1,
      "unitPrice": item.retailPrice,
      "remark": "",
      "referenceNo": "",
      "lineInfo": "",
      "attributes": [],
      "bundles": []
    };
    try {
      const result = await apiCart("POST", `${cartID}/additems`, body)//);

      if(result.resultCode == 200){
        dispatch(setCartInfo(result.data));
        dispatch(setIsCartSummaryBlink(true));
        toast.open(`${item.productInfo?.itemName?item.productInfo?.itemName:"Item"} has been added to cart`, 'success')
      }
      else toast.open(result.message, 'error')
      setIsLoading(false);
      setTimeout(() => {
        dispatch(setIsCartSummaryBlink(false));
      }, 1000);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }

  const handleClickButtonAdd = () => {
    if(getItemType()=="main"){
      addItemToCart();
      return;
    }
    setOpenModalAddItem(true);
  };

  const getItemType = () => {
    let itemType = "main";
    if (item.bundles?.length > 0) 
      itemType = "bundle";
    else if (item.attributes?.length > 0) 
      itemType = "attribute";

    return itemType;
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
          textAlign: "left"
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
                backgroundColor: "var(--semantic-color-error, #CF3030)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "4px",
                padding: "4px 16px",
              }}
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0200fde884bae5562d40614d6872d03030fe87b9b6ec5d2848f9055618292e31?apiKey=7ef2d401d2464e0bb0e4708e7eee43f9&"
                alt="Promo"
              />
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
                Promo
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
            {item?.promotions.length > 0 && <div
              className="line-through"
              style={{
                color: "var(--text-color-tertiary, #9D9D9D)",
                textAlign: "center",
                textDecorationLine: "strikethrough",
                whiteSpace: "nowrap",
                font: "500 16px/22px Helvetica Neue, sans-serif ",
              }}
            >
              $ 9.99
            </div>}
            
            <div
              style={item.promotions.length > 0 ? labelPromo : labelNonPromo}
            >
              $ {item?.retailPrice.toFixed(2)}
            </div>
          </div>
          <button
            style={{
              display: "flex",
              justifyContent: "center",
              borderRadius: "8px",
              backgroundColor: "var(--button-color-active, #FF4782)",
              marginTop: "8px",
              gap: "5px",
              padding: "5px 16px",
              alignItems: "center",
              width: "100%",
              filter: isLoading?"blur(1px)":""
            }}
            disabled={isLoading}
            onClick={handleClickButtonAdd}
          >
            <IconPlus/>
            <div
              style={{
                color: "var(--white, #FFF)",
                font: "700 12px/17px Helvetica Neue, sans-serif ",
                marginTop: "3px",
              }}
            >
              Add
            </div>
          </button>
        </div>
      </div>
      {openModalAddItem && (
        <RenderModalItemDetail
          openModal={openModalAddItem}
          item={item}
          itemType={getItemType()}
          typeOfModalAddItem={typeOfModalAddItem}
          setTypeOfModalAddItem={setTypeOfModalAddItem}
          setOpenModal={setOpenModalAddItem}
        />
      )}
    </>
  );
};

RenderItemProduct.propTypes = {
  isPromo: PropTypes.bool,
  item: PropTypes.any,
  cartID: PropTypes.string
};
