import {IEventObserver, OptionSelectionEvent} from "./interfaces";

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
