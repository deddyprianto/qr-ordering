import { useState } from "react";
import { IconDineIn, IconTakeAway } from "../../assets/svgIcon";
import { useDispatch } from "react-redux";
import { setOrderType } from "../../app/dataSlice";

export const RenderOrderType = () => {
  const dispatch = useDispatch();
  const [curOrderType, setCurOrderType] = useState("");

  const handleSelectOrderType = (type) => {
    setCurOrderType(type);
    setTimeout(() => {
      dispatch(setOrderType(type));
    }, 100);
  }
  const bgTypeSelected = "border-[color:var(--Brand-color-Primary,#00524C)] bg-orange-100"
  const bgTypeUnSelected = "border-[color:var(--Grey-Scale-color-Grey-Scale-3,#D6D6D6)]"
  
  return (
    <div className="bg-white h-full w-full">
      <span className="justify-center items-center flex w-full flex-col px-4">
        <div className="text-black text-center text-2xl font-semibold leading-8 whitespace-nowrap">
          How Would You Like to Order?
        </div>
        <button className={`${curOrderType=="takeaway"?bgTypeSelected:bgTypeUnSelected} items-center self-stretch border flex flex-col mt-6 px-4 py-6 rounded-lg border-solid`}
          onClick={()=>handleSelectOrderType('takeaway')}  
        >
          <IconTakeAway/>
          <div className="justify-center self-stretch text-gray-700 text-center text-2xl font-semibold leading-8 whitespace-nowrap mt-4">
            Takeaway
          </div>
        </button>
        <button className={`${curOrderType=="dinein"?bgTypeSelected:bgTypeUnSelected} justify-center items-center self-stretch border flex flex-col mt-6 px-4 py-6 rounded-lg border-solid`}
          onClick={()=>handleSelectOrderType('dinein')}  
        >
          <IconDineIn/>
          <div className="justify-center self-stretch text-gray-700 text-center text-2xl font-semibold leading-8 whitespace-nowrap mt-4">
            Dine In
          </div>
        </button>
      </span>
    </div>
  );
}