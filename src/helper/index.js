export const getCurrencyHelper = (price, companyInfo) => {
  if (companyInfo) {
    if (price !== undefined) {
      const { currency } = companyInfo;
      if (!price || price === "-") price = 0;
      let result = price.toLocaleString(currency.locale, {
        style: "currency",
        currency: currency.code,
      });
      return result;
    }
  }
  return price;
};

export const hasEmptyElement = (arr) => {
  if(arr.length<1) return true;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === undefined || arr[i] === null) {
      return true;
    }
  }
  return false;
};