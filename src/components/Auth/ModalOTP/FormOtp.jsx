import PropTypes from "prop-types";

export const RenderFormOTP = ({ otp, setOTP, disableForm }) => {
  const handleChange = (index, e) => {
    const newOTP = [...otp];
    newOTP[index].value = e.target.value;
    setOTP(newOTP);
    if (e.target.value !== "" && index < otp.length - 1) {
      otp[index + 1]?.ref?.current?.focus();
    }
  };

  const handleKeyUp = (index, e) => {
    if (e.key === "Backspace" && otp[index].value === "" && index > 0) {
      otp[index - 1]?.ref.current.focus();
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        marginTop: "16px",
      }}
    >
      {otp.map((otpObj, index) => (
        <div
          key={otpObj.id}
          style={{
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "12px",
            display: "flex",
            width: "54px",
            height: "72px",
            flexDirection: "column",
          }}
        >
          <input
            type="text"
            maxLength="1"
            value={otpObj.value}
            onChange={(e) => handleChange(index, e)}
            onKeyUp={(e) => handleKeyUp(index, e)}
            ref={otpObj.ref}
            disabled={disableForm}
            style={{
              textAlign: "center",
              backgroundColor:
                "var(--grey-scale-color-grey-scale-4, #F9F9F9)",
              width: "100%",
              height: "100%",
              borderRadius: "12px",
              outline: "none",
              fontWeight: "bold",
            }}
          />
        </div>
      ))}
    </div>
  )
};
RenderFormOTP.propTypes = {
  otp: PropTypes.array,
  setOTP: PropTypes.func,
  disableForm: PropTypes.bool
};
