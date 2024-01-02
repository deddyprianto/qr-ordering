import PropTypes from "prop-types";

export const SubGroupMenu = ({ 
  menuSubGroup,
  selectedSubGroup,
  setSelectedSubGroup
}) => {
  const handleClick = (refNo, idx) => {
    setSelectedSubGroup(refNo);
    scrollToSubMenuItem("sub_"+idx+"_"+refNo)

  };

  const scrollToSubMenuItem = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="flex overflow-x-auto mt-[24px] mb-[24px] gap-[8px]">
      {menuSubGroup?.map((subGroup, idx) => {
        return (
          <button
            id={subGroup.refNo}
            onClick={() => handleClick(subGroup.refNo, idx)}
            key={subGroup.buttonTitle}
            style={{
              flex: "0 0 auto",
              width: "150px",
            }}
            className={`flex items-center text-sm tracking-wide  justify-center py-2 rounded-full ${
              subGroup.refNo == selectedSubGroup
                ? "text-white bg-[#FF4782] font-bold"
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
  menuSubGroup: PropTypes.any,
  selectedSubGroup: PropTypes.string,
  setSelectedSubGroup: PropTypes.func
};
