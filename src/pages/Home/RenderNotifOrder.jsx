import { useSelector } from "react-redux";
import {
  IconArrowRight,
  IconCheckFill,
  TaskListIcon,
} from "../../assets/svgIcon";

export function RenderNotificationOrder() {
  const { theme } = useSelector((state) => state.dataSlice);
  return (
    <div className="items-stretch self-stretch bg-orange-100 flex w-full flex-col p-2 rounded-2xl">
      <div className="justify-between items-stretch flex w-full gap-5">
        <div className="items-center flex justify-between gap-2 p-0.5">
          <TaskListIcon color="black" />
          <div className="text-gray-700 text-sm font-bold leading-5 tracking-wide grow whitespace-nowrap">
            Latest Orders
          </div>
        </div>
        <div className="text-pink-500 text-sm font-bold leading-5 tracking-wide self-center my-auto">
          View All
        </div>
      </div>
      {/* RESTRICTION */}
      <div className="justify-between items-stretch bg-white flex w-full gap-5 mt-2 px-4 py-2 rounded-[1000px]">
        <div className="justify-center items-stretch flex grow basis-[0%] flex-col">
          <div className="text-gray-700  text-base font-bold leading-6 whitespace-nowrap">
            OR23120600790001
          </div>
          <div className="flex gap-x-2">
            <div className="text-gray-700  text-sm font-medium leading-5 tracking-wide  whitespace-nowrap">
              07-12-2023
            </div>
            <div className="text-gray-700 text-sm font-medium leading-5 tracking-wide  whitespace-nowrap">
              08:26
            </div>
          </div>
        </div>
        <div className="items-stretch self-center flex gap-0 my-auto">
          <div className="items-stretch bg-green-700 flex justify-between gap-1 px-1.5 py-1 rounded-[100px]">
            <IconCheckFill />
            <div className="text-white text-xs font-medium leading-4 tracking-wide self-center grow whitespace-nowrap my-auto">
              CONFIRMED
            </div>
          </div>
          <IconArrowRight color={theme.secondary} />
        </div>
      </div>
    </div>
  );
}
