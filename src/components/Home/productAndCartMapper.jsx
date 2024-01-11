export const mapCartAndProduct = (menuList, cartInfo) => {
  if(cartInfo.details?.length<1) return menuList;
  const cartDetailsMap = new Map();
  cartInfo.details.forEach((item) => {
    cartDetailsMap.set(item.itemNo, {
      quantity: item.quantity,
      cartLineID: item.uniqueID,
    });
  }); 
  // Map product items with quantities from cart
  const updatedMenuList = menuList.map((item) => {
      const cardDetail = cartDetailsMap.get(item.refNo);
      return {
        ...item,
        cartQuantity: cardDetail?cardDetail.quantity:0, 
        cartLineID: cardDetail?cardDetail.cartLineID:"", 
      };
  });
  return updatedMenuList;
}