import "./Quiz.css";
import "./Question.css";

function QuestionContainer({ stage, question, answerBtn }) {
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
}

export default QuestionContainer;
