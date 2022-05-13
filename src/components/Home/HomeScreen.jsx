import React from "react";
import "./HomeScreen.css";

const HomeScreen = () => {
	return (
		<div className="app__body">
			<div className="homescreen-logo">
				{/* <img className="homescreen-img" src={require("../../images/startcode-logo.png")} alt="Logo" /> */}
			</div>
			<div className="homescreen-title">
				<h1>flag finals!</h1>
			</div>
			<img className="flag-line" src={require("../../images/line_of_flags.png")}/>
		</div>
	);
};

export default HomeScreen;
