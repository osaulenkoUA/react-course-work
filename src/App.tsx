import React, {useEffect} from 'react';
import './App.css';
import {GameModel} from "./model";
import {GameView} from "./view";
import {GamePresenter} from "./presenter";
import {gamesStates} from "./gameStates";

function App() {


useEffect(()=>{
    const gameModel = new GameModel(gamesStates);
    const gameView = new GameView();
    const gamePresenter = new GamePresenter(gameModel, gameView);

    gamePresenter.startGame();
},[])

  return (
    <div className="App">
      <p id="text"></p>
      <div id="options"></div>
    </div>
  );
}

export default App;
