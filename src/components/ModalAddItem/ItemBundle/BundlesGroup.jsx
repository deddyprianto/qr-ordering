import PropTypes from "prop-types";
import { IconArrowBottom, IconArrowUp, IconCheckFill } from "../../../assets/svgIcon";
import { useEffect, useState } from "react";
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
}) => {
  const [itemCartBundles, setItemCartBundles] = useState(itemCart);
  const theme = useSelector((state) => state.dataSlice.theme);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    setIsExpanded(false);
  }, [bundleGroup]);

  const expandBundeItem = () => {
    if (!isExpanded) return <></>;
    else
      return bundleGroup.items?.map((item, idx) => {
        return (
          <RenderBundleItem
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
    if (isValidBundleQty(bundleGroup)) return <IconCheckFill />;
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
        isExpanded ? "pb-4" : ""
      } justify-center items-stretch border border-[color:var(--Brand-color-Primary,#00524C)] bg-white flex w-full flex-col mt-4 rounded-lg border-solid`}
    >
      <button
        className={`${
          isExpanded ? "rounded-tl-md rounded-tr-md" : "rounded-md"
        } justify-between items-center flex w-full gap-5 px-4 py-1 bg-[${
          theme.primary
        }]`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="items-stretch flex gap-2 my-auto">
          {renderCheckBox()}
          <div className="text-white text-sm font-medium leading-5 tracking-wide">
            {bundleGroup.setMealGroupName}
          </div>
          <div className="text-white text-sm font-medium leading-5 tracking-wide">
            {`(Choose ${bundleGroup.max})`}
          </div>
        </div>
        <div>
          {isExpanded ? (
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
};