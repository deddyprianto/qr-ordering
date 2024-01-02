import { useState } from "react";
import RenderModalItemDetail from "../../ModalAddItem";
import PropTypes from 'prop-types'
import { getItemType } from "../../GetItemType";
import { Trans } from "react-i18next";
import { IconPlus } from "../../../assets/svgIcon";
import { apiCart } from "../../../services/Cart";
import { useDispatch, useSelector } from "react-redux";
import { setCartInfo } from "../../../app/dataSlicePersisted";
import { setIsCartSummaryBlink } from "../../../app/dataSlice";
import { useEdgeSnack } from "../../EdgeSnack/utils/useEdgeSnack";

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
      <div className="flex-col overflow-hidden relative flex aspect-square w-[150px] items-stretch pr-12 pb-2"
        onClick={handleOpenModalAddItem}
      >
        <img
          alt={"itemImage"}
          loading="lazy"
          src={item?.defaultImageURL}
          className="absolute h-full w-full object-cover object-center inset-0 rounded-l-xl"
        />
        {/* Promo tag */}
        {/* <div className="relative items-stretch bg-red-600 flex justify-between gap-1 mb-12 px-4 py-1  rounded-tl-xl rounded-br-xl">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/77e3a893c1f4a669ad411c93006b60848059e6ba4cd483455208dd447efbc605?apiKey=fb1a9cbe3d4146ecbf83898601353c5c&"
            className="aspect-square object-contain object-center w-[18px] overflow-hidden shrink-0 max-w-full"
          />
          <div className="text-white text-center text-xs font-medium leading-4 tracking-wide grow whitespace-nowrap self-start">
            Promo
          </div>
        </div> */}
        {/* insight tag */}
        {/* <div className="absolute bottom-1 left-1 right-0">
          <div className="relative items-stretch flex gap-1 mt-16">
            <div className="items-center bg-lime-700 flex aspect-[2.8076923076923075] flex-col justify-center p-1 rounded-full">
              <img
                alt="Chef's Recomendation"
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0271d4175bcbe9354d8b97e5f1623617c1f73da2ef180946a2ebd96d7d026452?apiKey=fb1a9cbe3d4146ecbf83898601353c5c&"
                className="aspect-square object-contain object-center w-[18px] overflow-hidden"
              />
            </div>
            <div className="items-center bg-amber-500 flex aspect-[2.8076923076923075] flex-col justify-center p-1 rounded-full">
              <img
                alt="Spicy"
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/13238e88d8532457614e4633cd608dda5918afb999981681e3ba44b8fc4196fb?apiKey=fb1a9cbe3d4146ecbf83898601353c5c&"
                className="aspect-square object-contain object-center w-[18px] overflow-hidden"
              />
            </div>
            <div className="items-center bg-amber-500 flex aspect-[2.8076923076923075] flex-col justify-center p-1 rounded-full">
              <img
                alt="Customer Favorite"
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/13238e88d8532457614e4633cd608dda5918afb999981681e3ba44b8fc4196fb?apiKey=fb1a9cbe3d4146ecbf83898601353c5c&"
                className="aspect-square object-contain object-center w-[18px] overflow-hidden"
              />
            </div>
          </div>
        </div> */}
      </div>
      <div className="justify-between items-stretch flex grow basis-[0%] flex-col p-2">
        <div 
          onClick={handleOpenModalAddItem}
        >
          <div className="text-gray-700 text-sm font-medium leading-5 tracking-wide">
            {item.itemName}
          </div>
          <div className="text-gray-700 text-base font-bold leading-6 mt-7">
            $ {item?.retailPrice}
          </div>
        </div>
        
        {/* If Promo applied */}
        {/* <div className="items-stretch flex gap-2 mt-7">
          <div className="text-neutral-400 text-center text-base font-medium leading-6 line-through">
            $ {item?.retailPrice}
          </div>
          <div className="text-red-600 text-center text-base font-bold leading-6">
            $ 5.00
          </div>
        </div> */}
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