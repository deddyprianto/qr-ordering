import { useState } from "react";
import RenderModalItemDetail from "../../../ModalAddItem";
import PropTypes from 'prop-types'
import { getItemType } from "../../../RenderItemProduct/GetItemType";
import { Trans } from "react-i18next";
import { IconPlus } from "../../../../assets/svgIcon";
import { useDispatch, useSelector } from "react-redux";
import { useEdgeSnack } from "../../../EdgeSnack/utils/useEdgeSnack";
import { RenderItemPrice } from "./ItemPrice";
import { addItemToCart } from "../../../RenderItemProduct/AddItemToCart";
import { setMenuSubGroup } from "../../../../app/dataSlice";
import { mapCartAndProduct } from "../../productAndCartMapper"
import { addNewCart } from "../../../../components/GenerateCart"
import { setCartInfo } from "../../../../app/dataSlicePersisted";
import { RenderTagInsight } from "../../TagInsight";

export const RenderItemCard = ({ item }) => {
  const dispatch = useDispatch()
  const { theme } = useSelector((state) => state.dataSlicePersisted);
  const [openModalAddItem, setOpenModalAddItem] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const cartID = useSelector((state) => state.dataSlicePersisted.cartInfo?.uniqueID)
  const { outletName, orderType } = useSelector((state) => state.dataSlicePersisted)
  const { menuSubGroup } = useSelector((state) => state.dataSlice);
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

  const handleClickButtonAdd = async () => {
    if (getItemType(item) == "main") {
      setIsLoading(true);
      let curCartID = cartID;
      if(!curCartID) curCartID = await addNewCart(setIsLoading, outletName, saveNewCartInfo, orderType);
      await addItemToCart(
        curCartID,
        item,
        dispatch,
        toast,
        1,
        "",
        reMapProductCatalogQty,
      );
      setIsLoading(false);
      return;
    }
    setOpenModalAddItem(true);
  };

  return (
    <>
      <div className="grid grid-cols-2 shadow-sm bg-white mt-4 rounded-2xl">
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
          {/* <RenderTagPromo/> */}
          <div className="absolute bottom-1 left-1 right-0">
            <div className="relative items-stretch flex gap-1 mt-16">
              <RenderTagInsight insights={item.insight}/>
            </div>
          </div>
        </button>
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
              <div>Adding...</div>
            </button>
          ) : (
            <button
              className="justify-center items-stretch flex gap-2 mt-2 py-2 rounded-lg"
              onClick={handleClickButtonAdd}
              style={{
                backgroundColor: theme.Color_Secondary,
              }}
              disabled={isLoading}
            >
              <IconPlus />
              <div className="text-white text-xs font-bold leading-4 self-center my-auto">
                <Trans i18nKey={"add"} />
              </div>
            </button>
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
}

RenderItemCard.propTypes = {
  item: PropTypes.object
}