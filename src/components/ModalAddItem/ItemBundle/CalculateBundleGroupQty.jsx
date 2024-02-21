export const calculateBundleGroupQty = (bundleGroup) => {
  let totalQuantity = 0;
  bundleGroup.items.forEach((item) => {
    totalQuantity += (item.quantity || 0);
  });
  return totalQuantity;
}

export const isValidBundleQty = (bundleGroup) => {
  let totalQty = calculateBundleGroupQty(bundleGroup);
  return totalQty>=bundleGroup.min && totalQty<=bundleGroup.max
}

export const isBundleReadyToSubmit = (bundleList) => {
  if((bundleList || []).length<1) return true;
  let isReady=true;
  for(const bundle of bundleList){
    if(!isValidBundleQty(bundle)){
      isReady=false;
      break;
    }
  }
  return isReady
}