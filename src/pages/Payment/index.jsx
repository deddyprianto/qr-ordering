import { useSelector } from "react-redux";
import { Stripe } from "./Stripe";
import { NotFound } from "./NotFound";
import { Fomo } from "./Fomo";

export function Component() {
  const { paymentMethod } = useSelector((state) => state.dataSlice);


  const renderPaymentElement = () => {
    switch (paymentMethod.provider?.toLowerCase()) {
      case "stripe":
        return <Stripe />;
      case "fomo":
        return <Fomo />;
      default:
        return <NotFound msg={"No payment mode selected."}/>;
    }
  };

  return <div className="p-[16px]">{renderPaymentElement()}</div>;
}
