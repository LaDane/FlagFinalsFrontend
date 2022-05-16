import React, { useEffect, useState } from "react";
import "./Highscore.css";
import facade from "../../apiFacade";
import HighscoreItem from "./HighscoreItem";

const Highscore = ({ highscores, setHighscores }) => {
	useEffect(() => {
		facade.getHighscores10(setHighscores);
	}, []);

	return (
		<div className="hs-container">
			<div className="hs-wrapper">
				<div className="hs-items">
					{highscores.highscores.map((hs) => {
						return <HighscoreItem key={hs.rank} hsItem={hs} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default Highscore;
