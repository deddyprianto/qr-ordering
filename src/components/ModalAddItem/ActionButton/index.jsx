import PropTypes from "prop-types";
import { IconPlus } from "../../../assets/svgIcon";
import { addNewCart } from "./GenerateCart";
import { useDispatch, useSelector } from "react-redux";
import { generateAttributesBody } from "./ItemAttributeBody";
import { apiCartAddItem } from "./AddItemToCart";
import { setCartInfo } from "../../../app/dataSlicePersisted";
import { useEffect, useState } from "react";
import { useEdgeSnack } from "../../EdgeSnack/utils/useEdgeSnack";


export const RenderButtonAdd = ({ 
  item,
  itemToAdd,
  attList,
  typeOfModalAddItem,
  setTypeOfModalAddItem,
  setOpenModal,
  setIsLoading
 }) => {
  const [productType, setProductType] = useState("main");
  const dispatch = useDispatch();
  const toast = useEdgeSnack();
  const cartInfo = useSelector(
    (state) => state.dataSlicePersisted.cartInfo,
  );
  const outletName = useSelector(
    (state) => state.dataSlicePersisted.outletName,
  );

  useEffect(()=>{
    setProductType(
      item.bundles?.length>0
        ?"bundle"
        :item.attributes?.length>0
          ?"attribute"
          :"main"
    );
  },[item])

  const resetCartInfo = (data) => {
    dispatch(setCartInfo(data));
  }

  const handleClickButton = async() => {
    if(productType=="bundle"){
      setTypeOfModalAddItem("bundle");
      return;
    }
    else if(productType=="attribute" && typeOfModalAddItem!='attribute'){
      setTypeOfModalAddItem("attribute");
      return;
    }
    
    let cartID = cartInfo?.uniqueID;
    if(!cartID) cartID = await addNewCart(setIsLoading, outletName, resetCartInfo);

    processAddItem(cartID);
  };

  const processAddItem = async(cartID) => {
    let body = {...itemToAdd};
    switch (typeOfModalAddItem.toLowerCase()) {
      case "main":
        await apiCartAddItem(cartID, [body], setIsLoading, setOpenModal, resetCartInfo, item.itemName, toast);
        break;
      case "attribute":
        console.log('bre')
        body.attributes = generateAttributesBody(attList)
        await apiCartAddItem(cartID, [body], setIsLoading, setOpenModal, resetCartInfo, item.itemName, toast);
        break;
      default:
        break;
    }
  }

  return (
    <div
      className="w-full flex items-center px-4 shadow-xl h-[75px]"
      style={{
        boxShadow: "0px -4px 10px 0px rgba(0, 0, 0, 0.10)",
      }}
    >
      <button
        onClick={() => handleClickButton()}
        className="bg-pink-500 w-full rounded-lg px-[16px] py-[12px] flex justify-center items-center cursor-pointer"
      >
        <div className="flex items-stretch gap-2">
          <IconPlus />
          <div className="text-white text-xs font-bold leading-4 self-center my-auto">
            {(productType=="attribute" && typeOfModalAddItem=="main")
              ?"Add New"
              :(productType=="attribute" && typeOfModalAddItem=="attribute")
                ?`Add - $ ${itemToAdd.amount}`
                :"Add"
            }
          </div>
        </div>
      </button>
    </div>
  );
};

RenderButtonAdd.propTypes = {
  item: PropTypes.object,
  itemToAdd: PropTypes.object,
  attList: PropTypes.array,
  typeOfModalAddItem: PropTypes.string,
  setTypeOfModalAddItem: PropTypes.func,
  setOpenModal: PropTypes.func,
  setIsLoading: PropTypes.func
}