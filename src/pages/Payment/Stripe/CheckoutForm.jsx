import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { RenderButtonSubmit } from "./ButtonSubmit";
import { useEdgeSnack } from "../../../components/EdgeSnack/utils/useEdgeSnack";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCartIdToShow } from "../../../app/dataSlicePersisted";

export const RenderCheckoutPage = () => {
  const stripe = useStripe();
  const elements = useElements();
  const toast = useEdgeSnack();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { cartInfo } = useSelector((state)=>state.dataSlicePersisted);

  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(setCartIdToShow(cartInfo?.uniqueID || ""));

    const {error} = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/ordersummary`,
      },
    });

    if (error){
      dispatch(setCartIdToShow(""));
      setLoading(false);
      toast.open(error.message, 'error');	      
    }
  }
  return (
    <form id={"payment-form"}>
      <PaymentElement options={{
          style: {
            base: {
              fontSize: '50px', // Adjust the font size as needed
            },
          },
        }}/>
      <RenderButtonSubmit handleSubmit={handleSubmit} loading={loading}/>
    </form>
  )
}
