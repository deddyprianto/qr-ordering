import { isValidBundleQty } from "../ItemBundle/CalculateBundleGroupQty";
import { generateAttributesBody } from "./ItemAttributeBody";

export const generateBundlesBody = (bundleList) => {
  let bundles = [];
  let isValidQty = true;

  for(const bundleGroup of bundleList){  
    if(!isValidBundleQty(bundleGroup)) {
      isValidQty=false;
      break;
    }
    for(const item of bundleGroup.items){
      if((item.quantity || 0)<=0) continue;
      let bundle = {
        "bundleItemCode": item.setMealItemCode,
        "quantity": item.quantity,
        "attributes": [],
        "remark": "",
        "lineInfo": ""
      }
      if(item.productInfo?.attributes?.length>0)
        bundle.attributes = generateAttributesBody(item.productInfo?.attributes)
      bundles.push(bundle);
    }
  }
  return {bundles, isValidQty}
}