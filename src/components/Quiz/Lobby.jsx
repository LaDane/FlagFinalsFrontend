import React from "react";
import "./Quiz.css";

const Lobby = ({ setStage, generateQuiz }) => {
	const startQuiz = (evt) => {
		evt.preventDefault();
		setStage(1);
		generateQuiz();
	};

	return (
		<div className="background">
			<div className="center-items">
				<h2 className="game-mode">Pick a game mode!</h2>
				<button
					className="lobby-start-btn"
					onClick={(e) => {
						startQuiz(e);
					}}
				>
					Europe
				</button>

				<button
					className="lobby-start-btn"
					onClick={(e) => {
						startQuiz(e);
					}}
				>
					Asia
				</button>

				<button
					className="lobby-start-btn"
					onClick={(e) => {
						startQuiz(e);
					}}
				>
					America
				</button>

				<button
					className="lobby-start-btn"
					onClick={(e) => {
						startQuiz(e);
					}}
				>
					World
				</button>
			</div>
		</div>
<<<<<<< Updated upstream
		// <p className="how-to-play">Rules and how to play / earn points</p>
=======
		
				// <p className="how-to-play">Rules and how to play / earn points</p>
>>>>>>> Stashed changes
	);
};

export default Lobby;
