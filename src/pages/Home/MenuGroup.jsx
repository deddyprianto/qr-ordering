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
        borderBottom: isGlow && `4px solid ${theme?.Color_Secondary}`,
      }}
      className="grid grid-cols-1 grid-rows-[1fr_40px] w-[100px] mt-[10px pt-[8px] place-items-center"
    >
      <ImageOptimization
        customStyle={{
          borderRadius: "1rem",
          border: isGlow
            ? `4px solid ${theme.Color_Secondary}`
            : "2px solid white",
          height: "100%",
        }}
        width={64}
        imageItems={imageItem || theme?.Image_Logo}
      />
      <div
        style={{
          color: isGlow ? theme.Color_Secondary : "white",
        }}
        className={`text-sm h-full flex items-center leading-4 ${
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
