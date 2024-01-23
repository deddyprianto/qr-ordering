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
  if (arr.length < 1) return true;
  for (const item of arr) {
    if (item === undefined || item === null) {
      return true;
    }
  }
  return false;
};