import { setAccessToken } from "../../app/dataSlicePersisted";
import { callAPI } from "../../services/services";

export const fetchAuthMember = async (dispatch, memberInfo) => {
  try {
    const responseAuth = await callAPI(
      `${import.meta.env.VITE_API_URL}/auth`,
      "GET",
    );
    if (Object.keys(memberInfo).length === 0) {
      console.log("LOGIN AS GUEST");
      dispatch(
        setAccessToken({
          accessToken: responseAuth?.data?.accessToken,
          type: "guest",
        }),
      );
    }
  } catch (error) {
    console.log("error on auth detected", error);
  }
};