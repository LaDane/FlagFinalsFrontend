import React, { useEffect, useRef, useState } from "react";
import facade from "../apiFacade";
import Lobby from "../components/Quiz/Lobby";
import Question from "../components/Quiz/Question";
import Result from "../components/Quiz/Result";

const Quiz = ({ username }) => {
	const [stage, setStage] = useState(0);
	const [showResult, setShowResult] = useState(false);
	const [answerCorrect, setAnswerCorrect] = useState(false);
	const [points, setPoints] = useState(0);
	const [totalPoints, setTotalPoints] = useState(0);
	const [quiz, setQuiz] = useState({
		totalPoints: 0,
		totalCorrect: 0,
		totalIncorrect: 0,
		questions: [
			{
				correctCountryId: 0,
				svg: "",
				answer1: "",
				answer2: "",
				answer3: "",
				answer4: "",
			},
		],
		continentName: "Europe",
		username: "user",
	});

	// useEffect(() => {
	//     facade.getQuiz(setQuiz, "Europe", username);
	// }, []);

	const generateQuiz = () => {
		facade.getQuiz(setQuiz, "Europe", username);
	};

	return (
		<>
			{(() => {
				if (stage === 0) {
					return <Lobby stage={stage} setStage={setStage} generateQuiz={generateQuiz} />;
				} else if (showResult) {
					return <Result stage={stage} setStage={setStage} points={points} totalPoints={totalPoints} setShowResult={setShowResult} answerCorrect={answerCorrect} />;
				} else if (stage >= 1 && stage <= 21) {
					return <Question stage={stage} question={quiz.questions[stage - 1]} setPoints={setPoints} totalPoints={totalPoints} setTotalPoints={setTotalPoints} setShowResult={setShowResult} setAnswerCorrect={setAnswerCorrect} />;
				}
			})()}
		</>
	);
};

export default Quiz;
