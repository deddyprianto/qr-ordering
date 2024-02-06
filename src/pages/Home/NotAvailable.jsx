import { Trans } from "react-i18next";
import image from "../../assets/outlet_closed.png"
import PropTypes from "prop-types"
import { useSelector } from "react-redux";
import { timeParser } from "../../components/Home/timeParser";

export const NotAvailable = ({isOutsideOperational}) => {
  const { outletDetail } = useSelector(
    (state) => state.dataSlicePersisted,
  );

  return (
    <div className="justify-center items-center flex w-full flex-col px-6">
      <img
        alt={"itemNotFound"}
        loading="lazy"
        src={image}
        className="aspect-square object-contain object-center w-[246px] overflow-hidden self-center max-w-full"
      />
      <div className="text-black text-center text-base font-bold self-center whitespace-nowrap mt-6">
        <Trans i18nKey={"outlet_not_available"} />
      </div>
      <div className="text-black text-center text-sm font-medium mt-1">
        {isOutsideOperational
          ?<Trans i18nKey={"msg_outlet_out_of_operational_hours"} />
          :<Trans i18nKey={"msg_outlet_not_available"} />
        }
      </div>
      {(isOutsideOperational || false) &&
      <div className="bg-orange-100 flex w-[80%] flex-col pb-2 px-4 rounded-2xl mt-6">
        <div className="text-black text-center text-sm font-bold self-center whitespace-nowrap mt-2 mb-2">
          {outletDetail?.companyName} @ {outletDetail?.outletName}<br/>
          <Trans i18nKey={"operational_hours"} />
        </div>
        {outletDetail?.outletOperationalHours?.map((obj)=>{
          return (
            <div className="flex w-full justify-between gap-5 mt-1.5 items-start" key={`${obj.day}${obj.startHour}${obj.endHour}`}>
              <div className="items-stretch flex gap-1">
                {obj.day}
              </div>
              <div className="items-stretch flex gap-1">
                {timeParser(obj.startHour)} - {timeParser(obj.endHour)}
              </div>
            </div>
          )
        })}
      </div>}
    </div>
  );
}

NotAvailable.propTypes = {
  isOutsideOperational: PropTypes.bool
}