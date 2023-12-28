import PropTypes from "prop-types";
import { RenderButtonMinus } from "./ButtonMinus";
import { RenderButtonPlus } from "./ButtonPlus";

export const RenderCartItemRow = ({
  item, 
  updateCartItem
}) => {
  return(
    <div className="self-stretch shrink-0 flex flex-row items-center justify-start gap-4 z-[5]">
      <div className="flex-1 flex flex-col items-start justify-center">
        <div className="text-gray-700 text-sm font-medium leading-5 tracking-wide whitespace mt-2.5">
          {item.productInfo?.itemName}
        </div>
        <div className="self-stretch relative tracking-[0.02em] leading-[140%] text-xs text-text-color-tertiary">
          {item.attributes?.map((attItem, attItidx)=>{
            return(
              <ul key={attItem.attCode+"-"+attItidx} 
                className="m-0 font-inherit text-inherit pl-[19px] list-disc"
              >
                <li>{attItem.attName}</li>
              </ul>
            );
          })}
        </div>
      </div>
      <div className="shrink-0 flex flex-row items-center justify-start gap-[4px] text-center text-base">
        <RenderButtonMinus item={item} updateCartItem={updateCartItem}/>
        <div className="text-gray-700 text-center text-sm font-bold leading-6 whitespace justify-center items-stretch bg-zinc-300 aspect-[1.4444444444444444] px-5 py-2 rounded-lg">
          {item.quantity}
        </div>
        <RenderButtonPlus item={item} updateCartItem={updateCartItem}/>
      </div>
      <b className="text-xs text-right" style={{width:"50px"}}>
        $ {item.amount}
      </b>
    </div>
  );
}
RenderCartItemRow.propTypes = {
  item: PropTypes.object,
  updateCartItem: PropTypes.func
}