import { Trans } from "react-i18next";
import { useUpdateURLWithQueryParams } from "../../hooks/usePathCustom";

export function Component() {
  const updateURL = useUpdateURLWithQueryParams();
  return (
    <button onClick={() => updateURL("/auth")}>
      <Trans i18nKey={"login"} />
    </button>
  );
}
