import React, { useState } from "react";
import "./Question.css";
import "./Quiz.css";
import Navsidebar from "../Navbar/Navsidebar";
import Timer from "./Timer";
import QuestionContainer from "./QuestionContainer";

const Question = ({ stage, question, answerBtn }) => {
	const [time, setTime] = useState(0);
	return (
		<div className="question-container center-items app__body">
			<Navsidebar />

			<QuestionContainer stage={stage} question={question} answerBtn={answerBtn} time={time} />
			
			<Timer answerBtn={answerBtn} setTime={setTime} />
		</div>
	);
};

export default Question;
