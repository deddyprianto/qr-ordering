import { isValidBundleQty } from "../ItemBundle/CalculateBundleGroupQty";

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
      bundles.push({
        "bundleItemCode": item.setMealItemCode,
        "quantity": item.quantity,
        "attributes": [],
        "remark": "",
        "lineInfo": ""
      })}
  }
  return {bundles, isValidQty}
}