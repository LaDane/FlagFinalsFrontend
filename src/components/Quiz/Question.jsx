import React from "react";
import "./Question.css";
import "./Quiz.css";
import Navsidebar from "../Navbar/Navsidebar";

const Question = ({ stage, question, answerBtn }) => {
	return (
		<div className="question-container center-items">
			<Navsidebar />
			<div className="circle">
				<p className="seconds">20</p>
			</div>
			<h2 className="question-number">{stage}. Which country has this flag?</h2>
			<div className="question-svg-container center-items">
				<div dangerouslySetInnerHTML={{ __html: question.svg }} className="question-svg" />
			</div>
			<div className="buttons">
				<button
					className="answer-btn"
					onClick={(e) => {
						answerBtn(e, question.answer1);
					}}
				>
					{question.answer1}
				</button>
				<button
					className="answer-btn"
					onClick={(e) => {
						answerBtn(e, question.answer2);
					}}
				>
					{question.answer2}
				</button>
				<button
					className="answer-btn"
					onClick={(e) => {
						answerBtn(e, question.answer3);
					}}
				>
					{question.answer3}
				</button>
				<button
					className="answer-btn"
					onClick={(e) => {
						answerBtn(e, question.answer4);
					}}
				>
					{question.answer4}
				</button>
			</div>
		</div>
	);
};

export default Question;
