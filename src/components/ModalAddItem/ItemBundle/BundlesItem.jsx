import PropTypes from "prop-types";
import { IconCheckSquareFill, IconRectangle } from "../../../assets/svgIcon";
import { useEffect, useState } from "react";
import { RenderButtonQty } from "./ButtonQty";
import RenderItemAttributes from "../ItemAttributes";

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
  const [attList, setAttList] = useState([]);

  useEffect(()=>{
    setProductInfo(item.productInfo || {});
    if(item.isSelected)
      setAttList(item.productInfo.attributes || []);
  },[item])

  useEffect(()=>{
    if(attList.length>0){
      let tmpItem = {...item};
      tmpItem.productInfo.attributes = attList
      updateBundleList(tmpItem);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[attList])

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

  const renderBundleAttribute = (attributes) => {
    if((attributes||[]).length<=0) return <></>
    else {
      return <div className="pt-2"><RenderItemAttributes  
      attributes={attributes}
      attList={attList}
      setAttList={setAttList}
      isFromBundle={true}
    />
    </div>
    }
  }

  return (
    <div>
      <div className="items-stretch flex justify-between mt-2.5 gap-2 px-4">
        <button className="fixed-width-content items-center flex justify-start gap-2 w-full"
          onClick={handleSelectItem}
        >
          {item.isSelected
            ?<IconCheckSquareFill/>
            :<IconRectangle/>
          }
          <div className="text-gray-700 text-xs font-medium leading-5 tracking-wide text-left">
            <div>
              {productInfo?.itemName}
            </div>
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
      {item.isSelected
        ?renderBundleAttribute(productInfo.attributes)
        :""
      }
      
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