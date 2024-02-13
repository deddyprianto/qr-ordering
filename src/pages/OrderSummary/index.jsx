import { useDispatch, useSelector } from "react-redux";
import { OrderInformation } from "./OrderInformation";
import { OrderItemSummary } from "./OrderItemSummary";
import { useEffect, useRef, useState } from "react";
import { apiOrder } from "../../services/Order";
import { setIsDataOrder } from "../../app/dataSlice";
import { SkeletonSummaryPage } from "../../components/Skeleton/SkeletonSummaryPage";

export function Component() {
  const dispatch = useDispatch();

  const { theme, cartIdToShow } = useSelector(
    (state) => state.dataSlicePersisted,
  );
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

  return (
    <div className="p-[16px]">
      {loading ? (
        <SkeletonSummaryPage />
      ) : (
        <>
          <div
            style={{
              backgroundColor:
                order.status == "PROCESSING" ? theme.Color_Accent : "#CEFFDD",
            }}
            className="rounded-lg p-[16px]"
          >
            <div className="text-center">
              {order.status == "PROCESSING"
                ? "Please wait... we are placing your order. Don’t close the page."
                : "successfully sent to our kitchen"}
            </div>
          </div>
          <OrderInformation order={order} />
          <OrderItemSummary order={order} />
        </>
      )}
    </div>
  );
}
