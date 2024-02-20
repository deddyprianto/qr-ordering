import { setOutletSetting, setServiceCharge } from "../../app/dataSlice";
import { apiOutlet } from "../../services/Outlet";

export const fetchOutletSetting = async (dispatch, outlet, orderType) => {
  try {
    let outletSetting = {};
    const result = await apiOutlet("GET", `${outlet}/settings`, {});
    if (result.resultCode === 200) {
      for (const setting of result.data) {
        switch (setting.settingKey) {
          case "Enable_QR_DineIn":
            outletSetting["dineInOption"] = {
              enable: setting.settingValue.toLowerCase() == "true",
              displayName: setting.displayName,
              serviceCharges: JSON.parse(setting.dataOptions || "[]"),
            };
            break;
          case "Enable_QR_TakeAway":
            outletSetting["takeAwayOption"] = {
              enable: setting.settingValue.toLowerCase() == "true",
              displayName: setting.displayName,
              serviceCharges: JSON.parse(setting.dataOptions || "[]"),
            };
            break;
          default:
            break;
        }
      }
      dispatch(setOutletSetting(outletSetting));
    } else {
      throw result.message;
    }
    if (orderType == "DINEIN")
      dispatch(
        setServiceCharge(outletSetting["dineInOption"]?.serviceCharges || []),
      );
    else
      dispatch(
        setServiceCharge(
          outletSetting["takeAwayOption"]?.serviceCharges || [],
        ),
      );
  } catch (error) {
    console.log(error);
  }
};