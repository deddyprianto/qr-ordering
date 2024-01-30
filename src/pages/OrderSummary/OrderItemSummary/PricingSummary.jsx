import PropTypes from "prop-types"
import { Trans } from "react-i18next"
import { numberFormatter } from "../../../utilities/numberFormatter"

export const RenderPricingSummary = ({ order }) => {
  return (
    <>
      <div className="items-stretch flex justify-between gap-4 mt-4 px-4">
        <div className="justify-center text-gray-700 text-sm font-medium leading-5 tracking-wide grow whitespace-nowrap">
          <Trans i18nKey={"subtotal"}/>
        </div>
        <div className="text-gray-700 text-right text-base font-bold leading-6 whitespace-nowrap">
          $ {numberFormatter(order.grossAmount)}
        </div>
      </div>
      {order.gstAmount>0 &&
        <div className="items-stretch flex justify-between gap-4 mt-2 px-4">
          <div className="justify-center text-gray-700 text-sm font-medium leading-5 tracking-wide grow whitespace-nowrap">
            GST X%
          </div>
          <div className="text-gray-700 text-right text-base font-bold leading-6 whitespace-nowrap">
            $ {numberFormatter(order.gstAmount)}
          </div>
        </div>
      }
      
      <div className="bg-zinc-300 min-h-[1px] w-full mt-4" />
      <div className="justify-between flex w-full gap-5 mt-4 px-4 items-start">
        <div className="text-gray-700 text-sm font-medium leading-5 tracking-wide">
          <Trans i18nKey={"total_payment"}/>
        </div>
        <div className="text-emerald-800 text-base font-bold leading-6 self-stretch">
          $ {numberFormatter(order.nettAmount)}
        </div>
      </div>
    </>
  )
}

RenderPricingSummary.propTypes = {
  order: PropTypes.object
}