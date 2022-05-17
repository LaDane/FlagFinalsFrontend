import React from "react";
import StatItem from "./StatItem";

const Stats = ({ data }) => {
	return (
		<>
			<div className="stats-container">
				{data.countries.map((item) => {
					return <StatItem key={item.key} item={item} />;
				})}
			</div>
		</>
	);
};

export default Stats;
