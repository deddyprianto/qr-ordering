import PropTypes from "prop-types"
import { Trans } from "react-i18next";
import { useSelector } from "react-redux";
import screen from "../../../../hooks/useWindowSize";

export const RenderButtonSubmit = ({handleSubmit, loading}) => {
  const { width } = screen();
  const { theme } = useSelector((state) => state.dataSlicePersisted);
  
  return (
    <footer
      className={`fixed bottom-0 left-0 bg-white text-center rounded-t-2xl p-[16px] ${
        width < 980 ? "w-full" : "w-[45%] left-[50%] translate-x-[-50%]"
      }`}
      style={{
        boxShadow: "0px -4px 10px 0px rgba(0, 0, 0, 0.10)",
      }}
    >
      <button
        onClick={handleSubmit}
        style={{ backgroundColor: theme.Color_Secondary }}
        className={`py-[10px] px-[20px]  text-white rounded-lg cursor-pointer text-[16px] w-full ${loading?"opacity-50":"cursor-pointer"}`}
      >
        {loading?<><Trans i18nKey={"processing"}/>...</>:<Trans i18nKey={"submit"}/>}
      </button>
    </footer>
  );
}

RenderButtonSubmit.propTypes = {
  handleSubmit: PropTypes.func,
  loading: PropTypes.bool
}