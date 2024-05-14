import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { RenderButtonSubmit } from "./ButtonSubmit";
import { useEdgeSnack } from "../../../components/EdgeSnack/utils/useEdgeSnack";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCartIdToShow, setCartInfo, updateCartToListen } from "../../../app/dataSlicePersisted";
import { useUpdateURLWithQueryParams } from "../../../../hooks/usePathCustom";
import { startListeningInterval } from "../../../helper/fetchOrderStatus";

export const RenderCheckoutPage = () => {
  const stripe = useStripe();
  const elements = useElements();
  const toast = useEdgeSnack();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState  (false);
  const { cartInfo } = useSelector((state) => state.dataSlicePersisted);
  const updateURL = useUpdateURLWithQueryParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: "",
        },
        redirect: "if_required",
      });

      if (error) {
        throw error;
      } else {
        dispatch(setCartIdToShow(cartInfo?.uniqueID || ""));
        dispatch(
          updateCartToListen({
            cartID: cartInfo?.uniqueID,
            status: "PENDING",
          }),
        );
        dispatch(setCartInfo({}));
        startListeningInterval(cartInfo?.uniqueID, dispatch);
        updateURL("/ordersummary");
      }
    } catch (error) {
      console.log(error);
      toast.open("Payment failed. Please try again later.", "error");
      setLoading(false);
    }
  };
  return (
    <form id={"payment-form"}>
      <PaymentElement
        options={{
          style: {
            base: {
              fontSize: "50px", // Adjust the font size as needed
            },
          },
        }}
      />
      <RenderButtonSubmit handleSubmit={handleSubmit} loading={loading} />
    </form>
  );
};
