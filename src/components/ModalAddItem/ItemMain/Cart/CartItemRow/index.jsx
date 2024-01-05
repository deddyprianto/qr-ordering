import PropTypes from "prop-types";
import { RenderButtonMinus } from "../ButtonMinus";
import { RenderButtonPlus } from "../ButtonPlus";
import { getItemType } from "../../../../RenderItemProduct/GetItemType";
import { RenderItemDetailInCart } from "./ItemDetail";

export const RenderCartItemRow = ({
  item, 
  updateCartItem
}) => {
  const renderBundleItemDet = (bundle) => {
    return (
      <>
        <RenderItemDetailInCart 
          key={bundle.bundleItemCode} 
          name={`(${bundle.quantity}X) ${bundle.productInfo?.itemName}`}
        />
        {bundle.attributes?.length>0
          ?<div className="ml-4">{renderItemDetail(bundle)}</div>
          :""
        }
      </>
      
    )
  }

  const renderItemDetail = (item) => {
    let itemType=getItemType(item)
    switch (itemType) {
      case "attribute":
        return item.attributes?.map((attItem)=>{
          return(
            <RenderItemDetailInCart key={attItem.attCode} name={attItem.attName}/>
          )})
    case "bundle":
      return item.bundles?.map((bundle)=>{
        return renderBundleItemDet(bundle)
      })
        
      default:
        break;
    }
  }

  return (
    <div className="items-stretch flex justify-between mt-2.5  pl-0 gap-2 px-4">
      <div className="fixed-width-content w-full flex flex-row my-auto">
        <div>
          <div className="text-gray-700 text-sm font-medium leading-5 tracking-wide">
            {item.productInfo?.itemName}
          </div>
          <div className="flex items-center ml-4">
            <div className="text-neutral-400 text-xs leading-5 tracking-wide">
              {renderItemDetail(item)}
            </div>
          </div>
        </div>
      </div>
      <div className="items-stretch self-center flex gap-1 my-auto">
        <RenderButtonMinus item={item} updateCartItem={updateCartItem}/>
        <div className="text-gray-700 text-center font-bold bg-zinc-300 w-12 h-6 rounded-lg">
          {item.quantity || 0}
        </div>
        <RenderButtonPlus item={item} updateCartItem={updateCartItem}/>
      </div>
      <div className="fixed-width-content text-gray-700 text-right text-sm font-bold whitespace-nowrap my-auto"
        style={{width: "75px"}}  
      >
        $ {item.amount}
      </div>
    </div>
  )
}
RenderCartItemRow.propTypes = {
  item: PropTypes.object,
  updateCartItem: PropTypes.func
}