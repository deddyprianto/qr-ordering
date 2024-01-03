import { useState } from "react";
import RenderModalItemDetail from "../../../ModalAddItem";
import PropTypes from 'prop-types'
import { getItemType } from "../../../GetItemType";
import { Trans } from "react-i18next";
import { IconPlus } from "../../../../assets/svgIcon";
import { apiCart } from "../../../../services/Cart";
import { useDispatch, useSelector } from "react-redux";
import { setCartInfo } from "../../../../app/dataSlicePersisted";
import { setIsCartSummaryBlink } from "../../../../app/dataSlice";
import { useEdgeSnack } from "../../../EdgeSnack/utils/useEdgeSnack";
import { RenderItemPrice } from "./ItemPrice";

export const RenderItemCard = ({ item }) => {
  const dispatch = useDispatch()
  const [openModalAddItem, setOpenModalAddItem] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [typeOfModalAddItem, setTypeOfModalAddItem] = useState('main'); //option "main", "attribute", "bundle", "bundle&attribute"
  const cartID = useSelector((state) => state.dataSlicePersisted.cartInfo?.uniqueID)
  const toast = useEdgeSnack();
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
  };
  const handleClickButtonAdd = () => {
    if(getItemType(item)=="main"){
      addItemToCart();
      return;
    }
    setOpenModalAddItem(true);
  };
  return (
    <div
      className="items-stretch self-stretch shadow-sm bg-white flex justify-between gap-0 mt-4 rounded-2xl"
    >
      <button className="flex-col overflow-hidden relative flex aspect-square w-[150px] items-stretch pr-12 pb-2"
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
        <button className="text-left"
          onClick={handleOpenModalAddItem}
        >
          <div className="text-gray-700 text-sm font-medium leading-5 tracking-wide">
            {item.itemName}
          </div>
          <RenderItemPrice
            isPromo={item.promo?.length>0}
            item={item}
          />
        </button>
        <button className="justify-between items-stretch bg-pink-500 flex gap-2 mt-2 px-20 py-2 rounded-lg"
          onClick={handleClickButtonAdd}
          style={{filter: isLoading?"blur(1px)":""}}
          disabled={isLoading}
        >
          <IconPlus/>
          <div className="text-white text-xs font-bold leading-4 self-center my-auto">
            <Trans i18nKey={"add"}/>
          </div>
        </button>
      </div>
      
      {openModalAddItem && (
        <RenderModalItemDetail
          openModal={openModalAddItem}
          item={item}
          itemType={getItemType(item)}
          typeOfModalAddItem={typeOfModalAddItem}
          setTypeOfModalAddItem={setTypeOfModalAddItem}
          setOpenModal={setOpenModalAddItem}
        />
      )}
    </div>
  );
}

RenderItemCard.propTypes = {
  item: PropTypes.object
}