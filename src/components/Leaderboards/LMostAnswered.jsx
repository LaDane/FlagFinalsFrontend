import React from "react";
import LItem from "./LItem";
import "./LItem.css";

const LMostAnswered = ({ mostAnswered }) => {
	return (
		<>
			<div className="leaderboard-container">
				<div className="leaderboard-titles">
					<p className="leaderboard-title-rank">Rank</p>
					<p className="leaderboard-title-img">Country</p>
					<p className="leaderboard-title-username">Name</p>
					<p className="leaderboard-title-stat" style={{ left: "-5px" }}>
						Answered
					</p>
				</div>
				{mostAnswered.mostAnswered.map((item) => {
					return <LItem item={item} stat={item.answered} key={item.rank} />;
				})}
			</div>
		</>
	);
};

export default LMostAnswered;
