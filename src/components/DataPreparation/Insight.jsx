import { setInsights } from "../../app/dataSlicePersisted";
import { apiInsights } from "../../services/Insights";

export const fetchInsight = async (dispatch) => {
  try {
    const result = await apiInsights("GET", ``, {});
    if (result.resultCode === 200) {
      dispatch(setInsights(result.data));
    } else {
      throw result.message;
    }
  } catch (error) {
    console.log(error);
  }
};