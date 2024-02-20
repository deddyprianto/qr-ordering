import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export function useUpdateURLWithQueryParams() {
  const navigate = useNavigate();
  const { tableNo, validUntil } = useSelector((state) => state.dataSlice);
  const { outletName } = useSelector((state) => state.dataSlicePersisted);

  return function updateURL(pathname) {
    let query = `outlet=${encodeURIComponent(outletName)}`;
    if(tableNo) query = `${query}&tableNo=${tableNo}`;
    if(validUntil) query = `${query}&validUntil=${validUntil}`;
    const newURL = `${pathname}?input=${window.btoa(query)}`;
    navigate(newURL);
  };
}
