import { useSelector } from "react-redux";
import posIsOffline from "../assets/pos_offline.png";

const RenderPOSOffline = () => {
  const { outletName } = useSelector((state) => state.dataSlicePersisted);
  return (
    <div>
      <img src={posIsOffline} alt="pos_offline" />
      <h1 className="text-center">POS terminal on {outletName} is Offline</h1>
    </div>
  );
};

export default RenderPOSOffline;
