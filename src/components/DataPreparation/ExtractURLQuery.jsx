import { setOutletName } from "../../app/dataSlicePersisted";
import { setIsValidUrl, setTableNo, setValidUntil } from "../../app/dataSlice";

export const urlQueryExtractor = (dispatch) => {
  try {
    const url = window.location.href;
    const queryParams = new URLSearchParams(url.split("?")[1]);
    const queryStr = queryParams.get("input");

    const decodeQueryStr = window.atob(queryStr);
    const decodedParams = new URLSearchParams(decodeQueryStr);

    const outlet = decodedParams.get("outlet");
    const tableNo = decodedParams.get("tableNo");
    const validUntil = decodedParams.get("validUntil");

    dispatch(setOutletName(outlet));
    dispatch(setValidUntil(validUntil));
    dispatch(setTableNo(tableNo || ""));
    dispatch(setIsValidUrl(validUntil && (new Date(parseInt(validUntil)) > new Date())));
    return outlet;
  } catch (error) {
    console.log(error)
    return undefined
  }
}