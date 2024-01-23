import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

import {RenderCheckoutPage} from './CheckoutForm';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { apiCart } from '../../../services/Cart';
import { ParentBlur } from '../../../components/ParentBlur';
import { useEdgeSnack } from '../../../components/EdgeSnack/utils/useEdgeSnack';
import { NotFound } from '../NotFound';

export const Stripe = () => {
  const { paymentMethod } = useSelector((state)=>state.dataSlice);
  const { cartInfo } = useSelector((state)=>state.dataSlicePersisted);
  const [stripePromise, setStripePromise] = useState();
  const [options, setOptions] = useState({});
  const [loading, setLoading] = useState(true);
  const [failedRender, setFailedRender] = useState(false);
  const toast = useEdgeSnack();

  useEffect(()=>{
    loadStripeByPubishableKey();
    getPublishableKey();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const loadStripeByPubishableKey = () => {
    for(const setting of paymentMethod.settings){
      if(setting.settingName?.toLowerCase() == 'publishablekey'){
        setStripePromise(loadStripe(setting.settingValue))
        break;
      }
    }
  }

  const getPublishableKey = async() => {
    try {
      let body = {
        cartPaymentID: cartInfo.uniqueID,
        provider: paymentMethod.provider,
        amount: cartInfo.nettAmount,
        paymentMode: paymentMethod.paymentMode,
      }
      const result = await apiCart("POST", `${cartInfo.uniqueID}/addpayment`, body);
      if(result.resultCode == 200){
        setOptions({
          clientSecret: result.data?.referenceNo
        });
      }
      else {
        setFailedRender(true);
        toast.open(result.message, 'error');
      }
      setLoading(false);
    } catch (error) {
      setFailedRender(true);
      console.log(error)
    }
  }

  if(loading) return <ParentBlur/>
  else if(failedRender) return <NotFound/>
  else {
    return (
      <Elements stripe={stripePromise} options={options}>
        <RenderCheckoutPage />
      </Elements>
    );
  }
};
