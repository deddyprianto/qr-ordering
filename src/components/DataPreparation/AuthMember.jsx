import { setAccessToken } from "../../app/dataSlicePersisted";
import { callAPI } from "../../services/services";

export const fetchAuthMember = async (dispatch, memberInfo) => {
  const lastCallTimestamp = localStorage.getItem("lastCallTimestamp");
  const currentDate = new Date().toDateString();
  try {
    if (!lastCallTimestamp || lastCallTimestamp !== currentDate) {
      const responseAuth = await callAPI(
        `${import.meta.env.VITE_API_URL}/auth`,
        "GET",
      );
      localStorage.setItem("lastCallTimestamp", currentDate);
      if (Object.keys(memberInfo).length === 0) {
        console.log("LOGIN AS GUEST");
        dispatch(
          setAccessToken({
            accessToken: responseAuth?.data?.accessToken,
            type: "guest",
          }),
        );
      }
    }
  } catch (error) {
    console.log("error on auth detected", error);
  }
};