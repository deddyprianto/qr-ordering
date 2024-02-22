import { updateCartToListen } from "../app/dataSlicePersisted";
import { apiOrder } from "../services/Order";
import { sendPushNotification } from "./notification";

const callApiOrder = async (ID, dispatch) => {
  try {
    const result = await apiOrder("GET", ID, {});
    if (result.resultCode === 200) {
      if(["COMPLETED", "VOIDED", "CANCELLED"].includes(result.data?.status)){
        sendPushNotification(result.data?.orderRefNo);
        dispatch(updateCartToListen({
          cartID: ID,
          status: result.data?.status
        }));
        return true;
      }
    } else {
      throw result.message;
    }
    return false;
  } catch (error) {
    console.log(error);
    return true;
  }
};

const getOrderStatus = (ID, dispatch) => {
  setTimeout(async () => {
    const isStopped = await callApiOrder(ID, dispatch);
    console.log(isStopped)
    if(!isStopped) getOrderStatus(ID, dispatch);
  }, 5000);
}

export const startListeningInterval = (ID, dispatch) => {
  getOrderStatus(ID, dispatch)
}