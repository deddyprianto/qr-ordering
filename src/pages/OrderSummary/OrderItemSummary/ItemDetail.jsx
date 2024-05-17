import PropTypes from "prop-types"
import { numberFormatter } from "../../../utilities/numberFormatter";

const renderModifier = (modifier) => {
  return (
    <>
      <div className="grid grid-cols-[25px_1fr_50px] pl-[25px] mt-1" key={modifier.uniqueID}>
        <div className="text-neutral-400 text-xs font-medium leading-4 tracking-wide whitespace-nowrap">
          ({modifier.quantity}X)
        </div>
        <div className="text-neutral-400 text-xs font-medium leading-4 tracking-wide">
          {modifier.productInfo?.itemName}
        </div>
        <div className="text-neutral-400 text-right text-sm font-medium leading-5 tracking-wide self-stretch">
          {modifier.amount<=0?"FREE":("$ "+numberFormatter(modifier.amount))}
        </div>
      </div>
      <div className="pl-[25px]">
        {modifier.attributes?.map((att)=>{
          return renderModifier(att)
        })}
      </div>
    </>
  )
}

export const RenderItem = ({item}) => {
  return (
    <div className="items-stretch border border-[color:var(--Brand-color-Tertiary,#FFF)] bg-stone-50 flex w-full flex-col p-2 border-solid">
      <div className="grid grid-cols-[21px_1fr_57px] mt-1 gap-1">
        <div className="text-gray-700 text-sm font-medium leading-5 tracking-wide whitespace-nowrap self-start">
          {item.quantity}X
        </div>
        <div className="text-gray-700 text-sm font-medium leading-5 tracking-wide grow shrink basis-auto">
          {item.productInfo?.itemName}
        </div>
        <div className="text-gray-700 text-right text-sm font-bold leading-5 tracking-wide whitespace-nowrap self-start">
          $ {numberFormatter(item.amount)}
        </div>
      </div>
      {item.bundles?.map((bundle) => {
        return renderModifier(bundle);
      })}
      {item.attributes?.map((att) => {
        return renderModifier(att);
      })}
    </div>
  );
}

RenderItem.propTypes = {
  item: PropTypes.object
}