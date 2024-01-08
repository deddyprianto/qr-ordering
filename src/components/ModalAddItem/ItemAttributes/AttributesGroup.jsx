import PropTypes from "prop-types";
import { RenderAttItem } from "./AttributesItem";

export const RenderAttGroup = ({ 
  attGroup,
  idxAttGroup,
  handleClickAttItem,
  isFromBundle=false
}) => {
  return (
    <div>
      <div className="text-black text-xs font-medium leading-5 tracking-wide pt-2">
        {attGroup.attributesGroupName}
      </div>
      <div className="flex items-center flex-wrap">
        {attGroup.items?.map((att, idx) => {
          return (
            <RenderAttItem 
              key={att.attributesCode} 
              att={att}
              idxAttGroup={idxAttGroup}
              idxAttItem={idx}
              handleClickAttItem={handleClickAttItem}
              isFromBundle={isFromBundle}
            />
          );
        })}
      </div>
    </div>
  );
}

RenderAttGroup.propTypes = {
  attGroup: PropTypes.object,
  idxAttGroup: PropTypes.number,
  handleClickAttItem:PropTypes.func,
  isFromBundle: PropTypes.bool
}