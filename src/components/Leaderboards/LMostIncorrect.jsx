import React from "react";
import LItem from "./LItem";
import "./LItem.css";

const LMostIncorrect = ({ data }) => {
	return (
		<>
			<div className="leaderboard-container">
				<div className="leaderboard-titles">
					<p className="leaderboard-title-rank">Rank</p>
					<p className="leaderboard-title-img">Country</p>
					<p className="leaderboard-title-username">Name</p>
					<p className="leaderboard-title-stat" style={{ left: "-2px" }}>
						Incorrect
					</p>
				</div>
				{data.mostIncorrect.map((item) => {
					return <LItem item={item} stat={item.incorrect} key={item.rank} />;
				})}
			</div>
		</>
	);
};

export default LMostIncorrect;
