import {GamePresenter} from "./presenter";
import {IEventObserver, OptionSelectionEvent} from "./interfaces";

export class OptionSelectionEventObserver implements IEventObserver {
    private readonly presenter: GamePresenter;

    constructor(presenter: GamePresenter) {
        this.presenter = presenter;
    }

    update(event: OptionSelectionEvent): void {
        this.presenter.handleOptionSelection(event.option);
    }
}

export class EventDispatcher {
    private readonly observers: IEventObserver[];

    constructor() {
        this.observers = [];
    }

    addObserver(observer: IEventObserver): void {
        this.observers.push(observer);
    }

    removeObserver(observer: IEventObserver): void {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    dispatchEvent(event: OptionSelectionEvent): void {
        for (const observer of this.observers) {
            observer.update(event);
        }
    }
}
