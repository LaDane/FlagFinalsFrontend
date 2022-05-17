import React from "react";
import "./Stats.css";

const StatItem = ({ item }) => {
	return (
		<>
			<div className="stat-item">
				<img className="stat-item-img" src={"https://countryflagsapi.com/svg/" + item.svg} height="60" width="100" alt="flag" />
				<p className="stat-country-data">{item.country}</p>
				<p className="stat-answered">Times Answered</p>
				<p className="stat-answered-data">{item.answered}</p>
				<p className="stat-correct">Times Answered Correctly</p>
				<p className="stat-correct-data">{item.correct}</p>
				<p className="stat-incorrect">Times Answered Incorrectly</p>
				<p className="stat-incorrect-data">{item.incorrect}</p>
			</div>
		</>
	);
};

export default StatItem;
