export function Component() {
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
          justifyContent: "space-between",
          alignSelf: "stretch",
          display: "flex",
          gap: "20px",
          padding: "0 55px",
          marginTop: "16px",
        }}
      >
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "12px",
            backgroundColor: "var(--grey-scale-color-grey-scale-4, #F9F9F9)",
            display: "flex",
            width: "54px",
            height: "72px",
            flexDirection: "column",
          }}
        />
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "12px",
            backgroundColor: "var(--grey-scale-color-grey-scale-4, #F9F9F9)",
            display: "flex",
            width: "54px",
            height: "72px",
            flexDirection: "column",
          }}
        />
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "12px",
            backgroundColor: "var(--grey-scale-color-grey-scale-4, #F9F9F9)",
            display: "flex",
            width: "54px",
            height: "72px",
            flexDirection: "column",
          }}
        />
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "12px",
            backgroundColor: "var(--grey-scale-color-grey-scale-4, #F9F9F9)",
            display: "flex",
            width: "54px",
            height: "72px",
            flexDirection: "column",
          }}
        />
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
          backgroundColor: "#B7B7B7",
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
