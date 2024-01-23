import { IconCheck, IconWarning } from "../../assets/svgIcon";
import { useTimeOut } from "./utils/useTimeOut";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

export const EdgeSnack = ({ type, className, close, content }) => {
  const theme = useSelector((state) => state.dataSlicePersisted.theme);
  useTimeOut(close, 2000);

  const getBackGroundColor = () => {
    if (type?.toLowerCase() == "success") {
      return theme.success;
    } else if (type?.toLowerCase() == "error") {
      return theme.warning;
    }
  };

  const getIcon = () => {
    if (type?.toLowerCase() == "success") {
      return <IconCheck />;
    } else if (type?.toLowerCase() == "error") {
      return <IconWarning />;
    }
  };

  return (
    <div
      style={{ backgroundColor: getBackGroundColor() }}
      className={`flex justify-start item-start ${className}`}
    >
      {getIcon()}
      <div className="text-white text-sm font-medium leading-5 tracking-wide grow">
        <span className="font-bold text-white">{content}</span>
      </div>
    </div>
  );
};

EdgeSnack.propTypes = {
  type : PropTypes.string,
  className : PropTypes.string,
  close : PropTypes.func,
  content: PropTypes.any
};
