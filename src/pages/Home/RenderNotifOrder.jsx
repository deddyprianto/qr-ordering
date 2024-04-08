import { useDispatch, useSelector } from "react-redux";
import {
  IconArrowRight,
  IconCheckFill,
  IconClose,
  TaskListIcon,
} from "../../assets/svgIcon";
import { useEffect, useRef, useState } from "react";
import { apiOrder } from "../../services/Order";
import { Trans } from "react-i18next";
import { dateFormatter } from "../../components/Order/DateFormatter";
import { statusText } from "../../components/Order/StatusText";
import { setCartIdToShow, setOrderStatus } from "../../app/dataSlicePersisted";
import { useUpdateURLWithQueryParams } from "../../../hooks/usePathCustom";

export function RenderNotificationOrder() {
  const updateURL = useUpdateURLWithQueryParams();
  const { theme, orderStatus } = useSelector(
    (state) => state.dataSlicePersisted,
  );
  const [isExist, setIsExist] = useState(false);
  const dispatch = useDispatch();

  const fetchLatestOrder = useRef();
  fetchLatestOrder.current = async () => {
    try {
      let body = {
        search: "",
        skip: 0,
        take: 1,
        sortBy: "orderDate",
        isDescending: true,
      };

      const result = await apiOrder("GET", "", body);
      if (result.resultCode === 200) {
        dispatch(setOrderStatus(result.data[0]));
        setIsExist(true);
      } else {
        throw result.message;
      }
      setTimeout(() => {
        if(window.location.pathname?.toLocaleLowerCase() != "/")
          return;
        else if(!result.data[0] || result.data[0]?.status == "COMPLETED" || result.data[0]?.status == "CANCELLED")
          return
          fetchLatestOrder.current();
      }, 10000);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchLatestOrder.current();
  }, []);

  const handleClickViewDetail = () => {
    dispatch(setCartIdToShow(orderStatus?.cartID || ""));
    updateURL("/ordersummary");
  };

  if (isExist)
    return (
      <div
        id="notificationOrder"
        className="items-stretch self-stretch bg-orange-100 flex w-full flex-col p-2 rounded-2xl"
      >
        <div className="justify-between items-stretch flex w-full gap-5">
          <div className="items-center flex justify-between gap-2 p-0.5">
            <TaskListIcon color="black" />
            <div className="text-gray-700 text-sm font-bold leading-5 tracking-wide grow whitespace-nowrap">
              <Trans i18nKey={"latest_order"} />
            </div>
          </div>
          <button
            className="text-pink-500 text-sm font-bold leading-5 tracking-wide self-center my-auto"
            onClick={() => updateURL("/order")}
          >
            <Trans i18nKey={"view_all"} />
          </button>
        </div>
        {/* RESTRICTION */}
        <div className="justify-between items-stretch bg-white flex w-full gap-5 mt-2 px-4 py-2 rounded-[1000px]">
          <div className="justify-center items-stretch flex grow basis-[0%] flex-col">
            <div className="text-gray-700  text-base font-bold leading-6 whitespace-nowrap">
              {orderStatus?.orderHdrID}
            </div>
            <div className="flex gap-x-2">
              <div className="text-gray-700  text-sm font-medium leading-5 tracking-wide  whitespace-nowrap">
                {dateFormatter(orderStatus?.orderDate)}
              </div>
            </div>
          </div>
          <button
            onClick={handleClickViewDetail}
            className="items-stretch self-center flex gap-0 my-auto"
          >
            <div
              className={`items-center ${
                orderStatus?.status === "CANCELLED"
                  ? "bg-[#CF3030]"
                  : "bg-green-700"
              }  flex gap-1 py-1 rounded-2xl px-1`}
            >
              <div>
                {orderStatus?.status === "CANCELLED" ? (
                  <IconClose color="white" />
                ) : (
                  <IconCheckFill />
                )}
              </div>
              <div className="text-white text-xs font-medium leading-4">
                {statusText(orderStatus?.status)}
              </div>
            </div>
            <div className="flex justify-start items-center">
              <IconArrowRight color={theme.Color_Secondary} />
            </div>
          </button>
        </div>
      </div>
    );
}
