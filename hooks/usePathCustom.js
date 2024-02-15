import { useNavigate } from "react-router-dom";

export function useUpdateURLWithQueryParams() {
  const navigate = useNavigate();

  return function updateURL(pathname, search) {
    const newURL = `${pathname}${search}`;
    navigate(newURL);
  };
}
