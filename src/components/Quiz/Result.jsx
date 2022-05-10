import React from "react";
import "./result.css"

const Result = ({ stage, points, totalPoints, answerCorrect, continueBtn }) => {
	return (
		<div className="result center-items">
			{answerCorrect ? <h1>Correct!</h1> : <h1>Wrong answer!</h1>}
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
