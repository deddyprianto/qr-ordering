import { Trans } from "react-i18next"

export const ButtomLabel = () => {
  return (
    <div
      style={{
        justifyContent: "center",
        alignSelf: "stretch",
        display: "flex",
        gap: "10px",
        padding: "8px 58px",
        marginTop: "16px",
      }}
    >
      <div
        style={{
          color: "var(--text-color-primary, #000)",
          textAlign: "center",
          letterSpacing: "0.28px",
          whiteSpace: "nowrap",
          font: "500 14px/20px Helvetica Neue, sans-serif ",
        }}
      >
        <Trans i18nKey={"didnt_receive_code?"}/>
      </div>
      <div
        style={{
          color: "var(--text-color-tertiary, #888787)",
          textAlign: "center",
          letterSpacing: "0.28px",
          whiteSpace: "nowrap",
          font: "500 14px/20px Helvetica Neue, sans-serif ",
        }}
      >
        <Trans i18n={"resend_otp_in"}/> 0:59
      </div>
    </div>
  )
}