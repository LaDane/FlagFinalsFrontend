import React, { useEffect, useState } from "react";
import "./Highscore.css";
import facade from "../../apiFacade";
import HighscoreItem from "./HighscoreItem";

const Highscore = () => {
	const [highscores, setHighscores] = useState({
		highscores: [
			{
				rank: 0,
				username: "",
				svg: "",
				points: 0,
			},
		],
	});

	useEffect(() => {
		facade.getHighscores(setHighscores);
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
