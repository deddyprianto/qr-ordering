import { useSelector } from "react-redux";
import { Stripe } from "./Stripe";
import { NotFound } from "./NotFound";

export function Component() {
  const { paymentMethod } = useSelector((state)=>state.dataSlice);

  const renderPaymentElement = () => {
    switch (paymentMethod.provider?.toLowerCase()) {
      case 'stripe':
        return <Stripe/>
      case 'fomo':
        return <></>
      default:
        return <NotFound/>
    }
  }

  return (
    <div className="p-[16px]">
      {renderPaymentElement()}
    </div>
  );
}
