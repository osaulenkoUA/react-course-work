import React, { useEffect } from "react";
import "./styles/App.css";
import { GameModel } from "./model/model";
import { GameView } from "./view/view";
import { GamePresenter } from "./presenter/presenter";
import { gamesStates } from "./data/gameStates";
import { EventDispatcher } from "./eventDispatcher";
import { OptionSelectionEventObserver } from "./observers";

function App() {
  useEffect(() => {
    const gameModel = new GameModel(gamesStates);
    const eventDispatcher = new EventDispatcher();
    const gameView = new GameView(eventDispatcher);
    const gamePresenter = new GamePresenter(
      gameModel,
      gameView,
      eventDispatcher
    );

    const optionSelectionObserver = new OptionSelectionEventObserver(
      gamePresenter
    );
    eventDispatcher.addObserver(optionSelectionObserver);

    gamePresenter.startGame();
  }, []);

  return (
    <div className="App">
      <p id="text"></p>
      <div id="options"></div>
    </div>
  );
}

export default App;
