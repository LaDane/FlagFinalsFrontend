import "./Quiz.css";
import "./Question.css";

function QuestionContainer({ stage, question, answerBtn, time }) {
  return (
    <div>
      <h2 className="question-number">{stage}. Which country has this flag?</h2>
      <div className="question-svg-container center-items">
        <img
          src={"https://countryflagsapi.com/svg/" + question.svg}
          height="200"
          width="300"
        />
      </div>
      <div className="buttons">
        <button
          className="answer-btn"
          onClick={(e) => {
            answerBtn(e, question.answer1, time);
          }}
        >
          {question.answer1}
        </button>
        <button
          className="answer-btn"
          onClick={(e) => {
            answerBtn(e, question.answer2, time);
          }}
        >
          {question.answer2}
        </button>
        <button
          className="answer-btn"
          onClick={(e) => {
            answerBtn(e, question.answer3, time);
          }}
        >
          {question.answer3}
        </button>
        <button
          className="answer-btn"
          onClick={(e) => {
            answerBtn(e, question.answer4, time);
          }}
        >
          {question.answer4}
        </button>
      </div>
    </div>
  );
}

export default QuestionContainer;