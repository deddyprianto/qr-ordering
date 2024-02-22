import { useDispatch, useSelector } from "react-redux";
import { OrderInformation } from "./OrderInformation";
import { OrderItemSummary } from "./OrderItemSummary";
import { useEffect, useRef, useState } from "react";
import { apiOrder } from "../../services/Order";
import { setIsDataOrder } from "../../app/dataSlice";
import { SkeletonSummaryPage } from "../../components/Skeleton/SkeletonSummaryPage";
import PaymentComplete from "../../assets/PaymentComplete.gif";
import Cancelled from "../../assets/Cancelled.gif";
import Completed from "../../assets/Completed.gif";
import Success from "../../assets/Success.gif";

export function Component() {
  const dispatch = useDispatch();

  const { cartIdToShow } = useSelector((state) => state.dataSlicePersisted);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState({});

  const fetchData = useRef();
  fetchData.current = async () => {
    try {
      const result = await apiOrder("GET", cartIdToShow, {});
      if (result.resultCode === 200) {
        dispatch(setIsDataOrder(true));
        setOrder(result.data);
        setLoading(false);
      } else {
        throw result.message;
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData.current();
  }, []);

  let message;
  if (order.status === "PAYMENT_COMPLETED") {
    message = "Please wait... we are placing your order. Don’t close the page.";
  } else if (order.status === "PROCESSING") {
    message = "Your order successfully sent to our kitchen";
  } else if (order.status === "CANCELLED") {
    message = "Your order has been cancelled.";
  } else {
    message = "Your order has been successfully completed.";
  }

  let imageIconSrc;
  if (order.status === "PAYMENT_COMPLETED") {
    imageIconSrc = PaymentComplete;
  } else if (order.status === "PROCESSING") {
    imageIconSrc = Success;
  } else if (order.status === "CANCELLED") {
    imageIconSrc = Cancelled;
  } else {
    imageIconSrc = Completed;
  }

  let backgroundColorCustom;
  if (order.status === "PAYMENT_COMPLETED") {
    backgroundColorCustom = "#FFF2DF";
  } else if (order.status === "PROCESSING") {
    backgroundColorCustom = "#CEFFDD";
  } else if (order.status === "CANCELLED") {
    backgroundColorCustom = "#FFC7CC";
  } else {
    backgroundColorCustom = "#8BCC71";
  }

  return (
    <div className="p-[16px]">
      {loading ? (
        <SkeletonSummaryPage />
      ) : (
        <>
          <div
            className="flex justify-center items-center rounded-lg"
            style={{ backgroundColor: backgroundColorCustom }}
          >
            <div>
              <img src={imageIconSrc} alt="success" />
            </div>
            <div>
              <div className="text-center">{message}</div>
            </div>
          </div>

          <OrderInformation order={order} />
          <OrderItemSummary order={order} />
        </>
      )}
    </div>
  );
}
