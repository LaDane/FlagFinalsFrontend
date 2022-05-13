import React from "react";
import "./result.css";

const Result = ({ stage, points, totalPoints, answerCorrect, continueBtn }) => {
  return (
    <div className="result center-items app__body">
      {answerCorrect ? (
        <div className="correct">
          <h1>Correct!</h1>
        </div>
      ) : (
        <div className="wrong">
          <h1>Wrong!</h1>
        </div>
      )}
      <h3 className="you-gained">You gained {points} points</h3>
      <h3 className="total-points">Total score: {totalPoints}</h3>

      <button
        className="answer-btn"
        onClick={(e) => {
          continueBtn(e);
        }}
      >
        Continue
      </button>
    </div>
  );
};

export default Result;
