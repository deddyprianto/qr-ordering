import PropTypes from "prop-types";
import { IconCloseTransparent } from "../../../assets/svgIcon";
import { Trans } from "react-i18next";

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
          <Trans i18nKey={"enter_your_otp"}/>
        </div>
        <button
          onClick={() => setIsOpenModal(false)}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              setIsOpenModal(false);
            }
          }}
        >
          <IconCloseTransparent />
        </button>
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
        
        <Trans i18nKey={"we_have_sent_otp_to"}/> j*******j@g***.***
      </div>
    </div>
  )
}

TopLabel.propTypes = {
  setIsOpenModal: PropTypes.bool
}