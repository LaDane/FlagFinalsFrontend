import React from "react";

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
						<div>
							<h2>End of quiz</h2>
							<p>{quiz.totalPoints}</p>
							<p>{quiz.totalCorrect}</p>
							<p>{quiz.totalIncorrect}</p>
							<p>{quiz.questions.size}</p>
							<p>{quiz.continentName}</p>
							<p>{quiz.username}</p>
						</div>
					);
				} else {
					return (
						<div>
							<h2>Calculating...</h2>
						</div>
					);
				}
			})()}
		</>
	);
};

export default End;
