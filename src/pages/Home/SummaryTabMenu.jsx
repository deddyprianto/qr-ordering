import { useState } from "react";
import PropTypes from "prop-types";

export const SummaryTabMenu = ({ isShow, dataSummaryTabMenu }) => {
  const [summarySelected, setSummarySelected] = useState("");
  const data = [];
  dataSummaryTabMenu?.map((x) => {
    if (x.buttonType.toLowerCase() == "folder") {
      data.push({
        label: x.buttonTitle,
        refNo: x.refNo,
        buttonType: x.buttonType,
        priority: x.priority,
      });
    }
  });

  const handleClick = (e) => {
    setSummarySelected(e.target.id);
  }

  return (
    <>
      {isShow && (
        <div className="flex overflow-x-auto mt-[24px] mb-[24px] gap-[8px]">
          {data?.map((item) => {
            return (
              <div id = {item.label}
                role="button"
                onClick={(e) => handleClick(e)}
                onKeyDown={() => {}}
                key={item.label}
                style={{
                  flex: "0 0 auto",
                  width: "150px",
                }}
                className={`flex items-center text-sm tracking-wide  justify-center py-2 rounded-full ${
                  item.label == summarySelected
                    ? "text-white bg-[#FF4782] font-bold"
                    : "text-gray-700 border border-[color:var(--Grey-Scale-color-Grey-Scale-1,#343A4A)] border-solid"
                }`}
              >
                {item.label}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

SummaryTabMenu.propTypes = {
  isShow: PropTypes.bool,
  dataSummaryTabMenu: PropTypes.any,
};
