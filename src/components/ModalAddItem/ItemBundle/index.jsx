import PropTypes from "prop-types";
import { RenderBundleGroup } from "./BundlesGroup";
import { useEffect, useMemo, useRef } from "react";
import { mappingBundleProductCart } from "./MappingBundleCartAndItem";

const RenderItemBundles = ({
  bundles,
  bundleList,
  setBundleList,
  setItemToAdd,
  itemCart,
  isCalledFromCart
}) => {
  const memoizedCart = useMemo(() => {
    return itemCart?.bundles?.reduce((acc, item) => {
      const key = `${item.bundleCode}-${item.bundleItemCode}`;
      acc[key] = item;
      return acc;
    }, {});
  }, [itemCart]);

  const setBundleListRef = useRef();
  useEffect(() => {
    setBundleListRef.current();
  }, [bundles]);

  setBundleListRef.current = () => {
    if(isCalledFromCart) 
      setBundleList(mappingBundleProductCart(memoizedCart, bundles));
    else 
      setBundleList(JSON.parse(JSON.stringify(bundles)));
  }

  const removeAllSelectedAttItem = (attGroupItems) => {
    return attGroupItems.map((item) => ({ ...item, isSelected: false }));
  };

  const handleClickAttItem = (idxBundleGroup, idxBundleItem) => {
    let tempBundleList = [...bundleList];
    if (tempBundleList[idxBundleGroup].isSingleSelection)
      tempBundleList[idxBundleGroup].items = removeAllSelectedAttItem(
        tempBundleList[idxBundleGroup].items,
      );

    tempBundleList[idxBundleGroup].items[idxBundleItem].isSelected =
      !tempBundleList[idxBundleGroup].items[idxBundleItem].isSelected;
    setBundleList(tempBundleList);
  };
  return (
    <div
      id="renderItemBundle"
      className="justify-center bg-[#F9F9F9] flex flex-col p-4 mb-4"
    >
      {bundleList.map((bundleGroup, idx) => {
        return (
          <RenderBundleGroup
            key={bundleGroup?.setMealGroupCode}
            bundleList={bundleList}
            groupIdx={idx}
            bundleGroup={bundleGroup}
            setItemToAdd={setItemToAdd}
            setBundleList={setBundleList}
            handleClickAttItem={handleClickAttItem}
            isCalledFromCart={isCalledFromCart}
            itemCart={itemCart}
            id={bundleGroup?.setMealGroupCode}
          />
        );
      })}
    </div>
  );
};
RenderItemBundles.propTypes = {
  bundles: PropTypes.array,
  bundleList: PropTypes.array,
  setBundleList: PropTypes.func,
  setItemToAdd: PropTypes.func,
  isCalledFromCart: PropTypes.func,
  itemCart: PropTypes.any,
};

export default RenderItemBundles;