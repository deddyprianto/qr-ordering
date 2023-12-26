import screen from "../../../hooks/useWindowSize";
import PropTypes from "prop-types";
import RenderMainContainer from "./MainConteiner";
import { RenderButtonAdd } from "./ActionButton";
import { useEffect, useState } from "react";
import { RenderTopLabel } from "./TopLabel";
import { ParentBlur } from "../ParentBlur";

const RenderModalItemDetail = ({ 
  openModal,
  item,
  typeOfModalAddItem,
  setTypeOfModalAddItem,
  setOpenModal,
}) => {
  const [itemToAdd, setItemToAdd] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { width } = screen();
  const gadgetScreen = width < 980;

  let classNameCustom = "fixed bottom-0 bg-white z-50 overflow-auto";
  if (gadgetScreen) {
    classNameCustom += " left-0 w-full max-h-full rounded-t-[16px]";
    classNameCustom += ` ${typeOfModalAddItem=="main"?"h-[70%]":""}`;
  } else {
    classNameCustom +=
      " left-[50%] translate-x-[-50%] w-2/5 h-3/4 max-h-[90%] rounded-[16px]";
  }
  classNameCustom += " flex flex-col items-center";

  useEffect(()=>{
    if(openModal){
      setItemToAdd({
        "itemNo": item.itemNo,
        "quantity": 0,
        "unitPrice": item.retailPrice,
        "remark": "",
        "referenceNo": "",
        "lineInfo": "",
        "attributes": [],
        "bundles": []
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[openModal])

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-modal-popup-container z-50 inset-0 backdrop-filter backdrop-blur-sm">
      {/* <div > */}
        <div className={classNameCustom}>
        <div className="grid grid-cols-[1fr] grid-rows-custom gap-0 grid-flow-row h-full w-full">
        {isLoading && <ParentBlur />}
          <RenderTopLabel 
            setOpenModal={setOpenModal} 
            itemName={item.itemName} 
            price={item.retailPrice}/>
          <RenderMainContainer
            item={item}
            typeOfModalAddItem={typeOfModalAddItem}
            setOpenModal={setOpenModal}
            setTypeOfModalAddItem={setTypeOfModalAddItem}
          />
          <RenderButtonAdd
            item={item}
            itemToAdd={itemToAdd}
            setTypeOfModalAddItem={setTypeOfModalAddItem}
            setOpenModal={setOpenModal}
            setIsLoading={setIsLoading}
          />
        </div>
      </div>
    </div>
  );
};

RenderModalItemDetail.propTypes = {
  openModal: PropTypes.bool,
  setOpenModal: PropTypes.func,
  typeOfModalAddItem: PropTypes.string,
  setTypeOfModalAddItem: PropTypes.func,
  item: PropTypes.object,
};
export default RenderModalItemDetail;