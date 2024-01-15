import PropTypes from "prop-types";
import { RenderAttGroup } from "./AttributesGroup";
import { useEffect } from "react";

const RenderItemAttributes = ({
  attributes,
  attList,
  setAttList,
  isFromBundle = false,
  itemCart,
}) => {
  console.log(itemCart);
  useEffect(() => {
    setAttList(JSON.parse(JSON.stringify(attributes)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, attributes);

  const removeAllSelectedAttItem = (attGroupItems) => {
    return attGroupItems.map((item) => ({ ...item, isSelected: false }));
  };

  const handleClickAttItem = (idxAttGroup, idxAttItem) => {
    let tempAttList = [...attList];
    if (tempAttList[idxAttGroup].isSingleSelection)
      tempAttList[idxAttGroup].items = removeAllSelectedAttItem(
        tempAttList[idxAttGroup].items,
      );

    tempAttList[idxAttGroup].items[idxAttItem].isSelected =
      !tempAttList[idxAttGroup].items[idxAttItem].isSelected;
    setAttList(tempAttList);
  };
  return (
    <div className="justify-center bg-[#F9F9F9] flex flex-col p-4 mb-4 pt-0">
      {attList.map((attGroup, idx) => {
        return (
          <RenderAttGroup
            key={attGroup.attributesGroupCode}
            attGroup={attGroup}
            idxAttGroup={idx}
            handleClickAttItem={handleClickAttItem}
            isFromBundle={isFromBundle}
          />
        );
      })}
    </div>
  );
};
RenderItemAttributes.propTypes = {
  attributes: PropTypes.array,
  attList: PropTypes.array,
  setAttList: PropTypes.func,
  isFromBundle: PropTypes.bool,
  itemCart: PropTypes.object,
};

export default RenderItemAttributes;