import React from "react";
import "./Question.css";
import "./Quiz.css";
import facade from "../../apiFacade";
import Navsidebar from "../Navbar/Navsidebar";

const Question = ({ stage, question, setPoints, totalPoints, setTotalPoints, setShowResult, setAnswerCorrect }) => {
	const clickAnswer = (evt, answerChoice) => {
		evt.preventDefault();
		console.log(answerChoice);
		// setStage(stage + 1);
		facade.getResult(setPoints, totalPoints, setTotalPoints, question.correctCountryId, answerChoice, 12, setShowResult, setAnswerCorrect);
	};

	return (
		<div className="question-container center-items">
			<Navsidebar/>
			<div className="circle">
				<p className="seconds">20</p>
			</div>
			<h1 className="title">flag finals</h1>
			<h4 className="question-number">{stage}. Which country has this flag?</h4>
			<div className="question-svg-container center-items">
				<div dangerouslySetInnerHTML={{ __html: question.svg }} className="question-svg" />
			</div>
			<div className="buttons">
			<button
				className="answer-btn"
				onClick={(e) => {
					clickAnswer(e, question.answer1);
				}}
			>
				{question.answer1}
			</button>
			<button
				className="answer-btn"
				onClick={(e) => {
					clickAnswer(e, question.answer2);
				}}
			>
				{question.answer2}
			</button>
			<button
				className="answer-btn"
				onClick={(e) => {
					clickAnswer(e, question.answer3);
				}}
			>
				{question.answer3}
			</button>
			<button
				className="answer-btn"
				onClick={(e) => {
					clickAnswer(e, question.answer4);
				}}
			>
				{question.answer4}
			</button>
			</div>
		</div>
	);
};

export default Question;