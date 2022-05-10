import "./Question.css";
import "./Quiz.css";
import Navsidebar from "../Navbar/Navsidebar";
import Timer from "./Timer";
import QuestionContainer from "./QuestionContainer";

const Question = ({ stage, question, answerBtn }) => {
  return (
    <div className="question-container center-items">
      <Navsidebar />
     
      <QuestionContainer
        stage={stage}
        question={question}
        answerBtn={answerBtn}
      />
	   <Timer answerBtn={answerBtn}/>
    </div>
  );
};

export default Question;
