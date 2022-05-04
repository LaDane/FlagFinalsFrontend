import React from "react";
import "./Quiz.css";

const Lobby = ({ stage, setStage, generateQuiz }) => {
	const startQuiz = (evt) => {
		evt.preventDefault();
		setStage(1);
		generateQuiz();
	};

	return (
		<div className="center-items">
			<p>Dropdown with regions</p>
			<p>Rules and how to play / earn points</p>
			<button
				className="lobby-start-btn"
				onClick={(e) => {
					startQuiz(e);
				}}
			>
				Start Quiz
			</button>
		</div>
	);
};

export default Lobby;
