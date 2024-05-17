import { lazy, useState } from "react";
import PropTypes from "prop-types";
import { getItemType } from "../../../RenderItemProduct/GetItemType";
import { useDispatch, useSelector } from "react-redux";
import { useEdgeSnack } from "../../../EdgeSnack/utils/useEdgeSnack";
import { RenderItemPrice } from "./ItemPrice";
import { addItemToCart } from "../../../RenderItemProduct/AddItemToCart";
import { setMenuSubGroup } from "../../../../app/dataSlice";
import { mapCartAndProduct } from "../../productAndCartMapper";
import { addNewCart } from "../../../../components/GenerateCart";
import { setCartInfo } from "../../../../app/dataSlicePersisted";
import RenderButtonImageItemProd from "../../../RenderButtonImageItemProd";
import { RenderButtonAddToCart } from "../../../RenderItemProduct/ButtonAddToCart";

const RenderModalItemDetail = lazy(() => import("../../../ModalAddItem"));

const RenderItemCard = ({ item, qtyCart, cartLineID }) => {
  const dispatch = useDispatch();
  const { theme, cartInfo } = useSelector((state) => state.dataSlicePersisted);
  const isQtyExist = cartInfo?.details?.some(
    (itemCart) => itemCart.productInfo.itemNo === item.itemNo,
  );

  const [openModalAddItem, setOpenModalAddItem] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const cartID = useSelector(
    (state) => state.dataSlicePersisted.cartInfo?.uniqueID,
  );
  const { outletName, orderType } = useSelector(
    (state) => state.dataSlicePersisted,
  );
  const { menuSubGroup, tableNo } = useSelector((state) => state.dataSlice);
  const toast = useEdgeSnack();
  const handleOpenModalAddItem = () => {
    setOpenModalAddItem(true);
  };

  const reMapProductCatalogQty = (newCartInfo) => {
    let updatedSubMenu = JSON.parse(JSON.stringify(menuSubGroup));
    for (const menuItem of updatedSubMenu) {
      let itemReplacer = mapCartAndProduct(menuItem.items, newCartInfo);
      menuItem.items = itemReplacer;
      dispatch(setMenuSubGroup([...updatedSubMenu]));
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
        reMapProductAndCart: reMapProductCatalogQty,
        isQtyExist,
        cartInfo,
      });

      setIsLoading(false);
      return;
    }
    setOpenModalAddItem(true);
  };

  return (
    <>
      <div className="grid grid-cols-2 shadow-sm bg-white mt-4 rounded-2xl">
        <RenderButtonImageItemProd
          handleOpenModalAddItem={handleOpenModalAddItem}
          item={item}
          theme={theme}
          width="w-[150px]"
        />
        <div className="justify-between items-stretch flex grow basis-[0%] flex-col p-2">
          <button className="text-left" onClick={handleOpenModalAddItem}>
            <div className="text-gray-700 text-sm font-medium leading-5 tracking-wide">
              {item.itemName}
            </div>
            <RenderItemPrice isPromo={item.promo?.length > 0} item={item} />
          </button>
          {isLoading ? (
            <button
              type="button"
              className="bg-[#9D9D9D] rounded-lg flex justify-center items-center py-2 text-white"
              disabled
            >
              <span className="loader"></span>
              <div id="labelLoadingSearchBarItem">
                {cartInfo && cartInfo?.details?.length === 0
                  ? "Adding..."
                  : "Updating..."}
              </div>
            </button>
          ) : (
            <RenderButtonAddToCart
              isLoading={isLoading}
              qtyInCart={qtyCart}
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
export default RenderItemCard;
RenderItemCard.propTypes = {
  item: PropTypes.object,
  qtyCart: PropTypes.number,
  cartLineID: PropTypes.string,
};
