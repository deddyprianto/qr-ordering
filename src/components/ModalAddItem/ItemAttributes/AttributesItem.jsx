import PropTypes from "prop-types";

export const RenderAttItem = ({
  att,
  idxAttGroup,
  idxAttItem,
  handleClickAttItem,
  isFromBundle = false
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
      onClick={() => {
        handleClickAttItem(idxAttGroup, idxAttItem);
      }}
      className="justify-between items-stretch flex gap-2.5 mt-2 mr-2 w-[94px] text-left"
    >
      <div
        className={`items-stretch border flex grow basis-[0%] flex-col px-3.5 py-1 rounded-lg border-solid ${coloringItem()}`}
      >
        <div
          className={`text-gray-700 ${
            isFromBundle ? "text-xs" : "text-sm"
          } font-medium leading-5 tracking-wide`}
        >
          {att.attributesName}
        </div>
        <div
          className={`text-gray-700 ${
            isFromBundle ? "text-xs" : "text-sm"
          } font-bold leading-5 tracking-wide mt-2`}
        >
          {att.calAmount ? `+ $ ${att.calAmount}` : "FREE"}
        </div>
      </div>
    </button>
  );
};

RenderAttItem.propTypes = {
  att: PropTypes.object,
  idxAttGroup: PropTypes.number,
  idxAttItem: PropTypes.number,
  handleClickAttItem: PropTypes.func,
  isFromBundle: PropTypes.bool
};