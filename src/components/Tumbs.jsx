import PropTypes from "prop-types";


export const Tumbs = ({ bgColor, label, icon }) => {
    return (
      <div
        style={{backgroundColor: bgColor}}
        className={`flex justify-between gap-1 pl-1.5 pr-3 py-1 rounded-[100px]`}
      >
        <img
          alt=""
          loading="lazy"
          src={icon}
          className="aspect-square object-contain object-center w-[18px] overflow-hidden shrink-0 max-w-full"
        />
        <div className="text-white text-xs font-medium leading-4 tracking-wide">
          {label}
        </div>
      </div>
    );
  };

  Tumbs.propTypes = {
    bgColor : PropTypes.string,
    label : PropTypes.string,
    icon: PropTypes.string
  }