import { Trans } from "react-i18next";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setOtpRequestInfo } from "../../../app/dataSlicePersisted";

export function CountdownTimerLabel({ targetDate, onCountdownComplete }) {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      const remainingTime = getTimeRemaining(targetDate);
      setTimeLeft(remainingTime);

      if (remainingTime.totalSeconds <= 0) {
        clearInterval(timer);
        onCountdownComplete(true);
      }
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(timer);
  }, [targetDate, onCountdownComplete]);

  function getTimeRemaining(endTime) {
    const totalMilliseconds = Date.parse(endTime) - Date.now();
    const totalSeconds = Math.floor(totalMilliseconds / 1000);
    const seconds = Math.max(totalSeconds % 60, 0);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const minutes = Math.max(totalMinutes % 60, 0);
    const hours = Math.max(Math.floor(totalMinutes / 60), 0);

    const formattedHours = hours.toString().padStart(2, "0");
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = seconds.toString().padStart(2, "0");

    return {
      totalSeconds,
      hours: formattedHours,
      minutes: formattedMinutes,
      seconds: formattedSeconds,
    };
  }

  return (
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
        <Trans i18nKey={"didnt_receive_code?"} />
      </div>
      <div
        style={{
          color: "var(--text-color-tertiary, #888787)",
          textAlign: "center",
          letterSpacing: "0.28px",
          whiteSpace: "nowrap",
          font: "500 14px/20px Helvetica Neue, sans-serif ",
          display: "flex",
        }}
      >
        <Trans i18nKey={"resend_otp_in"} />
        <div style={{ margin: "0px 7px" }}>
          <span>{timeLeft.hours}:</span>
          <span>{timeLeft.minutes}:</span>
          <span>{timeLeft.seconds}</span>
        </div>
      </div>
    </div>
  );
}

CountdownTimerLabel.propTypes = {
  targetDate: PropTypes.instanceOf(Date).isRequired,
  onCountdownComplete: PropTypes.func,
};

export function CountDownTime() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { otpRequestInfo } = useSelector((state) => state.dataSlicePersisted);
  const [countdownComplete, setCountdownComplete] = useState(false);

  const handleCountdownComplete = (complete) => {
    setCountdownComplete(complete);
  };

  useEffect(() => {
    if (countdownComplete) {
      dispatch(setOtpRequestInfo({}));
      navigate("/");
    }
  }, [countdownComplete, dispatch, navigate]);

  return (
    <CountdownTimerLabel
      targetDate={otpRequestInfo?.expiredOn}
      onCountdownComplete={handleCountdownComplete}
    />
  );
}
