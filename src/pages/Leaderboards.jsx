import React, { useEffect, useState } from "react";
import facade from "../apiFacade";
import Tabs from "../components/Leaderboards/Tabs";

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

	return (
		<>
			<Tabs highscores={highscores} mostPoints={mostPoints} mostAnswered={mostAnswered} mostIncorrect={mostIncorrect} />
		</>
	);
};

export default Leaderboards;
