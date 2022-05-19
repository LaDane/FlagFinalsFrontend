import "./Question.css";

function QuestionContainer({ stage, question, answerBtn, time }) {
  return (
    <div className="question-container">
      <h2 className="question-title">{stage}. Which country has this flag?</h2>
      <div className="question-svg-container">
        <img className="flag"
          src={"https://countryflagsapi.com/svg/" + question.svg}
          height="200"
          width="300"
          alt="flag"
        />
      </div>
      <div>
        <div className="answer-line">
          <button
            className="question-answer-btn"
            onClick={(e) => {
              answerBtn(e, question.answer1, time);
            }}
          >
            {question.answer1}
          </button>
          <button
            className="question-answer-btn"
            onClick={(e) => {
              answerBtn(e, question.answer2, time);
            }}
          >
            {question.answer2}
          </button>
        </div>
        <div className="answer-line">
          <button
            className="question-answer-btn"
            onClick={(e) => {
              answerBtn(e, question.answer3, time);
            }}
          >
            {question.answer3}
          </button>
          <button
            className="question-answer-btn"
            onClick={(e) => {
              answerBtn(e, question.answer4, time);
            }}
          >
            {question.answer4}
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuestionContainer;
