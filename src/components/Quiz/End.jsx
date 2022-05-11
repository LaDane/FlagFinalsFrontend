import React from "react";
import "./End.css"

const End = ({ quiz }) => {
	// useEffect(() => {
	// 	console.log(quiz);
	// 	facade.endQuiz(quiz, setQuiz);
	// }, []);

	return (
		<>
			{(() => {
				if (quiz.totalPoints !== 0) {
					return (
						<div className="end">
							<h1>quiz completed</h1>
							<p>score:  <p className="final-result">{quiz.totalPoints}</p></p>
							<p>correct answers: <p className="final-result">{quiz.totalCorrect}</p></p>
							<p>wrong answers:  <p className="final-result">{quiz.totalIncorrect}</p></p>
							{/* <p>{quiz.questions.size}</p> */}
							{/* <p>{quiz.continentName}</p> */}
							{/* <p>{quiz.username}</p> */}
						</div>
					);
				} else {
					return (
						<div className="end">
							<h2>Calculating...</h2>
						</div>
					);
				}
			})()}
		</>
	);
};

export default End;
