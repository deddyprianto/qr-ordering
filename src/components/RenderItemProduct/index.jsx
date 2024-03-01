import PropTypes from "prop-types";
import { useEdgeSnack } from "../EdgeSnack/utils/useEdgeSnack";
import RenderModalItemDetail from "../ModalAddItem";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItemType } from "./GetItemType";
import { addItemToCart } from "./AddItemToCart";
import { setMenuSubGroup } from "../../app/dataSlice";
import { mapCartAndProduct } from "../Home/productAndCartMapper";
import { setCartInfo } from "../../app/dataSlicePersisted";
import { addNewCart } from "../GenerateCart";
import { RenderLayoutType } from "./RenderLayoutType";

export const RenderItemProduct = ({
  item,
  cartID,
  qtyInCart,
  cartLineID,
  cartId,
  viewType,
}) => {
  const { menuSubGroup, tableNo } = useSelector((state) => state.dataSlice);
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
          tableNo,
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
      <RenderLayoutType
        viewType={viewType}
        cartLineID={cartLineID}
        handleClickButtonAdd={handleClickButtonAdd}
        handleOpenModalAddItem={handleOpenModalAddItem}
        isLoading={isLoading}
        item={item}
        isQtyExist={isQtyExist}
        qtyInCart={qtyInCart}
        theme={theme}
      />
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
  viewType: PropTypes.string,
};
