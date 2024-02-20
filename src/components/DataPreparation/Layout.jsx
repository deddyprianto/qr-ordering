import { setTheme } from "../../app/dataSlicePersisted";
import { callAPI } from "../../services/services";

export const fetchLayout = async (dispatch) => {
  try {
    const response = await callAPI(
      `${import.meta.env.VITE_API_URL}/outlets/layout`,
      "GET",
    );

    const stateDefaultTheme = {};
    response?.data?.forEach((item) => {
      stateDefaultTheme[item.settingKey] = item.settingValue;
    });

    dispatch(setTheme(stateDefaultTheme));
  } catch (error) {
    console.log(error);
  }
};