import React, { useEffect, useState } from "react";
import facade from "../apiFacade";
import Lobby from "../components/Quiz/Lobby";
import Question from "../components/Quiz/Question";
import Result from "../components/Quiz/Result";
import End from "../components/Quiz/End";

const Quiz = ({ username, loggedIn }) => {
	const [stage, setStage] = useState(0);
	const [showResult, setShowResult] = useState(false);
	const [showEnd, setShowEnd] = useState(false);
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
				points: 0,
			},
		],
		continentName: "",
		username: "",
	});
	const questionAmount = 3;

	// useEffect(() => {
	// 	console.log("useEffect");
	// }, []);

	const generateQuiz = () => {
		facade.getQuiz(setQuiz, "Europe", username);
	};

	const answerBtn = (evt, answerChoice) => {
		evt.preventDefault();
		facade.getResult(setPoints, totalPoints, setTotalPoints, quiz.questions[stage - 1].correctCountryId, answerChoice, 12, setShowResult, setAnswerCorrect, updateQuestion);
	};

	const continueBtn = (evt) => {
		evt.preventDefault();

		if (stage + 1 > questionAmount) {
			setShowEnd(true);
			facade.endQuiz(quiz, setQuiz);
		} else {
			setShowResult(false);
			setStage(stage + 1);
		}
		setPoints(0);
	};

	const updateQuestion = (qPoints) => {
		let updatedQuiz = { ...quiz };
		updatedQuiz.questions[stage - 1].points = qPoints;
		setQuiz(updatedQuiz);
	};

	return (
		<>
			{(() => {
				if (!loggedIn) {
					return (
						<div>
							<h3>You must be logged in to view this page</h3>
						</div>
					);
				} else {
					if (showEnd) {
						return <End quiz={quiz} />;
					} else if (stage === 0) {
						return <Lobby setStage={setStage} generateQuiz={generateQuiz} />;
					} else if (showResult) {
						return <Result stage={stage} points={points} totalPoints={totalPoints} answerCorrect={answerCorrect} continueBtn={continueBtn} />;
					} else if (stage >= 1 && stage <= questionAmount) {
						return <Question stage={stage} question={quiz.questions[stage - 1]} answerBtn={answerBtn} />;
					} else {
						<div>
							<h3>An error has occurred</h3>
						</div>;
					}
				}
			})()}
		</>
	);
};

export default Quiz;
