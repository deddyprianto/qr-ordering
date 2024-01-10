import { useSelector } from "react-redux";
import screen from "../../../hooks/useWindowSize";

const FooterCart = () => {
  const { width } = screen();

  const gadgetScreen = width < 980;

  const theme = useSelector((state) => state.dataSlice.theme);
  return (
    <footer
      className={`fixed bottom-0 left-0 bg-white text-center rounded-t-2xl p-[16px] ${
        gadgetScreen ? "w-full" : "w-[45%] left-[50%] translate-x-[-50%]"
      }`}
      style={{
        boxShadow: "0px -4px 10px 0px rgba(0, 0, 0, 0.10)",
      }}
    >
      <button
        style={{ backgroundColor: theme.secondary }}
        className="py-[10px] px-[20px]  text-white rounded-lg cursor-pointer text-[16px] w-full"
      >
        PAY - $ 413.42
      </button>
    </footer>
  );
};

export default FooterCart;
