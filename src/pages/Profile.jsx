import { useNavigate } from "react-router-dom";

export function Component() {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/auth")}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          navigate("/auth");
        }
      }}
    >
      Login
    </div>
  );
}
