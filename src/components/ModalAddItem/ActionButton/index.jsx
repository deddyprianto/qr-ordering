import PropTypes from "prop-types";
import { IconPlus } from "../../../assets/svgIcon";
import { addNewCart } from "./GenerateCart";
import { useDispatch, useSelector } from "react-redux";
import { generateAttributesBody } from "./ItemAttributeBody";
import { apiCartAddItem } from "./AddItemToCart";

export const RenderButtonAdd = ({ 
  item,
  itemToAdd,
  attList,
  typeOfModalAddItem,
  setTypeOfModalAddItem,
  setOpenModal,
  setIsLoading
 }) => {
  const dispatch = useDispatch();
  const cartInfo = useSelector(
    (state) => state.dataSlicePersisted.cartInfo,
  );
  const outletName = useSelector(
    (state) => state.dataSlicePersisted.outletName,
  );

  const handleClickButton = async() => {
    if(item.bundles?.length){
      setTypeOfModalAddItem("bundle");
      return;
    }
    else if(item.attributes?.length && typeOfModalAddItem!='attribute'){
      setTypeOfModalAddItem("attribute");
      return;
    }
    
    let cartID = cartInfo?.uniqueID;
    if(!cartID) cartID = await addNewCart(setIsLoading, dispatch, outletName);

    processAddItem(cartID);
  };

  const processAddItem = async(cartID) => {
    let body = {...itemToAdd};
    switch (typeOfModalAddItem.toLowerCase()) {
      case "main":
        await apiCartAddItem(cartID, [body], setIsLoading, setOpenModal);
        break;
      case "attribute":
        console.log('bre')
        body.attributes = generateAttributesBody(attList)
        await apiCartAddItem(cartID, [body], setIsLoading, setOpenModal);
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
            Add
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