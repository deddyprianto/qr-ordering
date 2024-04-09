import { useEffect, useRef, useState } from "react";
import ItemOrder from "./ItemOrder";
import { apiOrder } from "../../services/Order";
import { SkeletonSummaryPage } from "../../components/Skeleton/SkeletonSummaryPage";


export function Component() {
  const [orderHistory, setOrderHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrderHistory = useRef();
  fetchOrderHistory.current = async () => {
    try {
      let body = {
        search: "",
        skip: 0,
        take: 99999,
        sortBy: "orderDate",
        isDescending: false,
      };
      const result = await apiOrder("GET", "", body);
      if (result.resultCode === 200) {
        setOrderHistory(result.data);
        setLoading(false);
      } else {
        throw result.message;
      }
      setTimeout(() => {
        if(window.location.pathname?.toLocaleLowerCase() != "/order")
          return;
        for(const dt of result.data){
          if(dt?.status != "COMPLETED" && dt?.status != "CANCELLED"){
            fetchOrderHistory.current();
            return;
          }
        }
      }, 10000);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchOrderHistory.current();
  }, []);
  return (
    <div className="p-[16px]">
      {loading ? (
        <SkeletonSummaryPage />
      ) : (
        <>
          {orderHistory.map((order) => {
            return <ItemOrder key={order.cartID} order={order} />;
          })}
        </>
      )}
    </div>
  );
}
