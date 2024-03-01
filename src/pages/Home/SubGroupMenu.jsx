import PropTypes from "prop-types";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const SubGroupMenu = ({ selectedSubGroup, setSelectedSubGroup }) => {
  const { theme } = useSelector((state) => state.dataSlicePersisted);
  const { menuSubGroup, moveSelected } = useSelector(
    (state) => state.dataSlice,
  );

  const scrollToSubMenuItem = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleClick = (refNo, idx) => {
    setSelectedSubGroup(refNo);
    scrollToSubMenuItem("sub_" + idx + "_" + refNo);
  };
  useEffect(() => {
    if (moveSelected) {
      setSelectedSubGroup("");
    }
  }, [moveSelected, setSelectedSubGroup]);

  return (
    <div className="flex mt-[24px] mb-[24px] gap-[8px] scroll-container">
      {menuSubGroup?.map((subGroup, idx) => {
        const autoMoveSelected = moveSelected && idx === 0;
        return (
          <button
            id={subGroup.refNo}
            onClick={() => handleClick(subGroup.refNo, idx)}
            key={subGroup.refNo}
            style={{
              flex: "0 0 auto",
              width: "150px",
              backgroundColor:
                (autoMoveSelected || subGroup.refNo === selectedSubGroup) &&
                theme.Color_Secondary,
            }}
            className={`flex items-center text-sm tracking-wide  justify-center py-2 rounded-full ${
              autoMoveSelected || subGroup.refNo === selectedSubGroup
                ? "text-white font-bold"
                : "text-gray-700 border border-[color:var(--Grey-Scale-color-Grey-Scale-1,#343A4A)] border-solid"
            }`}
          >
            {subGroup.buttonTitle}
          </button>
        );
      })}
    </div>
  );
};

SubGroupMenu.propTypes = {
  selectedSubGroup: PropTypes.string,
  setSelectedSubGroup: PropTypes.func,
};
export default SubGroupMenu;