import { useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { apiCart } from "../../../services/Cart";
import { NotFound } from "../NotFound";
import { SkeletonPaymentInput } from "../../../components/Skeleton/SkeletonPaymentInput";

export const Fomo = () => {
  const { paymentMethod } = useSelector((state) => state.dataSlice);
  const { cartInfo, theme } = useSelector((state) => state.dataSlicePersisted);
  const [loading, setLoading] = useState(true);
  const [paymentErrorMsg, setPaymentErrorMsg] = useState("");

  useEffect(() => {
    preparation.current();
  }, []);

  const preparation = useRef();
  preparation.current = () => {
    getFomoPaymentUrl();
  };

  const getFomoPaymentUrl = async () => {
    const params = new URLSearchParams(window.location.search);
    const queryStringGeneral = params.get("input");

    let body = {
      cartPaymentID: cartInfo.uniqueID,
      provider: paymentMethod.provider,
      paymentMode: paymentMethod.paymentMode,
      amount: cartInfo.subtotalSummary.NETT,
      returnURL: `${window.location.origin}/ordersummary?input=${queryStringGeneral}&cartID=${cartInfo.uniqueID}`,
      backURL: `${window.location.origin}/cart?input=${queryStringGeneral}&cartID=backToCart`,
    };
    try {
      setLoading(true);
      const result = await apiCart(
        "POST",
        `${cartInfo.uniqueID}/addpayment`,
        body,
        "addPayment",
      );
      if (result.resultCode === 200) {
        window.location.href = result.data.hostedPaymentURL;
      } 
      else {
        setPaymentErrorMsg(result.message);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      setPaymentErrorMsg("Something error while requesting the payment.");
      console.error("Error:", error);
    }
  };

  if (loading) return <SkeletonPaymentInput color={theme} />;
  else return <NotFound msg={paymentErrorMsg}/>;
};
