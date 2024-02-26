export const statusText = (status) => {
  switch (status)  {
    case "PENDING":
      return "PENDING";
    case "PAYMENT_COMPLETED":
      return "CONFIRMED";
    case "PAYMENT_PARTIALLY_COMPLETED":
      return "WAITING FOR PAYMENT";
    case "PROCESSING":
      return "PROCESSING";
    case "COMPLETED":
      return "COMPLETED";
    case "VOIDED":
      return "VOIDED";
    case "CANCELLED":
      return "CANCELLED";
    default:
      break;
  }
}