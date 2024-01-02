export const getItemType = (item) => {
  if(!item) return "";
  let itemType = "main";
  if (item.bundles?.length > 0) 
    itemType = "bundle";
  else if (item.attributes?.length > 0) 
    itemType = "attribute";

  return itemType;
};
