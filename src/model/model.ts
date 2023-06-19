import { IGameState, IOption } from "../interfaces";

class Bag {
  private objects: Set<string>;

  constructor() {
    this.objects = new Set();
  }

  addToBag(val: string): void {
    this.objects.add(val);
  }

  removeFromBag(val: string): void {
    this.objects.delete(val);
  }

  hasInBag(sub: string): boolean {
    return this.objects.has(sub);
  }

  clearBag() {
    this.objects = new Set();
  }
}

export class GameModel {
  private readonly bag: Bag;
  private readonly gameStates: IGameState[];

  constructor(gameStates: IGameState[]) {
    this.bag = new Bag();
    this.gameStates = gameStates;
  }

  findStateById(id: number): IGameState {
    const state = this.gameStates.find((el) => el.id === id);
    return state || this.gameStates[0];
  }

  showOption(option: IOption): boolean {
    if (!option?.requiredState) return true;

    const subject = option.requiredState.subject;
    const hasSubject = this.bag.hasInBag(subject);

    if (hasSubject && option?.requiredState?.isForDelete) {
      this.bag.removeFromBag(subject);
    }
    return hasSubject;
  }

  selectOption(option: IOption): void {
    option?.state && this.bag.addToBag(option?.state);
    option.nextId === 0 && this.bag.clearBag();
  }
}
