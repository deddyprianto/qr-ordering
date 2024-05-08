import { setOutletName } from "../../app/dataSlicePersisted";
import { setIsValidUrl, setTableNo, setValidUntil } from "../../app/dataSlice";

const redirectionOccurred = (path, query) => {
  if (path !== "/" && path !== "/orderSummary") {
    window.location.href = '/'+query;
    return true;
  }
  return false;
}

export const urlQueryExtractor = (dispatch) => {
  try {
    const urlPath = window.location.pathname;
    const urlQuery = window.location.search;
    const params = new URLSearchParams(window.location.search);
    const cartToListenExists = params.has("cartID");
    if (!cartToListenExists) {
      redirectionOccurred(urlPath, urlQuery);
    }

    const queryParams = new URLSearchParams(urlQuery);
    const queryStr = queryParams.get("input");
    const decodeQueryStr = window.atob(queryStr);
    const decodedParams = new URLSearchParams(decodeQueryStr);

    const outlet = decodedParams.get("outlet");
    const tableNo = decodedParams.get("tableNo");
    const validUntil = decodedParams.get("validUntil");

    dispatch(setOutletName(outlet));
    dispatch(setValidUntil(validUntil));
    dispatch(setTableNo(tableNo || ""));
    dispatch(
      setIsValidUrl(validUntil && new Date(parseInt(validUntil)) > new Date()),
    );
    return outlet;
  } catch (error) {
    console.log(error)
    return undefined
  }
}