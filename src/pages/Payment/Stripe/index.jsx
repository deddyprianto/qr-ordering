import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

import {RenderCheckoutPage} from './CheckoutForm';
import { useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { apiCart } from "../../../services/Cart";
import { NotFound } from "../NotFound";
import { SkeletonPaymentInput } from "../../../components/Skeleton/SkeletonPaymentInput";

export const Stripe = () => {
  const { paymentMethod } = useSelector((state) => state.dataSlice);
  const { cartInfo, theme } = useSelector((state) => state.dataSlicePersisted);
  const [stripePromise, setStripePromise] = useState();
  const [options, setOptions] = useState({});
  const [loading, setLoading] = useState(true);
  const [failedRender, setFailedRender] = useState(false);
  const [paymentErrorMsg, setPaymentErrorMsg] = useState("");

  useEffect(() => {
    preparation.current();
  }, []);

  const preparation = useRef();
  preparation.current = () => {
    loadStripeByPubishableKey();
    getPublishableKey();
  };

  const loadStripeByPubishableKey = () => {
    for (const setting of paymentMethod.settings) {
      if (setting.settingName?.toLowerCase() == "publishablekey") {
        setStripePromise(loadStripe(setting.settingValue));
        break;
      }
    }
  };

  const getPublishableKey = async () => {
    try {
      let body = {
        cartPaymentID: cartInfo.uniqueID,
        provider: paymentMethod.provider,
        amount: cartInfo.nettAmount,
        paymentMode: paymentMethod.paymentMode,
      };
      const result = await apiCart(
        "POST",
        `${cartInfo.uniqueID}/addpayment`,
        body,
      );
      if (result.resultCode == 200) {
        setOptions({
          clientSecret: result.data?.referenceNo,
        });
      } else {
        setFailedRender(true);
        setPaymentErrorMsg(result.message);
      }
      setLoading(false);
    } catch (error) {
      setFailedRender(true);
      console.log(error);
    }
  };

  if (loading) return <SkeletonPaymentInput color={theme} />;
  else if (failedRender) return <NotFound msg={paymentErrorMsg}/>;
  else {
    return (
      <Elements stripe={stripePromise} options={options}>
        <RenderCheckoutPage />
      </Elements>
    );
  }
};
