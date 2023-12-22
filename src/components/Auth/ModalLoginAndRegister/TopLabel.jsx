import { IconCloseTransparent } from "../../../assets/svgIcon";
import PropTypes from "prop-types";

export const RenderTopLabel = ({ label = "", subLabel = "", setIsOpenModal }) => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "16px 0px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              color: "var(--text-color-primary, #343A4A)",
              width: "100%",
              font: "700 16px Helvetica Neue, sans-serif ",
            }}
          >
            {label}
          </div>
          <div
            role="button"
            onClick={() => setIsOpenModal(false)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                setIsOpenModal(false);
              }
            }}
          >
            <IconCloseTransparent />
          </div>
        </div>
        <div
          style={{
            color: "#000",
            letterSpacing: "0.28px",
            marginTop: "4px",
            width: "100%",
            font: "400 14px/20px Helvetica Neue, sans-serif ",
          }}
        >
          {subLabel}
        </div>
      </div>
    );
  };
  RenderTopLabel.propTypes = {
    label: PropTypes.string.isRequired,
    subLabel: PropTypes.string.isRequired,
    setIsOpenModal: PropTypes.func
  };