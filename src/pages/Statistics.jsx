import React, { useEffect, useState } from "react";
import facade from "../apiFacade";
import Stats from "../components/Statistics/Stats";
import Tabs from "../components/Tabs/Tabs";

const Statistics = () => {
	const [nAmerica, setNAmerica] = useState({
		countries: [
			{
				key: 0,
				svg: "",
				country: "",
				answered: 0,
				correct: 0,
				incorrect: 0,
			},
		],
	});
	const [sAmerica, setSAmerica] = useState({
		countries: [
			{
				key: 0,
				svg: "",
				country: "",
				answered: 0,
				correct: 0,
				incorrect: 0,
			},
		],
	});
	const [africa, setAfrica] = useState({
		countries: [
			{
				key: 0,
				svg: "",
				country: "",
				answered: 0,
				correct: 0,
				incorrect: 0,
			},
		],
	});
	const [asia, setAsia] = useState({
		countries: [
			{
				key: 0,
				svg: "",
				country: "",
				answered: 0,
				correct: 0,
				incorrect: 0,
			},
		],
	});
	const [europe, setEurope] = useState({
		countries: [
			{
				key: 0,
				svg: "",
				country: "",
				answered: 0,
				correct: 0,
				incorrect: 0,
			},
		],
	});

	useEffect(() => {
		facade.getContinentStats("North America", setNAmerica);
		facade.getContinentStats("South America and Oceania", setSAmerica);
		facade.getContinentStats("Africa", setAfrica);
		facade.getContinentStats("Asia", setAsia);
		facade.getContinentStats("Europe", setEurope);
	}, []);

	const tabButtons = {
		tabs: [
			{ state: 1, line1: "North", line2: "America" },
			{ state: 2, line1: "Sourth", line2: "America" },
			{ state: 3, line1: "Africa", line2: "" },
			{ state: 4, line1: "Asia", line2: "" },
			{ state: 5, line1: "Europe", line2: "" },
		],
	};

	const tabContent = {
		content: [
			{ state: 1, comp: Stats, data: nAmerica },
			{ state: 2, comp: Stats, data: sAmerica },
			{ state: 3, comp: Stats, data: africa },
			{ state: 4, comp: Stats, data: asia },
			{ state: 5, comp: Stats, data: europe },
		],
	};

	return (
		<>
			<div className="statistics">
				<Tabs tabButtons={tabButtons} tabContent={tabContent} />
			</div>
		</>
	);
};

export default Statistics;
