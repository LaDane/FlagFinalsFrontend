import React, { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./Timer.css";

function Timer({  answerBtn }) {
  const [key, setKey] = useState(0);
  const [start, setStart] = useState(true);
  const [time, setTime] = useState(0);

  const restartTime = () => {
    setKey((prevKey) => prevKey + 1);
  };
  const startTimer = () => {
    setStart(!start);
  };

  const printTime = () => {
    console.log(time);
  };
  return (
   
      <div className="timer">
        <CountdownCircleTimer
          key={key}
          isPlaying={start}
          duration={10}
          strokeWidth={20}
          strokeLinecap="square"
          size={150}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[7, 5, 2, 0]}
          onUpdate={(remainingTime) => setTime(remainingTime)}
          onComplete={(e) => answerBtn(null, "timeout")}
        >
          {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>
      </div>


  );
}

export default Timer;