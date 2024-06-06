import { useSelector } from "react-redux";
import screen from "../../../hooks/useWindowSize";
import { numberFormatter } from "../../utilities/numberFormatter";
import { Trans } from "react-i18next";
import { useEdgeSnack } from "../../components/EdgeSnack/utils/useEdgeSnack";
import { useUpdateURLWithQueryParams } from "../../../hooks/usePathCustom";
import PropTypes from "prop-types"

const FooterCart = ({ isItemExist }) => {
  const updateURL = useUpdateURLWithQueryParams();

  const { cartInfo } = useSelector((state) => state.dataSlicePersisted);
  const theme = useSelector((state) => state.dataSlicePersisted.theme);
  const { paymentMethod } = useSelector((state) => state.dataSlice);

  const toast = useEdgeSnack();

  const { width } = screen();

  const gadgetScreen = width < 980;

  const isPaymentMethodSelected = () => {
    return Object.keys(paymentMethod).length > 0;
  };

  const handlePayment = async () => {
    if (!isPaymentMethodSelected()) {
      toast.open("Please select your prefered payment method", "error");
      return;
    }

    updateURL("/payment");
  };
    
  return (
    <footer
      className={`fixed bottom-0 left-0 bg-white text-center rounded-t-2xl p-[16px] ${
        gadgetScreen ? "w-full" : "w-[45%] left-[50%] translate-x-[-50%]"
      }`}
      style={{
        boxShadow: "0px -4px 10px 0px rgba(0, 0, 0, 0.10)",
      }}
    >
      <button
        id="buttonFooterCart"
        disabled={!isPaymentMethodSelected() || !isItemExist}
        onClick={handlePayment}
        style={{ backgroundColor: theme.Color_Secondary }}
        className={`py-[10px] px-[20px]  text-white rounded-lg cursor-pointer text-[16px] w-full ${
          !isPaymentMethodSelected() || !isItemExist
            ? "opacity-50"
            : "cursor-pointer"
        }`}
      >
        <Trans i18nKey={"pay"} /> - ${" "}
        {numberFormatter(cartInfo?.subtotalSummary?.NETT)}
      </button>
    </footer>
  );
};

FooterCart.propTypes = {
  isItemExist: PropTypes.bool
}
export default FooterCart;
