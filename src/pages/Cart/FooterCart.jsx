import { useSelector } from "react-redux";
import screen from "../../../hooks/useWindowSize";
import { numberFormatter } from "../../utilities/numberFormatter";
import { Trans } from "react-i18next";
import { useEdgeSnack } from "../../components/EdgeSnack/utils/useEdgeSnack";
import { useUpdateURLWithQueryParams } from "../../../hooks/usePathCustom";
import PropTypes from "prop-types"
import { apiCart } from "../../services/Cart";
import { useState } from "react";
import OverlayLoading from "./OverlayLoading";

const FooterCart = ({ isItemExist }) => {
  const [isLoading, setIsLoading] = useState(false);
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
    const params = new URLSearchParams(window.location.search);
    const queryStringGeneral = params.get("input");
    if (!isPaymentMethodSelected()) {
      toast.open("Please select your prefered payment method", "error");
      return;
    }
    if (paymentMethod.provider?.toLowerCase() === "fomo") {
      let body = {
        cartPaymentID: cartInfo.uniqueID,
        provider: paymentMethod.provider,
        paymentMode: paymentMethod.paymentMode,
        amount: cartInfo.subtotalSummary.NETT,
        returnURL: `https://edgecafetraining.qro-dev.equipweb.biz/ordersummary/?input=${queryStringGeneral}&cartID=${cartInfo.uniqueID}`,
        backURL: `https://edgecafetraining.qro-dev.equipweb.biz/cart/?input=${queryStringGeneral}&cartID=backToCart`,
      };
      try {
        setIsLoading(true);
        const result = await apiCart(
          "POST",
          `${cartInfo.uniqueID}/addpayment`,
          body,
          "addPayment",
        );
        setIsLoading(false);
        if (result.resultCode === 200) {
          window.location.href = result.data.hostedPaymentURL;
        } else {
          toast.open(result.message, "error");
        }
      } catch (error) {
        console.error("Error:", error);
      }

      return;
    }

    updateURL("/payment");
  };

  if (isLoading) {
    return <OverlayLoading />;
  } else {
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
  }
};

FooterCart.propTypes = {
  isItemExist: PropTypes.bool
}
export default FooterCart;
