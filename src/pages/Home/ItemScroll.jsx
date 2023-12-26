import PropTypes from "prop-types";

export const ItemScroll = ({
  label,
  imageItem,
  handleSelected,
  isGlow,
}) => {
  
  const handleClick = () => {
    handleSelected();
  };

  return (
    <button
      onClick={() => handleClick()}
      style={{
        flex: "0 0 auto",
        width: "100px",
      }}
      className={`mt-[16px] flex items-center flex-col p-[5px] ${
        isGlow &&
        "border-b-[6px] border-solid border-b-[color:var(--Brand-color-Secondary,#FF4782)]"
      }`}
    >
      <img
        alt={label}
        loading="lazy"
        src={imageItem}
        className={`w-[64px] rounded-2xl ${
          isGlow ? "border-4 border-[#FF4782]" : "border-[2px] border-[#FFFFFF]"
        } `}
      />
      <div
        className={`flex justify-center items-center text-sm h-full text-center ${
          isGlow ? "font-bold text-[#FF4782]" : "font-normal text-white"
        }`}
      >
        <div>{label}</div>
      </div>
    </button>
  );
};

ItemScroll.propTypes = {
  label: PropTypes.string,
  imageItem: PropTypes.string,
  handleSelected: PropTypes.any,
  isGlow: PropTypes.bool,
};
