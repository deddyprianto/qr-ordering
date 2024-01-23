import { Trans } from "react-i18next";
import { useNavigate } from "react-router-dom";

export function Component() {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate("/auth")}>
      <Trans i18nKey={"login"} />
    </button>
  );
}
