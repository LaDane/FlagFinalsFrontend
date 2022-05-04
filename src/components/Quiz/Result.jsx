import React from "react";
import "./Quiz.css";

const Result = ({ stage, setStage, points, totalPoints, setShowResult, answerCorrect }) => {
	const continueBtn = (evt) => {
		evt.preventDefault();
		setShowResult(false);
		setStage(stage + 1);
	};

	return (
		<div className="center-items">
			<h2>Result of question {stage}</h2>
			{answerCorrect ? <h4>Correct!</h4> : <h4>Wrong answer!</h4>}
			<h4>You gained {points} points</h4>
			<h4>You now have a total of {totalPoints} points</h4>

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
