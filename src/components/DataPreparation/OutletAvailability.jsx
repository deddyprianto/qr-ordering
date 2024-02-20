import { setOutletDetail } from "../../app/dataSlicePersisted";
import { apiOutlet } from "../../services/Outlet";

export const fetchOutletAvailability= async (dispatch, outlet) => {
  try {
    const result = await apiOutlet("GET", `${outlet}`, {});
    if (result.resultCode === 200) {
      dispatch(setOutletDetail(result.data));
    } else {
      throw result.message;
    }
  } catch (error) {
    dispatch(setOutletDetail({}));
    console.log(error);
  }
};