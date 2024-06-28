import PropTypes from "prop-types"
import { Trans } from "react-i18next"
import { numberFormatter } from "../../../utilities/numberFormatter"

export const RenderPricingSummary = ({ order }) => {
  return (
    <>
      <div className="items-stretch flex justify-between gap-4 mt-4 px-4">
        <div className="justify-center text-gray-700 text-sm font-medium leading-5 tracking-wide grow whitespace-nowrap">
          <Trans i18nKey={"subtotal"} />
        </div>
        <div className="text-gray-700 text-right text-base font-bold leading-6 whitespace-nowrap">
          $ {numberFormatter(order?.subtotalSummary?.GROSS)}
        </div>
      </div>
      {numberFormatter(order?.subtotalSummary?.LINE_DISC) !== 0 && (
        <div
          id="discount"
          className="items-stretch flex justify-between gap-4 mt-1 px-4"
        >
          <div className="justify-center text-gray-700 text-sm font-medium leading-5 tracking-wide grow whitespace-nowrap">
            <Trans i18nKey={"discount"} />
          </div>
          <div className="text-[#CF3030] text-right text-base font-bold leading-6 whitespace-nowrap">
            ($ {numberFormatter(order?.subtotalSummary?.LINE_DISC)})
          </div>
        </div>
      )}

      {order?.subtotals?.map((sc) => {
        return (
          <div
            className="items-stretch flex justify-between gap-4 mt-1 px-4"
            key={sc.refNo}
          >
            <div className="justify-center text-gray-700 text-sm font-medium leading-5 tracking-wide grow whitespace-nowrap">
              {sc?.subtotalNameDisplayed}
            </div>
            <div className="text-gray-700 text-right text-base font-bold leading-6 whitespace-nowrap">
              $ {sc?.subtotalAmount}
            </div>
          </div>
        );
      })}
      {order?.excGSTAmount > 0 && (
        <div className="items-stretch flex justify-between gap-4 mt-4 px-4">
          <div className="justify-center text-gray-700 text-sm font-medium leading-5 tracking-wide grow whitespace-nowrap">
            GST {order?.gstRate}%
          </div>
          <div className="text-gray-700 text-right text-base font-bold leading-6 whitespace-nowrap">
            $ {numberFormatter(order?.excGSTAmount)}
          </div>
        </div>
      )}
      <div
        className={
          order?.excGSTAmount > 0
            ? "bg-zinc-300 min-h-[1px] w-full mt-1"
            : "bg-zinc-300 min-h-[1px] w-full mt-4"
        }
      />
      <div className="justify-between flex w-full gap-5 mt-4 px-4 items-start">
        <div className="text-gray-700 text-sm font-medium leading-5 tracking-wide">
          <Trans i18nKey={"total_payment"} />
        </div>
        <div
          id="subtotalSummaryNETT"
          className="text-emerald-800 text-base font-bold leading-6 self-stretch"
        >
          $ {numberFormatter(order?.subtotalSummary?.NETT)}
        </div>
      </div>
      {order?.incGSTAmount > 0 && (
        <div className="items-stretch flex justify-between gap-4 mt-1 px-4">
          <div className="justify-center text-gray-700 text-sm font-medium leading-5 tracking-wide grow whitespace-nowrap">
            GST (inc) {order?.gstRate}%
          </div>
          <div className="text-gray-700 text-right text-base font-bold leading-6 whitespace-nowrap">
            $ {numberFormatter(order?.incGSTAmount)}
          </div>
        </div>
      )}
    </>
  );
}

RenderPricingSummary.propTypes = {
  order: PropTypes.object
}