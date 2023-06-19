import { IEventObserver, OptionSelectionEvent } from "./interfaces";
import { GamePresenter } from "./presenter/presenter";

export class OptionSelectionEventObserver implements IEventObserver {
  private readonly presenter: GamePresenter;

  constructor(presenter: GamePresenter) {
    this.presenter = presenter;
  }

  update(event: OptionSelectionEvent): void {
    this.presenter.handleOptionSelection(event.option);
  }
}
