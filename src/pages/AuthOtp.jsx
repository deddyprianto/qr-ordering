import { useState, useRef, useEffect } from "react";

export function Component() {
  const [otp, setOTP] = useState(["", "", "", ""]);
  const refs = [useRef(), useRef(), useRef(), useRef()];

  useEffect(() => {
    refs[0].current.focus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  // Check if all OTP fields are filled
  const isOTPComplete = otp.every((value) => value !== "");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "16px",
      }}
    >
      <div
        style={{
          color: "var(--text-color-primary, #343A4A)",
          width: "100%",
          font: "700 22px/31px Helvetica Neue, sans-serif ",
        }}
      >
        Enter your OTP
      </div>
      <div
        style={{
          color: "#000",
          textAlign: "center",
          letterSpacing: "0.28px",
          marginTop: "4px",
          width: "100%",
          font: "500 14px/20px Helvetica Neue, sans-serif ",
        }}
      >
        We have sent the OTP to j*******j@g***.***
      </div>
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
            key={value}
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

      <div
        style={{
          justifyContent: "center",
          alignSelf: "stretch",
          display: "flex",
          gap: "10px",
          padding: "8px 58px",
          marginTop: "16px",
        }}
      >
        <div
          style={{
            color: "var(--text-color-primary, #000)",
            textAlign: "center",
            letterSpacing: "0.28px",
            whiteSpace: "nowrap",
            font: "500 14px/20px Helvetica Neue, sans-serif ",
          }}
        >
          Didn’t receive code?
        </div>
        <div
          style={{
            color: "var(--text-color-tertiary, #888787)",
            textAlign: "center",
            letterSpacing: "0.28px",
            whiteSpace: "nowrap",
            font: "500 14px/20px Helvetica Neue, sans-serif ",
          }}
        >
          Resend OTP in 0:59
        </div>
      </div>
      <div
        style={{
          color: "var(--color-01-white, #F9F9F9)",
          whiteSpace: "nowrap",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "stretch",
          borderRadius: "8px",
          backgroundColor: !isOTPComplete ? "#B7B7B7" : "#FF4782",
          pointerEvents: !isOTPComplete && "none",
          padding: "11px 60px",
          font: "500 14px Poppins, sans-serif ",
          marginTop: "16px",
        }}
      >
        Verify and Register
      </div>
    </div>
  );
}
