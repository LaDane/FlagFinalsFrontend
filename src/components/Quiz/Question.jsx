import React from "react";

const Question = ({ stage, question, setStage }) => {
	const clickAnswer = (evt, answerChoice) => {
		evt.preventDefault();
		console.log(answerChoice);
		setStage(stage + 1);
	};

	return (
		<div>
			<h2>Question {stage}</h2>
			<h4>Which country has this flag?</h4>
			<div dangerouslySetInnerHTML={{ __html: question.svg }} />
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
	);
};

export default Question;
