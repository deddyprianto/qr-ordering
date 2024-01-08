import PropTypes from "prop-types";
import { ImageOptimization } from "../../components/ImageOptimization";

export const MenuGroup = ({ label, imageItem, handleSelected, isGlow }) => {
  const handleClick = () => {
    handleSelected();
  };

  return (
    <button
      onClick={() => handleClick()}
      style={{
        flex: "0 0 auto",
      }}
      className={`w-[100px] mt-[10px] grid grid-cols-1 grid-rows-navbarItemCustom gap-y-[12px] px-[16px] py-[8px] ${
        isGlow &&
        "border-b-[6px] border-solid border-b-[color:var(--Brand-color-Secondary,#FF4782)] px-[10px] py-[12px]"
      }`}
    >
      <ImageOptimization
        customStyle={`rounded-2xl width-[64px] h-[64px] ${
          isGlow ? "border-4 border-[#FF4782]" : "border-[2px] border-[#FFFFFF]"
        }`}
        imageItems={imageItem}
      />
      <div
        className={`flex justify-center items-center text-sm h-full ${
          isGlow ? "font-bold text-[#FF4782]" : "font-normal text-white"
        }`}
      >
        <div>{label}</div>
      </div>
    </button>
  );
};

MenuGroup.propTypes = {
  label: PropTypes.string,
  imageItem: PropTypes.string,
  handleSelected: PropTypes.any,
  isGlow: PropTypes.bool,
};
