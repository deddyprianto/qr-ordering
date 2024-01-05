import PropTypes from "prop-types";
import { IconCheckSquareFill, IconRectangle } from "../../../assets/svgIcon";
import { useEffect, useState } from "react";
import { RenderButtonQty } from "./ButtonQty";


export const RenderBundleItem = ({ 
  item,
  bundleList,
  groupIdx,
  itemIdx,
  setBundleList,
  disableMinButton,
  disableMaxButton
}) => {
  const [productInfo, setProductInfo] = useState({});

  useEffect(()=>{
    setProductInfo(item.productInfo || {});
  },[item])

  const updateBundleList = (newItemObj) => {
    let tempBundleList = [...bundleList]

    tempBundleList[groupIdx].items[itemIdx] = newItemObj;
    setBundleList(tempBundleList);
  }

  const handleSelectItem = () => {
    let tmpItem = {...item};
    tmpItem.isSelected = !tmpItem.isSelected;
    tmpItem.quantity=0
    updateBundleList(tmpItem);
  }

  return (
    <div className="items-stretch flex justify-between mt-2.5 gap-2 px-4">
      <button className="fixed-width-content items-center flex justify-start gap-2 w-full"
        onClick={handleSelectItem}
      >
        {item.isSelected
          ?<IconCheckSquareFill/>
          :<IconRectangle/>
        }
        <div className="text-gray-700 text-xs font-medium leading-5 tracking-wide text-left">
            {productInfo?.itemName}
          </div>
      </button>
      <RenderButtonQty 
        item={item} 
        updateBundleList={updateBundleList}
        disableMinButton={disableMinButton}
        disableMaxButton={disableMaxButton}
      />
      <div className="fixed-width-content text-gray-700 text-right text-sm font-bold leading-5 tracking-wide self-center grow whitespace-nowrap my-auto"
        style={{width: "75px"}}  
      >
        {productInfo?.retailPrice?`$ ${productInfo.retailPrice}`:"FREE"}
      </div>
    </div>
  );
}

RenderBundleItem.propTypes = {
  item: PropTypes.object,
  bundleList: PropTypes.array,
  groupIdx: PropTypes.number,
  itemIdx: PropTypes.number,
  setBundleList: PropTypes.func,
  disableMinButton: PropTypes.bool,
  disableMaxButton: PropTypes.bool
}