import PropTypes from "prop-types";
import { IconPlus } from "../../../assets/svgIcon";
import { addNewCart } from "./GenerateCart";
import { useDispatch, useSelector } from "react-redux";
import { generateAttributesBody } from "./ItemAttributeBody";
import { apiCartAddItem } from "./AddItemToCart";
import { setCartInfo } from "../../../app/dataSlicePersisted";
import { useEdgeSnack } from "../../EdgeSnack/utils/useEdgeSnack";
import { generateBundlesBody } from "./ItemBundleBody";
import { renderButtonText } from "./GetButtonText";
import { mapCartAndProduct } from "../../Home/productAndCartMapper";
import { setMenuSubGroup } from "../../../app/dataSlice";


export const RenderButtonAdd = ({ 
  item,
  itemToAdd,
  itemType,
  attList,
  bundleList,
  typeOfModalAddItem,
  setTypeOfModalAddItem,
  setOpenModal,
  setIsLoading
 }) => {
  const dispatch = useDispatch();
  const toast = useEdgeSnack();
  const { cartInfo, outletName } = useSelector(
    (state) => state.dataSlicePersisted,
  );
  const menuSubGroup = useSelector(
    (state) => state.dataSlice.menuSubGroup,
  );
  
  const resetCartInfo = (data) => {
    dispatch(setCartInfo(data));
    updateCartQtyProductCatalog(data);
  }

  const handleClickButton = async() => {
    if(itemType=="bundle" && typeOfModalAddItem=='main'){
      setTypeOfModalAddItem("bundle");
      return;
    }
    else if(itemType=="attribute" && typeOfModalAddItem!='attribute'){
      setTypeOfModalAddItem("attribute");
      return;
    }
    
    let cartID = cartInfo?.uniqueID;
    if(!cartID) cartID = await addNewCart(setIsLoading, outletName, resetCartInfo);

    processAddItem(cartID);
  };  
  
  const updateCartQtyProductCatalog = (newCartInfo) => {
    let newMenuSubGroup = JSON.parse(JSON.stringify(menuSubGroup));
    for (const sb of newMenuSubGroup) {
      let itemReplacer = mapCartAndProduct(sb.items, newCartInfo)
      sb.items = itemReplacer
      dispatch(setMenuSubGroup([...newMenuSubGroup]));
    }
  };

  const processAddItem = async(cartID) => {
    let body = {...itemToAdd};
    let res = {};
    switch (typeOfModalAddItem.toLowerCase()) {
      case "attribute":
        body.attributes = generateAttributesBody(attList);
        break;
      case "bundle":
        res = generateBundlesBody(bundleList);
        if(!res.isValidQty) break;
        body.bundles = res.bundles;
        break;
      default:
        break;
    }
    await apiCartAddItem(cartID, [body], setIsLoading, setOpenModal, resetCartInfo, item.itemName, toast);
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
            {renderButtonText(itemToAdd.unitPrice, itemType, typeOfModalAddItem, attList, bundleList)}
          </div>
        </div>
      </button>
    </div>
  );
};

RenderButtonAdd.propTypes = {
  item: PropTypes.object,
  itemType: PropTypes.string,
  itemToAdd: PropTypes.object,
  attList: PropTypes.array,
  bundleList: PropTypes.array,
  typeOfModalAddItem: PropTypes.string,
  setTypeOfModalAddItem: PropTypes.func,
  setOpenModal: PropTypes.func,
  setIsLoading: PropTypes.func
}