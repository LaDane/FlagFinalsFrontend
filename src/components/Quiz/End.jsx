import React, { useEffect } from "react";
import "./End.css";

const End = ({ quiz }) => {
	return (
		<div className="app__body">
			{(() => {
				if (quiz.totalPoints !== 0) {
					return (
						<div className="end">
							<h1>quiz completed</h1>
							<p>score:</p>
							<p className="final-result">{quiz.totalPoints}</p>
							<p>correct answers:</p>
							<p className="final-result">{quiz.totalCorrect}</p>
							<p>wrong answers:</p>
							<p className="final-result">{quiz.totalIncorrect}</p>
						</div>
					);
				} else {
					return (
						<div className="end">
							<h1>Calculating...</h1>
						</div>
					);
				}
			})()}
		</div>
	);
};

export default End;
