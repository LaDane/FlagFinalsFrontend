import React from "react";
import "./Quiz.css";

const Lobby = ({ setStage, generateQuiz }) => {
  const startQuiz = (evt, continent) => {
    evt.preventDefault();
    setStage(1);
    generateQuiz(continent);
  };

  return (
   
      <div className="lobby">
        <h2 className="game-mode">Pick a game mode!</h2>
        <button
          className="lobby-start-btn"
          onClick={(e) => {
            startQuiz(e, "Europe");
          }}
        >
          Europe
        </button>

        <button
          className="lobby-start-btn"
          onClick={(e) => {
            startQuiz(e, "Asia");
          }}
        >
          Asia
        </button>

        <button
          className="lobby-start-btn"
          onClick={(e) => {
            startQuiz(e, "North America");
          }}
        >
          North America
        </button>

        <button
          className="lobby-start-btn"
          onClick={(e) => {
            startQuiz(e, "South America and Oceania");
          }}
        >
          South America and Oceania
        </button>

        <button
          className="lobby-start-btn"
          onClick={(e) => {
            startQuiz(e, "Africa");
          }}
        >
          Africa
        </button>

        <button
          className="lobby-start-btn"
          onClick={(e) => {
            startQuiz(e, "World");
          }}
        >
          World
        </button>
      </div>
  
    // <p className="how-to-play">Rules and how to play / earn points</p>
  );
};

export default Lobby;
