import PropTypes from "prop-types";
import classNames from "classnames";

const Loading = ({ visible = true, fullScreen = true }) => {
  if (!visible) return null;

  return (
    <div
      className={classNames({
        "d-flex align-items-center justify-content-center": true,
        "w-100": true,
        "h-100": fullScreen,
        "h-25": !fullScreen,
      })}
    >
      <div className="spinner-border text-primary">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

Loading.propTypes = {
  visible: PropTypes.bool,
  fullScreen: PropTypes.bool,
};

export default Loading;
