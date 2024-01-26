import screen from "../../../hooks/useWindowSize";
import PropTypes from "prop-types";
import RenderMainContainer from "./MainConteiner";
import { RenderButtonAdd } from "./ActionButton";
import { useEffect, useState } from "react";
import { RenderTopLabel } from "./TopLabel";
import { ParentBlur } from "../ParentBlur";
import RenderItemAttributes from "./ItemAttributes";
import RenderItemBundles from "./ItemBundle";
import RenderItemMain from "./ItemMain";
import { IconClose } from "../../assets/svgIcon";
import { RenderLabelAndPrice } from "./LabelAndPrice";

const RenderModalItemDetail = ({
  openModal,
  setOpenModal,
  item,
  itemType,
  isCalledFromCart,
  itemCart,
}) => {
  const [itemToAdd, setItemToAdd] = useState({});
  const [attList, setAttList] = useState([]);
  const [bundleList, setBundleList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [lineID, setLineID] = useState("");
  const { width } = screen();
  const gadgetScreen = width < 980;

  let classNameCustom = "fixed bottom-0 bg-white z-50 overflow-auto";
  if (gadgetScreen) {
    classNameCustom += " left-0 w-full max-h-full rounded-t-[16px]";
  } else {
    classNameCustom +=
      " left-[50%] translate-x-[-50%] w-2/5 h-3/4 max-h-[90%] rounded-[16px]";
  }
  classNameCustom += " flex flex-col items-center";

  const [typeOfModalAddItem, setTypeOfModalAddItem] = useState("main"); //option "main", "attribute", "bundle", "bundle&attribute"

  useEffect(() => {
    if (openModal) {
      setItemToAdd({
        itemNo: item.itemNo,
        quantity: 1,
        unitPrice: item.retailPrice,
        remark: "",
        referenceNo: "",
        lineInfo: "",
        attributes: [],
        bundles: [],
      });
      setTypeOfModalAddItem(isCalledFromCart ? itemType : "main");
      setLineID(isCalledFromCart ? itemCart.uniqueID : "");
    }
  }, [
    isCalledFromCart,
    item?.itemNo,
    item?.retailPrice,
    itemCart?.uniqueID,
    itemType,
    openModal,
  ]);

  const renderItemTypeFromCart = () => {
    if (itemType === "attribute") {
      return (
        <RenderItemAttributes
          attributes={item.attributes}
          attList={attList}
          setAttList={setAttList}
          itemCart={itemCart}
          isCalledFromCart
        />
      );
    } else if (itemType === "bundle") {
      return (
        <RenderItemBundles
          bundles={item.bundles}
          bundleList={bundleList}
          setItemToAdd={setItemToAdd}
          setBundleList={setBundleList}
          itemCart={itemCart}
          isCalledFromCart
        />
      );
    } else if (itemType === "main") {
      return (
        <RenderItemMain
          item={item}
          setIsLoading={setIsLoading}
          itemCart={itemCart}
        />
      );
    } else {
      return null;
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-modal-popup-container z-50 inset-0 backdrop-filter backdrop-blur-sm bg-[black] bg-opacity-50 ">
      <div className={classNameCustom}>
        <div className="grid grid-cols-[1fr] grid-rows-custom gap-0 grid-flow-row h-full w-full">
          {isLoading && <ParentBlur />}
          {isCalledFromCart ? (
            <>
              <div className="w-full bg-white flex justify-between items-center px-[16px]">
                <RenderLabelAndPrice
                  itemName={itemCart?.productInfo?.itemName}
                  price={itemCart?.productInfo?.retailPrice}
                />
                <button
                  onClick={() => {
                    setOpenModal(false);
                  }}
                >
                  <IconClose color="black" width="30" height="50" />
                </button>
              </div>
              {renderItemTypeFromCart()}
            </>
          ) : (
            <>
              <RenderTopLabel
                setOpenModal={setOpenModal}
                typeOfModalAddItem={typeOfModalAddItem}
                itemName={item.itemName}
                price={item.retailPrice}
              />
              <RenderMainContainer
                item={item}
                attList={attList}
                bundleList={bundleList}
                typeOfModalAddItem={typeOfModalAddItem}
                setItemToAdd={setItemToAdd}
                setAttList={setAttList}
                setBundleList={setBundleList}
                setIsLoading={setIsLoading}
              />
            </>
          )}
          <RenderButtonAdd
            item={item}
            lineID={lineID}
            itemToAdd={itemToAdd}
            attList={attList}
            bundleList={bundleList}
            itemType={itemType}
            typeOfModalAddItem={typeOfModalAddItem}
            setTypeOfModalAddItem={setTypeOfModalAddItem}
            setOpenModal={setOpenModal}
            setIsLoading={setIsLoading}
            isCalledFromCart={isCalledFromCart}
          />
        </div>
      </div>
    </div>
  );
};

RenderModalItemDetail.propTypes = {
  openModal: PropTypes.bool,
  setOpenModal: PropTypes.func,
  itemType: PropTypes.string,
  item: PropTypes.object,
  isCalledFromCart: PropTypes.bool,
  itemCart: PropTypes.object,
};
export default RenderModalItemDetail;