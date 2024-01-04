export const generateBundlesBody = (bundleList) => {
  let bundles = [];
  for(const bundleGroup of bundleList){  
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
  return bundles
}