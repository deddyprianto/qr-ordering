import PropTypes from "prop-types";
import { ImageOptimization } from "../../components/ImageOptimization";
import { useSelector } from "react-redux";

export const MenuGroup = ({ label, imageItem, handleSelected, isGlow }) => {
  const { theme } = useSelector((state) => state.dataSlicePersisted);

  const handleClick = () => {
    handleSelected();
  };

  return (
    <button
      onClick={() => handleClick()}
      style={{
        flex: "0 0 auto",
        borderBottom: isGlow && `6px solid ${theme?.Color_Secondary}`,
      }}
      className={`w-[100px] mt-[10px] flex flex-col items-center py-[8px] ${
        isGlow && "px-[10px] py-[12px]"
      }`}
    >
      <ImageOptimization
        customStyle={{
          borderRadius: "1rem",
          width: "64px",
          border: isGlow
            ? `4px solid ${theme.Color_Secondary}`
            : "2px solid white",
        }}
        imageItems={imageItem || theme?.Image_Logo}
      />
      <div
        style={{
          color: isGlow ? theme.Color_Secondary : "white",
        }}
        className={`flex justify-center items-center text-sm h-full ${
          isGlow ? "font-bold" : "font-normal"
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
