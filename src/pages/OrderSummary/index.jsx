import { useDispatch, useSelector } from "react-redux";
import { OrderInformation } from "./OrderInformation";
import { OrderItemSummary } from "./OrderItemSummary";
import { useEffect, useRef, useState } from "react";
import { apiOrder } from "../../services/Order";
import { SkeletonSummaryPage } from "../../components/Skeleton/SkeletonSummaryPage";
import PaymentComplete from "../../assets/PaymentComplete.gif";
import Success from "../../assets/Success.gif";
import {
  setCartIdToShow,
  setCartInfo,
  setIsDataOrder,
  setOrderType,
  updateCartToListen,
} from "../../app/dataSlicePersisted";
import { startListeningInterval } from "../../helper/fetchOrderStatus";

export function Component() {
  const dispatch = useDispatch();

  const { cartIdToShow } = useSelector((state) => state.dataSlicePersisted);

  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState({});

  const fetchData = useRef();
  fetchData.current = async () => {
    const params = new URLSearchParams(window.location.search);
    const cartParamsIsExist = params.get("cartID");

    if (params.has("cartID")) {
      dispatch(setCartIdToShow(cartParamsIsExist || ""));
      dispatch(
        updateCartToListen({
          cartID: cartParamsIsExist,
          status: "PENDING",
        }),
      );
      dispatch(setOrderType(""));
      dispatch(setCartInfo({}));
      startListeningInterval(cartParamsIsExist, dispatch);
    }
    const cartIDInfo = cartParamsIsExist || cartIdToShow;
    try {
      setLoading(true);
      const result = await apiOrder("GET", cartIDInfo, {});
      setLoading(false);
      if (result.resultCode === 200) {
        dispatch(setIsDataOrder(true));
        setOrder(result.data);
        setLoading(false);
      } else {
        throw result.message;
      }

      setTimeout(() => {
        if (window.location.pathname?.toLocaleLowerCase() != "/ordersummary")
          return;
        else if (
          !result?.data ||
          order.status == "COMPLETED" ||
          order.status == "CANCELLED"
        )
          return;
        setLoading(true);
        fetchData.current();
      }, 5000);
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
    message = "You have received your items.";
  }

  let imageIconSrc;
  if (order.status === "PAYMENT_COMPLETED") {
    imageIconSrc = PaymentComplete;
  } else if (order.status === "PROCESSING") {
    imageIconSrc = Success;
  } else if (order.status === "CANCELLED") {
    imageIconSrc = null;
  } else {
    imageIconSrc = null;
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
              {imageIconSrc && (
                <img
                  style={{ width: "54px", height: "54px" }}
                  src={imageIconSrc}
                  alt="success"
                />
              )}
            </div>
            <div>
              <div className={`text-center ${!imageIconSrc && "p-[16px]"}`}>
                {message}
              </div>
            </div>
          </div>

          <OrderInformation order={order} />
          <OrderItemSummary order={order} />
        </>
      )}
    </div>
  );
}
