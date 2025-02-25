import { setOutletSetting, setServiceCharge } from "../../app/dataSlice";
import { setOrderType } from "../../app/dataSlicePersisted";
import { apiOutlet } from "../../services/Outlet";

export const fetchOutletSetting = async (dispatch, outlet, orderType) => {
  try {
    let outletSetting = {
      dine_in_option: {},
      cash_carry_option: {}
    };
    const result = await apiOutlet("GET", `${outlet}/settings`, {});
    if (result.resultCode === 200) {
      for (const setting of result.data) {
        switch (setting.settingKey) {
          case "QR_DINEIN_Enable":
            outletSetting["dine_in_option"]["enable"] =
              setting.settingValue.toLowerCase() == "true";
            break;
          case "QR_DINEIN_DisplayAs":
            outletSetting["dine_in_option"]["displayName"] =
              setting.settingValue;
            break;
          case "QR_CASH_CARRY_Enable":
            outletSetting["cash_carry_option"]["enable"] =
              setting.settingValue.toLowerCase() == "true";
            break;
          case "QR_CASH_CARRY_DisplayAs":
            outletSetting["cash_carry_option"]["displayName"] =
              setting.settingValue;
            break;
          default:
            break;
        }
      }
      dispatch(setOutletSetting(outletSetting));
      if (!orderType) {
        dispatch(setOrderType(""));
      } else if (outletSetting.dine_in_option.enable) {
        dispatch(setOrderType("DINEIN"));
      } else if (outletSetting.cash_carry_option.enable) {
        dispatch(setOrderType("CASH_CARRY"));
      }
    } else {
      throw result.message;
    }
    if (orderType == "DINEIN")
      dispatch(
        setServiceCharge(outletSetting["dine_in_option"]?.serviceCharges || []),
      );
    else
      dispatch(
        setServiceCharge(
          outletSetting["cash_carry_option"]?.serviceCharges || [],
        ),
      );
  } catch (error) {
    console.log(error);
  }
};