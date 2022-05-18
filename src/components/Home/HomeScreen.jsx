import React from "react";
import "./HomeScreen.css";
import InfoBox from "./InfoBox";

const HomeScreen = () => {
  return (
    <div className="app__body">
		{/*
      <div className="homescreen-logo">
         <img className="homescreen-img" src={require("../../images/startcode-logo.png")} alt="Logo" /> 
      </div>
	  */}
      <div className="homescreen-title">
        <h1>flag finals!</h1>
      </div>
      <img
        className="flag-line"
        src={require("../../images/line_of_flags.png")}
      />
      <div className="info__body">
        <InfoBox
          title="Most wrong answers:"
          info="Out of all 217 flags, Vanuatu in South America and Oceania is the least recognized flag. Only 13% knew it. Would you have guessed it? "
          svg="548"
        />
        <InfoBox
          title="Most correct answers:"
          info="Denmark in Europe is the most recognized flag in the world (according to us). Astonishing 100% knew it."
          svg="208"
        />
      </div>
    </div>
  );
};

export default HomeScreen;
