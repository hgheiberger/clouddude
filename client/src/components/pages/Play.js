import React from "react";
import { Helmet } from "react-helmet";
import Game from "../modules/Game";
import PlayInfo from "../modules/PlayInfo";

import "./Play.css";

const Play = ({
  levelDifficulty,
  setLevelDifficulty,
  levelFunness,
  setLevelFunness,
  userState,
  activeLevel,
  levelsWon,
  setLevelsWon,
  userId,
  levelsPlayed,
  setLevelsPlayed,
}) => {
  document.body.style.overflow = "auto";
  return (
    <>
      <div className="Play-container">
        <Helmet>
          <title>Play!</title>
        </Helmet>
        <Game
          className="Play-game"
          activeLevel={activeLevel}
          isEditing={false}
          userState={userState}
          levelsWon={levelsWon}
          setLevelsWon={setLevelsWon}
          levelsPlayed={levelsPlayed}
          setLevelsPlayed={setLevelsPlayed}
          userId={userId}
        />
        <PlayInfo
          levelDifficulty={levelDifficulty}
          setLevelDifficulty={setLevelDifficulty}
          levelFunness={levelFunness}
          setLevelFunness={setLevelFunness}
          activeLevel={activeLevel}
        />
      </div>
    </>
  );
};

export default Play;
