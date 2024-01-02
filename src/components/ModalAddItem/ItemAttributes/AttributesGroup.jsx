import PropTypes from "prop-types";
import { RenderAttItem } from "./AttributesItem";

export const RenderAttGroup = ({ 
  attGroup,
  idxAttGroup,
  setItemToAdd, 
  handleClickAttItem
}) => {
  return (
    <div>
      <div className="text-black text-sm font-medium leading-5 tracking-wide">
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
              setItemToAdd={setItemToAdd}
              handleClickAttItem={handleClickAttItem}/>
          );
        })}
      </div>
    </div>
  );
}

RenderAttGroup.propTypes = {
  attGroup: PropTypes.object,
  idxAttGroup: PropTypes.number,
  setItemToAdd: PropTypes.func,
  handleClickAttItem:PropTypes.func
}