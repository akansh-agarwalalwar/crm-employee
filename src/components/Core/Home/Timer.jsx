import React, { useState, useEffect } from "react";

const TimerCircle = () => {
  const totalSeconds = 24 * 60 * 60; // Total seconds in 24 hours
  const [timeLeft, setTimeLeft] = useState(totalSeconds);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeElapsed = totalSeconds - timeLeft;
  const percentageElapsed = (timeElapsed / totalSeconds) * 100;
  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  const formatTime = (time) => (time < 10 ? `0${time}` : time);

  return (
    <div className="timer-container">
      <div className="circle">
        <div
          className="dot"
          style={{
            transform: `rotate(${(percentageElapsed / 100) * 360}deg)`,
          }}
        ></div>
        <div className="inner-circle">
          <span className="time">
            {formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TimerCircle;
