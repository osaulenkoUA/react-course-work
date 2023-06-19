import { IEventObserver, OptionSelectionEvent } from "./interfaces";

export class EventDispatcher {
  private readonly observers: IEventObserver[];

  constructor() {
    this.observers = [];
  }

  addObserver(observer: IEventObserver): void {
    this.observers.push(observer);
  }

  dispatchEvent(event: OptionSelectionEvent): void {
    for (const observer of this.observers) {
      observer.update(event);
    }
  }
}
