import { Trans } from "react-i18next"
import { RenderFlagMandatory } from "../../../FlagMandatory"
import { RenderInputFieldCustom } from "../../../InputFieldCustom"
import PropTypes from "prop-types"

export const FormName = ({setNameField}) => {
  return (
    <div
      style={{
        alignItems: "start",
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "column",
        marginTop: "16px",
      }}
    >
      <div
        style={{
          alignItems: "start",
          display: "flex",
          gap: "4px",
          padding: "0px",
        }}
      >
        <div
          style={{
            color: "var(--text-color-primary, #343A4A)",
            letterSpacing: "0.28px",
            whiteSpace: "nowrap",
            font: "500 14px/20px Helvetica Neue, sans-serif ",
          }}
        >
          <Trans i18nKey={"name"} />
        </div>
        <RenderFlagMandatory />
      </div>
      <RenderInputFieldCustom
        label={"Name"}
        type={"text"}
        setField={setNameField}
      />
    </div>
  )
}

FormName.propTypes = {
  setNameField: PropTypes.func
}