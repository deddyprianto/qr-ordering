const bundlesAmount = (bundleList) => {
  let amount = 0;
  for(const bundleGroup of bundleList){  
    for(const item of bundleGroup.items){
      let quantity = (item.quantity || 0)
      if(quantity<=0) continue;
      amount += (item.bundlePrice || 0) * quantity
      if(item.productInfo?.attributes?.length>0)
        amount += attributeAmount(item.productInfo?.attributes)
    }
  }
  return amount;
}

const attributeAmount = (attList) => {
  let amount = 0;
  for(const attGroup of attList){  
    for(const attItem of attGroup.items){
      if(!attItem.isSelected) continue;
      amount += (attItem.calAmount || 0)
    }
  }
  return amount
}

const calculateItemQty = (itemType, itemPrice, attList, bundleList) => {
  itemPrice = (itemPrice || 0);
  switch (itemType) {
    case "bundle":
      itemPrice += bundlesAmount(bundleList);
      break;
    case "attribute":
      itemPrice += attributeAmount(attList);
      break;
    default:
      break;
  }
  return Math.round((itemPrice + Number.EPSILON) * 100) / 100;
}

export const renderButtonText = (itemPrice, itemType, typeOfModalAddItem, attList, bundleList) => {
  let buttonText = "Add";
  if ((itemType != "main" && typeOfModalAddItem === "main")) 
    buttonText = "Add New";
  else if (itemType != "main" && typeOfModalAddItem != "main") {
    buttonText = `Add - $ ${calculateItemQty(itemType, itemPrice, attList, bundleList)}`;
  }
  return buttonText
}