import { IGameView, IOption } from "../interfaces";
import { GameModel } from "../model/model";
import { EventDispatcher } from "../eventDispatcher";

export class GamePresenter {
  private readonly model: GameModel;
  private readonly view: IGameView;
  private eventDispatcher: EventDispatcher;

  constructor(
    model: GameModel,
    view: IGameView,
    eventDispatcher: EventDispatcher
  ) {
    this.model = model;
    this.view = view;
    this.eventDispatcher = eventDispatcher;
  }

  startGame(): void {
    this.view.clearOptions();
    const state = this.model.findStateById(0);
    this.view.displayGameState(state);

    state.options.forEach((option: IOption) => {
      this.presentOption(option);
    });
  }

  handleOptionSelection(option: IOption): void {
    this.model.selectOption(option);

    const nextState = this.model.findStateById(option.nextId);

    if (nextState) {
      this.view.clearOptions();
      this.view.displayGameState(nextState);
      nextState.options.forEach((option: IOption) => {
        this.presentOption(option);
      });
    }
  }

  presentOption(option: IOption): void {
    if (this.model.showOption(option)) {
      this.view.displayOption(option);
    }
  }
}
