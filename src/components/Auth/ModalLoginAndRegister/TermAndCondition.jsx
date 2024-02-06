import PropTypes from "prop-types";
import { Trans } from "react-i18next";
import { useSelector } from "react-redux";

export const RenderTermAndCondition = ({ isChecked, handleCheckboxChange }) => {
  const { theme, outletDetail} = useSelector((state) => state.dataSlicePersisted);

  return (
    <div
      style={{
        alignItems: "start",
        alignSelf: "stretch",
        display: "flex",
        gap: "10px",
        marginTop: "16px",
      }}
    >
      <input
        type="checkbox"
        style={{
          width: "20px",
          height: "20px",
        }}
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <div
        style={{
          color: "var(--text-color-quaternary, #00524C)",
          letterSpacing: "0.28px",
          textDecorationLine: "underline",
          alignSelf: "stretch",
          flexGrow: "1",
          flexBasis: "auto",
          font: "500 14px/20px Helvetica Neue, sans-serif ",
        }}
      >
        <span style={{ color: "rgba(52,58,74,1" }}>
          <Trans i18nKey={"i_agree_to"} /> {outletDetail?.companyName}{" "}
        </span>
        <span style={{ color: theme.Color_Primary }}>
          <Trans i18nKey={"terms_and_conditions"} />{" "}
        </span>
        <span style={{ color: "rgba(52,58,74,1" }}>
          <Trans i18nKey={"and"} />{" "}
        </span>
        <span style={{ color: theme.Color_Primary }}>
          <Trans i18nKey={"privacy_policy"} />
        </span>
      </div>
    </div>
  );
};
  RenderTermAndCondition.propTypes = {
    isChecked: PropTypes.bool,
    handleCheckboxChange: PropTypes.func,
  };