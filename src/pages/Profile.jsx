import { Trans } from "react-i18next";
import { useLocation } from "react-router-dom";
import { useUpdateURLWithQueryParams } from "../../hooks/usePathCustom";

export function Component() {
  const { search } = useLocation();
  const updateURL = useUpdateURLWithQueryParams();
  return (
    <button onClick={() => updateURL("/auth", search)}>
      <Trans i18nKey={"login"} />
    </button>
  );
}
