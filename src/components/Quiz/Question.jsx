import React, { useState } from "react";
import "./Question.css";
import "./Quiz.css";
import Navsidebar from "../Navbar/Navsidebar";
import Timer from "./Timer";
import QuestionContainer from "./QuestionContainer";

const Question = ({ stage, question, answerBtn }) => {
  const [time, setTime] = useState(0);
  return (
    <div className="main-container">
      <div className="question-item">
        <QuestionContainer
          stage={stage}
          question={question}
          answerBtn={answerBtn}
          time={time}
        />
      </div>
      <div className="timer-item">
        <Timer answerBtn={answerBtn} setTime={setTime} />
      </div>
    </div>
  );
};

export default Question;
