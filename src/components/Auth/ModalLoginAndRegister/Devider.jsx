export const RenderDivider = () => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "16px",
          marginBottom: "24px",
        }}
      >
        <hr
          style={{
            width: "100%",
            borderTop: "1px solid #D6D6D6",
          }}
        />
        <span style={{ padding: "0 20px", color: "#D6D6D6" }}>or</span>
        <hr
          style={{
            width: "100%",
            borderTop: "1px solid #D6D6D6",
          }}
        />
      </div>
    );
  };