export const mappingBundleProductCart = (memoizedCart, bundles) => {
  const updatedBundles = bundles.map(bundle => ({
    ...bundle,
    items: bundle.items.map(item => {
      const cartItem = memoizedCart[`${bundle.setMealGroupCode}-${item.setMealItemCode}`];

      if (cartItem) {
        return startMappingData(item, cartItem);
      }

      return item;
    }),
  }));

  return JSON.parse(JSON.stringify(updatedBundles));
}

const startMappingData = (item, cartItem) => {
  const updatedItem = {
    ...item,
    isSelected: true,
    quantity: cartItem.quantity,
  };
  let itemAttributes = (item.productInfo?.attributes || [])
  if (itemAttributes?.length > 0) {
    updatedItem.productInfo.attributes = mappingAttributes(itemAttributes, cartItem);
  }
  return updatedItem;
}

const mappingAttributes = (itemAttributes, cartItem) => {
  let newAttributes = [];
  for (const attGroup of itemAttributes){
    const attItems = attGroup.items.map(attr => {
      const matchingAttr = cartItem.attributes.find(
        cartAttr => {
          return cartAttr.attCode === attr.attributesCode}
      );
      return matchingAttr ? { ...attr, isSelected: true } : attr;
    });
    newAttributes.push({...attGroup, items:attItems})
  }
  return newAttributes;
}