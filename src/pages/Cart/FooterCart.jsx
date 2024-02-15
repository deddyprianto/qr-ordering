import { useSelector } from "react-redux";
import screen from "../../../hooks/useWindowSize";
import { useLocation } from "react-router-dom";
import { numberFormatter } from "../../utilities/numberFormatter";
import { Trans } from "react-i18next";
import { useEdgeSnack } from "../../components/EdgeSnack/utils/useEdgeSnack";
import { useUpdateURLWithQueryParams } from "../../../hooks/usePathCustom";

const FooterCart = () => {
  const { search } = useLocation();
  const updateURL = useUpdateURLWithQueryParams();

  const { cartInfo } = useSelector((state) => state.dataSlicePersisted);

  const { paymentMethod } = useSelector((state) => state.dataSlice);
  const toast = useEdgeSnack();

  const { width } = screen();

  const gadgetScreen = width < 980;

  const isPaymentMethodSelected = () => {
    return Object.keys(paymentMethod).length > 0;
  };

  const handlePayment = () => {
    if (!isPaymentMethodSelected()) {
      toast.open("Please select your prefered payment method", "error");
      return;
    }
    updateURL("/payment", search);
  };

  const theme = useSelector((state) => state.dataSlicePersisted.theme);
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
        disabled={!isPaymentMethodSelected()}
        onClick={handlePayment}
        style={{ backgroundColor: theme.Color_Secondary }}
        className={`py-[10px] px-[20px]  text-white rounded-lg cursor-pointer text-[16px] w-full ${
          !isPaymentMethodSelected() ? "opacity-50" : "cursor-pointer"
        }`}
      >
        <Trans i18nKey={"pay"} /> - $ {numberFormatter(cartInfo?.nettAmount)}
      </button>
    </footer>
  );
};

export default FooterCart;
