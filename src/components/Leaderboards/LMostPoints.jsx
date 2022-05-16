import React from "react";
import LItem from "./LItem";
import "./LItem.css";

const LMostPoints = ({ mostPoints }) => {
	return (
		<>
			<div className="leaderboard-container">
				<div className="leaderboard-titles">
					<p className="leaderboard-title-rank">Rank</p>
					<p className="leaderboard-title-img">Country</p>
					<p className="leaderboard-title-username">Name</p>
					<p className="leaderboard-title-stat">Points</p>
				</div>
				{mostPoints.mostPoints.map((item) => {
					return <LItem item={item} stat={item.points} key={item.rank} />;
				})}
			</div>
		</>
	);
};

export default LMostPoints;
