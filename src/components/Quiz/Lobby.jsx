import React from "react";

const Lobby = ({ stage, setStage }) => {
	const startQuiz = (evt) => {
		evt.preventDefault();
		setStage(1);
	};

	return (
		<div>
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
