import { useState } from "react";
import { IconDineIn, IconTakeAway } from "../../assets/svgIcon";
import { useDispatch, useSelector } from "react-redux";
import { setOrderType } from "../../app/dataSlicePersisted";
import { setServiceCharge } from "../../app/dataSlice";


export const RenderOrderType = () => {
  const dispatch = useDispatch();
  const [curOrderType, setCurOrderType] = useState("");
  const { outletSetting } = useSelector((state) => state.dataSlice);

  const handleSelectOrderType = (type, option) => {
    setCurOrderType(type);
    setTimeout(() => {
      dispatch(setOrderType(type));
      dispatch(setServiceCharge(option.serviceCharges));
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
        {(outletSetting.takeAwayOption?.enable || false) &&
          <button
            className={`${
              curOrderType == "takeaway" ? bgTypeSelected : bgTypeUnSelected
            } items-center self-stretch border flex flex-col mt-6 px-4 py-6 rounded-lg border-solid`}
            onClick={() => handleSelectOrderType("TAKEAWAY", outletSetting.takeAwayOption)}
          >
            <IconTakeAway />
            <div className="justify-center self-stretch text-gray-700 text-center text-2xl font-semibold leading-8 whitespace-nowrap mt-4">
              {outletSetting.takeAwayOption.displayName}
            </div>
          </button>
        }
        {(outletSetting.dineInOption?.enable || false) &&
          <button
            className={`${
              curOrderType == "dinein" ? bgTypeSelected : bgTypeUnSelected
            } justify-center items-center self-stretch border flex flex-col mt-6 px-4 py-6 rounded-lg border-solid`}
            onClick={() => handleSelectOrderType("DINEIN", outletSetting.dineInOption)}
          >
            <IconDineIn />
            <div className="justify-center self-stretch text-gray-700 text-center text-2xl font-semibold leading-8 whitespace-nowrap mt-4">
              {outletSetting.dineInOption.displayName}
            </div>
          </button>
        }
      </span>
    </div>
  );
}