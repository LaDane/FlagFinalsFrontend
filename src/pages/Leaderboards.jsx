import React, { useEffect, useState } from "react";
import facade from "../apiFacade";
import LHighscores from "../components/Leaderboards/LHighscores";
import LMostAnswered from "../components/Leaderboards/LMostAnswered";
import LMostIncorrect from "../components/Leaderboards/LMostIncorrect";
import LMostPoints from "../components/Leaderboards/LMostPoints";
import Tabs from "../components/Tabs/Tabs";

const Leaderboards = () => {
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
	const [mostPoints, setMostPoints] = useState({
		mostPoints: [
			{
				rank: 0,
				username: "",
				svg: "",
				points: 0,
			},
		],
	});
	const [mostAnswered, setMostAnswered] = useState({
		mostAnswered: [
			{
				rank: 0,
				username: "",
				svg: "",
				answered: 0,
			},
		],
	});
	const [mostIncorrect, setMostIncorrect] = useState({
		mostIncorrect: [
			{
				rank: 0,
				username: "",
				svg: "",
				incorrect: 0,
			},
		],
	});

	useEffect(() => {
		facade.getHighscores(setHighscores);
		facade.getMostPoints(setMostPoints);
		facade.getMostAnswered(setMostAnswered);
		facade.getMostIncorrect(setMostIncorrect);
	}, []);

	const tabButtons = {
		tabs: [
			{ state: 1, line1: "Quiz", line2: "Highscores" },
			{ state: 2, line1: "Most Points", line2: "Earned" },
			{ state: 3, line1: "Most Questions", line2: "Answered" },
			{ state: 4, line1: "Most Questions", line2: "Incorrect" },
		],
	};

	const tabContent = {
		content: [
			{ state: 1, comp: LHighscores, data: highscores },
			{ state: 2, comp: LMostPoints, data: mostPoints },
			{ state: 3, comp: LMostAnswered, data: mostAnswered },
			{ state: 4, comp: LMostIncorrect, data: mostIncorrect },
		],
	};

	return (
		<>
			<Tabs tabButtons={tabButtons} tabContent={tabContent} />
		</>
	);
};

export default Leaderboards;
