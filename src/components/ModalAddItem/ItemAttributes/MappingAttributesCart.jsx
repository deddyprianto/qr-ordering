export const mappingCartAttributes = (itemCart, attributes) => {
  const attCodesSet = new Set(itemCart.attributes.map(attr => attr.attCode));

  const updatedAttributes = attributes.map(attrGroup => ({
    ...attrGroup,
    items: attrGroup.items.map(attrItem => ({
      ...attrItem,
      isSelected: attCodesSet.has(attrItem.attributesCode),
    })),
  }));
  return updatedAttributes;
}