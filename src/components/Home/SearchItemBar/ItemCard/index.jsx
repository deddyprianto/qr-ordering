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
    <div className="items-stretch self-stretch shadow-sm bg-white flex justify-between gap-0 mt-4 rounded-2xl">
      <button
        className="flex-col overflow-hidden relative flex aspect-square w-[150px] items-stretch pr-12 pb-2"
        onClick={handleOpenModalAddItem}
      >
        <img
          alt={"itemImage"}
          loading="lazy"
          src={item?.defaultImageURL}
          className="absolute h-full w-full object-cover object-center inset-0 rounded-l-xl"
        />
        {/* <RenderTagPromo/> */}
        {/* <RenderTagInsight/> */}
      </button>
      <div className="justify-between items-stretch flex grow basis-[0%] flex-col p-2">
        <button className="text-left" onClick={handleOpenModalAddItem}>
          <div className="text-gray-700 text-sm font-medium leading-5 tracking-wide">
            {item.itemName}
          </div>
          <RenderItemPrice isPromo={item.promo?.length > 0} item={item} />
        </button>
        <button
          className="justify-between items-stretch flex gap-2 mt-2 px-20 py-2 rounded-lg"
          onClick={handleClickButtonAdd}
          style={{
            filter: isLoading ? "blur(1px)" : "",
            backgroundColor: theme.Color_Secondary,
          }}
          disabled={isLoading}
        >
          <IconPlus />
          <div className="text-white text-xs font-bold leading-4 self-center my-auto">
            <Trans i18nKey={"add"} />
          </div>
        </button>
      </div>

      {openModalAddItem && (
        <RenderModalItemDetail
          openModal={openModalAddItem}
          item={item}
          itemType={getItemType(item)}
          setOpenModal={setOpenModalAddItem}
        />
      )}
    </div>
  );
}

RenderItemCard.propTypes = {
  item: PropTypes.object
}