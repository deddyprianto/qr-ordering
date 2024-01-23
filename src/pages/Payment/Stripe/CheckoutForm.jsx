import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { RenderButtonSubmit } from "./ButtonSubmit";
import { useEdgeSnack } from "../../../components/EdgeSnack/utils/useEdgeSnack";

export const RenderCheckoutPage = () => {
  const stripe = useStripe();
  const elements = useElements();
  const toast = useEdgeSnack();

  const handleSubmit = async(e) => {
    e.preventDefault();
    const {error} = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/ordersummary`,
      },
    });

    if (error)
      toast.open(error.message, 'error');
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
      <RenderButtonSubmit handleSubmit={handleSubmit}/>
    </form>
  )
}
