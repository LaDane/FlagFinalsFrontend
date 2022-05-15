import React from "react";
import "./Highscore.css";

const HighscoreItem = ({ hsItem }) => {
	return (
		<div className="hs-item">
			<img className="hs-item-img" src={"https://countryflagsapi.com/svg/" + hsItem.svg} height="15" width="22.5" alt="flag" />
			<p className="hs-item-text">
				#{hsItem.rank} <b>{hsItem.username}</b> | {hsItem.points}
			</p>
		</div>
	);
};

export default HighscoreItem;
