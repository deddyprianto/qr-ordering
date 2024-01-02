export const generateAttributesBody = (attList) => {
  let attributes = [];
  for(const attGroup of attList){  
    for(const attItem of attGroup.items){
      if(!attItem.isSelected) continue;
      attributes.push({
        "attCode": attItem.attributesCode,
        "quantity": 1
      })}
  }
  return attributes
}