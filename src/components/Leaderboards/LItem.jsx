import React from "react";
import "./LItem.css";

const LItem = ({ item, stat }) => {
	// const stat = () => {
	// 	if (item.points !== null) {
	// 		return item.points;
	// 	} else if (item.answered !== null) {
	// 		console.log("HERE");
	// 		return item.answered;
	// 	} else if (item.incorrect !== null) {
	// 		return item.incorrect;
	// 	} else {
	// 		return "Unknown";
	// 	}
	// };
	return (
		<>
			<div className="leaderboard-item">
				<p className="leaderboard-item-rank"># {item.rank}</p>
				<img className="leaderboard-item-img" src={"https://countryflagsapi.com/svg/" + item.svg} height="30" width="50" alt="flag" />
				<p className="leaderboard-item-username">{item.username}</p>
				<p className="leaderboard-item-stat">{stat}</p>
			</div>
		</>
	);
};

export default LItem;
