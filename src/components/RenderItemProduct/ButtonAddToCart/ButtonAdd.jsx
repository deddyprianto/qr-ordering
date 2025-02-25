import { Trans } from "react-i18next"
import { IconPlus } from "../../../assets/svgIcon"
import PropTypes from 'prop-types'
import { useSelector } from "react-redux";

export const RenderButtonAdd = ({ isLoading, handleClickButtonAdd, id }) => {
  const { theme, outletDetail } = useSelector(
    (state) => state.dataSlicePersisted,
  );
  return (
    <button
      id="idItem"
      data-id={id}
      style={{
        display:
          outletDetail?.qrOrderingAvailability === "Hidden" ? "none" : "flex",
        justifyContent: "center",
        borderRadius: "8px",
        backgroundColor: theme.Color_Secondary,
        marginTop: "8px",
        gap: "5px",
        padding: "5px 16px",
        alignItems: "center",
        width: "100%",
        filter: isLoading ? "blur(1px)" : "",
      }}
      disabled={isLoading}
      onClick={() => handleClickButtonAdd(1)}
    >
      <IconPlus />
      <div
        style={{
          color: "var(--white, #FFF)",
          font: "700 12px/17px Helvetica Neue, sans-serif ",
          marginTop: "3px",
        }}
      >
        <Trans i18nKey={"add"} />
      </div>
    </button>
  );
};
RenderButtonAdd.propTypes = {
  isLoading: PropTypes.bool,
  handleClickButtonAdd: PropTypes.func,
  id: PropTypes.string,
};