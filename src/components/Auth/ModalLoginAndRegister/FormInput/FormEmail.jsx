import { Trans } from "react-i18next"
import { RenderFlagMandatory } from "../../../FlagMandatory"
import { RenderInputFieldCustom } from "../../../InputFieldCustom"
import PropTypes from "prop-types"

export const FormEmail = ({setEmailField}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "start",
        flexDirection: "column",
        marginTop: "16px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "start",
          gap: "4px",
          padding: "0px",
        }}
      >
        <div
          style={{
            font: "500 14px/20px Helvetica Neue, sans-serif ",
            letterSpacing: "0.28px",
            whiteSpace: "nowrap",
            color: "var(--text-color-primary, #343A4A)",
          }}
        >
          <Trans i18nKey={"email"}/>
        </div>
        <RenderFlagMandatory/>
      </div>
      <RenderInputFieldCustom
          label={"Email"}
          type={"email"}
          setField={setEmailField}
      />
    </div>
  )
}

FormEmail.propTypes = {
  setEmailField: PropTypes.func
}