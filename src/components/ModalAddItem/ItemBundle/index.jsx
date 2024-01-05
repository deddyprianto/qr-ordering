import PropTypes from "prop-types";
import { RenderBundleGroup } from "./BundlesGroup";
import { useEffect } from "react";

const RenderItemBundles = ({ 
  bundles,
  bundleList,
  setBundleList,
  setItemToAdd
}) => {

  useEffect(()=>{
    setBundleList(JSON.parse(JSON.stringify(bundles)));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },bundles)

  const removeAllSelectedAttItem = (attGroupItems) => {
    return attGroupItems.map(item => ({ ...item, isSelected: false }));
  }

  const handleClickAttItem = (idxBundleGroup, idxBundleItem) => {
    let tempBundleList = [...bundleList];
    if(tempBundleList[idxBundleGroup].isSingleSelection)  
      tempBundleList[idxBundleGroup].items = removeAllSelectedAttItem(tempBundleList[idxBundleGroup].items);

    tempBundleList[idxBundleGroup].items[idxBundleItem].isSelected = !tempBundleList[idxBundleGroup].items[idxBundleItem].isSelected;
    setBundleList(tempBundleList);
  }
  return (
    <div className="justify-center bg-[#F9F9F9] flex flex-col p-4 mb-4">
      {bundleList.map((bundleGroup, idx)=>{
        return (
          <RenderBundleGroup 
            key={bundleGroup.setMealGroupCode}
            bundleList={bundleList}
            groupIdx={idx}
            bundleGroup={bundleGroup}
            setItemToAdd={setItemToAdd}
            setBundleList={setBundleList}
            handleClickAttItem={handleClickAttItem}
          />
        )
      })}
    </div>
  );
};
RenderItemBundles.propTypes = {
  bundles: PropTypes.array,
  bundleList: PropTypes.array,
  setBundleList: PropTypes.func,
  setItemToAdd: PropTypes.func
};

export default RenderItemBundles;