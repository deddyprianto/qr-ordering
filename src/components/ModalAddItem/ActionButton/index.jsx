import PropTypes from "prop-types";
import { IconPlus } from "../../../assets/svgIcon";
import { addNewCart } from "../../GenerateCart";
import { useDispatch, useSelector } from "react-redux";
import { generateAttributesBody } from "./ItemAttributeBody";
import { apiCartAddItem } from "./AddItemToCart";
import { setCartInfo } from "../../../app/dataSlicePersisted";
import { useEdgeSnack } from "../../EdgeSnack/utils/useEdgeSnack";
import { generateBundlesBody } from "./ItemBundleBody";
import { renderButtonText } from "./GetButtonText";
import { mapCartAndProduct } from "../../Home/productAndCartMapper";
import { setMenuSubGroup } from "../../../app/dataSlice";
import { isBundleReadyToSubmit } from "../ItemBundle/CalculateBundleGroupQty";

export const RenderButtonAdd = ({
  item,
  itemToAdd,
  itemType,
  attList,
  bundleList,
  typeOfModalAddItem,
  setTypeOfModalAddItem,
  setOpenModal,
  setIsLoading,
  isCalledFromCart,
  lineID,
  isLoading,
}) => {
  const { theme } = useSelector((state) => state.dataSlicePersisted);
  const dispatch = useDispatch();
  const toast = useEdgeSnack();
  const { cartInfo, outletName, orderType } = useSelector(
    (state) => state.dataSlicePersisted,
  );
  const isQtyExist = cartInfo?.details?.some(
    (itemCart) => itemCart.productInfo.itemNo === item.itemNo,
  );
  const menuSubGroup = useSelector((state) => state.dataSlice.menuSubGroup);

  const resetCartInfo = (data) => {
    dispatch(setCartInfo(data));
    updateCartQtyProductCatalog(data);
  };

  const handleClickButton = async () => {
    if(isLoading || !isBundleReadyToSubmit(bundleList)) return;
    if (
      itemType == "bundle" &&
      typeOfModalAddItem == "main" &&
      !isCalledFromCart
    ) {
      setTypeOfModalAddItem("bundle");
      return;
    } else if (
      itemType == "attribute" &&
      typeOfModalAddItem != "attribute" &&
      !isCalledFromCart
    ) {
      setTypeOfModalAddItem("attribute");
      return;
    }

    setIsLoading(true);
    let cartID = cartInfo?.uniqueID;
    if (!cartID)
      cartID = await addNewCart(
        setIsLoading,
        outletName,
        resetCartInfo,
        orderType,
      );

    processAddItem(cartID);
  };

  const updateCartQtyProductCatalog = (newCartInfo) => {
    let newMenuSubGroup = JSON.parse(JSON.stringify(menuSubGroup));
    for (const sb of newMenuSubGroup) {
      let itemReplacer = mapCartAndProduct(sb.items, newCartInfo);
      sb.items = itemReplacer;
      dispatch(setMenuSubGroup([...newMenuSubGroup]));
    }
  };

  const processAddItem = async (cartID) => {
    let body = { ...itemToAdd };
    let res = {};
    switch (typeOfModalAddItem.toLowerCase()) {
      case "attribute":
        body.attributes = generateAttributesBody(attList);
        break;
      case "bundle":
        res = generateBundlesBody(bundleList);
        if (!res.isValidQty) break;
        body.bundles = res.bundles;
        break;
      default:
        break;
    }
    await apiCartAddItem(
      cartID,
      [body],
      setOpenModal,
      resetCartInfo,
      item.itemName,
      toast,
      lineID,
    );
    setIsLoading(false);
  };

  return (
    <div
      className="w-full flex items-center px-4 shadow-xl h-[75px]"
      style={{
        boxShadow: "0px -4px 10px 0px rgba(0, 0, 0, 0.10)",
      }}
    >
      <button
        style={{
          backgroundColor: isLoading || !isBundleReadyToSubmit(bundleList)?"#9D9D9D":theme.Color_Secondary,
        }}
        onClick={() => handleClickButton()}
        className="w-full rounded-lg px-[16px] py-[12px] flex justify-center items-center cursor-pointer"
      >
        <div className="flex items-stretch gap-2">
          {isLoading ? (
            <span className="flex justify-center items-center">
              <span className="loader"></span>
              <div className="text-white">{!isQtyExist ? "Adding..." : "Updating..."}</div>
            </span>
          ) : (
            <>
              {isCalledFromCart ? "" : <IconPlus />}
              <div className="text-white text-xs font-bold leading-4 self-center my-auto">
                {renderButtonText(
                  itemToAdd.unitPrice,
                  itemType,
                  typeOfModalAddItem,
                  attList,
                  bundleList,
                )}
              </div>
            </>
          )}
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
  setIsLoading: PropTypes.func,
  isCalledFromCart: PropTypes.bool,
  lineID: PropTypes.string,
  isLoading: PropTypes.bool,
};