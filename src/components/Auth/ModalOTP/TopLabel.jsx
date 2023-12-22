import PropTypes from "prop-types";
import { IconCloseTransparent } from "../../../assets/svgIcon";

export const TopLabel = ({ setIsOpenModal }) => {
  return(
    <div>
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
          font: "700 22px/31px Helvetica Neue, sans-serif ",
          }}
        >
          Enter your OTP
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
        textAlign: "center",
        letterSpacing: "0.28px",
        marginTop: "4px",
        width: "100%",
        font: "500 14px/20px Helvetica Neue, sans-serif ",
        }}
      >
        We have sent the OTP to j*******j@g***.***
      </div>
    </div>
  )
}

TopLabel.propTypes = {
  setIsOpenModal: PropTypes.bool
}