import React, { useState } from "react";
import LHighscores from "./LHighscores";
import LMostAnswered from "./LMostAnswered";
import LMostIncorrect from "./LMostIncorrect";
import LMostPoints from "./LMostPoints";
import "./Tabs.css";

const Tabs = ({ highscores, mostPoints, mostAnswered, mostIncorrect }) => {
	const [toggleState, setToggleState] = useState(1);

	const toggleTab = (index) => {
		setToggleState(index);
	};

	return (
		<>
			<div className="container-tabs">
				<div className="bloc-tabs">
					<button className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>
						<p className="tabs-btn-text">Quiz</p>
						<p className="tabs-btn-text">Highscores</p>
					</button>
					<button className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>
						<p className="tabs-btn-text">Most Points</p>
						<p className="tabs-btn-text">Earned</p>
					</button>
					<button className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)}>
						<p className="tabs-btn-text">Most Questions</p>
						<p className="tabs-btn-text">Answered</p>
					</button>
					<button className={toggleState === 4 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(4)}>
						<p className="tabs-btn-text">Most Questions</p>
						<p className="tabs-btn-text">Incorrect</p>
					</button>
				</div>

				<div className="content-tabs">
					<div className={toggleState === 1 ? "content-tab active-content-tab" : "content-tab"}>
						<LHighscores highscores={highscores} />
					</div>
					<div className={toggleState === 2 ? "content-tab active-content-tab" : "content-tab"}>
						<LMostPoints mostPoints={mostPoints} />
					</div>
					<div className={toggleState === 3 ? "content-tab active-content-tab" : "content-tab"}>
						<LMostAnswered mostAnswered={mostAnswered} />
					</div>
					<div className={toggleState === 4 ? "content-tab active-content-tab" : "content-tab"}>
						<LMostIncorrect mostIncorrect={mostIncorrect} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Tabs;
