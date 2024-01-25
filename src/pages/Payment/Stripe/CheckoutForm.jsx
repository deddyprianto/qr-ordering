import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { RenderButtonSubmit } from "./ButtonSubmit";
import { useEdgeSnack } from "../../../components/EdgeSnack/utils/useEdgeSnack";
import { useState } from "react";

export const RenderCheckoutPage = () => {
  const stripe = useStripe();
  const elements = useElements();
  const toast = useEdgeSnack();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);
    const {error} = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/ordersummary`,
      },
    });

    if (error){
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
