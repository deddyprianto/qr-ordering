import PropTypes from "prop-types";

export const RenderFormOTP = ({ otp, setOTP, refs, disableForm }) => {
  const handleChange = (index, e) => {
    const newOTP = [...otp];
    newOTP[index] = e.target.value;
    setOTP(newOTP);
    if (e.target.value !== "" && index < refs.length - 1) {
      refs[index + 1].current.focus();
    }
  };

  const handleKeyUp = (index, e) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      refs[index - 1].current.focus();
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
      {otp.map((value, index) => (
        <div
          key={index}
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
            value={value}
            onChange={(e) => handleChange(index, e)}
            onKeyUp={(e) => handleKeyUp(index, e)}
            ref={refs[index]}
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
  refs: PropTypes.array,
  disableForm: PropTypes.bool
};
