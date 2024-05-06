import PropTypes from "prop-types";

export const RenderAttItem = ({
  att,
  idxAttGroup,
  idxAttItem,
  handleClickAttItem,
  id,
  isFromBundle = false,
}) => {
  const coloringItem = () => {
    if (att.isSelected) {
      return "bg-[#FFF2DF] border-[#00524C]";
    } else {
      return "bg-white border-[color:var(--Grey-Scale-color-Grey-Scale-3,#D6D6D6)]";
    }
  };
  return (
    <button
      id="attributeItem"
      data-id={id}
      onClick={() => {
        handleClickAttItem(idxAttGroup, idxAttItem);
      }}
      className={`grid grid-cols-1 grid-rows-2 border gap-2.5 mt-2 mr-2 w-[94px] ${coloringItem()} rounded-lg border-solid w-[120px] h-[80px] p-[8px]`}
    >
      <div
        style={{
          textAlign: "left",
          width: "100%",
          display: "-webkit-box",
          WebkitLineClamp: "2",
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          padding: 0,
          margin: 0,
        }}
      >
        {att.attributesName}
      </div>
      <div
        className={`text-gray-700 text-left ${
          isFromBundle ? "text-xs" : "text-sm"
        } font-bold leading-5 tracking-wide mt-2`}
      >
        {att.calAmount ? `+ $ ${att.calAmount}` : "FREE"}
      </div>
    </button>
  );
};

RenderAttItem.propTypes = {
  att: PropTypes.object,
  idxAttGroup: PropTypes.number,
  idxAttItem: PropTypes.number,
  handleClickAttItem: PropTypes.func,
  isFromBundle: PropTypes.bool,
  id: PropTypes.string,
};