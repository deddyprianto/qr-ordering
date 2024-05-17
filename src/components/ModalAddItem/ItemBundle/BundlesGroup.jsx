import PropTypes from "prop-types";
import { IconArrowBottom, IconArrowUp, IconCheckFill } from "../../../assets/svgIcon";
import { useEffect, useRef, useState } from "react";
import { RenderBundleItem } from "./BundlesItem";
import { calculateBundleGroupQty, isValidBundleQty } from "./CalculateBundleGroupQty";
import { useSelector } from "react-redux";

export const RenderBundleGroup = ({
  bundleList,
  bundleGroup,
  groupIdx,
  setBundleList,
  itemCart,
  isCalledFromCart,
  id,
}) => {
  const [itemCartBundles, setItemCartBundles] = useState(itemCart);
  const theme = useSelector((state) => state.dataSlicePersisted.theme);

  const expandFirstBundle = useRef();
  useEffect(() => {
    expandFirstBundle.current();
  }, []);

  expandFirstBundle.current = () => {
    if (bundleList.length > 0) {
      if (groupIdx === 0) {
        setIsExpanded(true);
      }
    }
  }

  const expandBundleItems = () => {
    for (const [index, bundle] of bundleList.entries()){
      if(index == groupIdx) bundle.isExpanded=true;
      else bundle.isExpanded=false;
    }
  }

  const setIsExpanded = (value) => {
    if(value)
      expandBundleItems();
    else
      bundleList[groupIdx].isExpanded=value;
    
    let tempBundleList = [...bundleList];
    tempBundleList[groupIdx] = bundleList[groupIdx];
    setBundleList(tempBundleList);
  }

  const expandBundeItem = () => {
    if (!bundleList[groupIdx].isExpanded) return null;
    else
      return bundleGroup.items?.map((item, idx) => {
        return (
          <RenderBundleItem
            id={item.setMealItemCode}
            key={item.setMealItemCode}
            itemCart={itemCartBundles}
            setItemCartBundles={setItemCartBundles}
            isCalledFromCart={isCalledFromCart}
            groupIdx={groupIdx}
            bundleList={bundleList}
            setBundleList={setBundleList}
            itemIdx={idx}
            item={item}
            disableMinButton={calculateBundleGroupQty(bundleGroup) == 0}
            disableMaxButton={
              calculateBundleGroupQty(bundleGroup) == bundleGroup.max
            }
          />
        );
      });
  };

  const renderCheckBox = () => {
    if (isValidBundleQty(bundleGroup))
      return (
        <div id="IconCheckPassed" data-id={id}>
          <IconCheckFill />
        </div>
      );
    else
      return (
        <div className="text-emerald-800 text-sm font-medium leading-5 tracking-wide whitespace-nowrap items-stretch bg-white aspect-[1.9] justify-center px-1.5 rounded-[1000px]">
          {groupIdx + 1}
        </div>
      );
  };

  return (
    <div
      className={`${
        bundleList[groupIdx].isExpanded ? "pb-4" : ""
      } justify-center items-stretch border border-[color:var(--Brand-color-Primary,#00524C)] bg-white flex w-full flex-col mt-4 rounded-lg border-solid`}
    >
      <button
        id="bundleItemGroups"
        data-id={id}
        style={{ backgroundColor: theme.Color_Primary }}
        className={`${
          bundleList[groupIdx].isExpanded ? "rounded-tl-md rounded-tr-md" : "rounded-md"
        } justify-between items-center flex w-full gap-5 px-4 py-1`}
        onClick={() => setIsExpanded(!bundleList[groupIdx].isExpanded)}
      >
        <div className="items-stretch flex gap-2 my-auto">
          {renderCheckBox()}
          <div className="text-white text-sm font-medium leading-5 tracking-wide">
            {bundleGroup.setMealGroupName}
          </div>
          <div
            id="requiredQty"
            data-id={bundleGroup.max}
            className="text-white text-sm font-medium leading-5 tracking-wide"
          >
            {`(Choose ${bundleGroup.max})`}
          </div>
        </div>
        <div>
          {bundleList[groupIdx].isExpanded ? (
            <IconArrowUp color={"white"} />
          ) : (
            <IconArrowBottom color={"white"} />
          )}
        </div>
      </button>
      {expandBundeItem()}
    </div>
  );
};

RenderBundleGroup.propTypes = {
  bundleList: PropTypes.array,
  bundleGroup: PropTypes.object,
  groupIdx: PropTypes.number,
  setBundleList: PropTypes.func,
  itemCart: PropTypes.object,
  isCalledFromCart: PropTypes.bool,
  id: PropTypes.string,
};