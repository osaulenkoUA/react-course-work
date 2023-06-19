export interface IOption {
  text: string;
  nextId: number;
  state?: string;
  requiredState?: {
    subject: string;
    isForDelete?: boolean;
  };
}

export interface IGameState {
  id: number;
  text: string;
  options: IOption[];
}

export interface IGameView {
  displayGameState(state: IGameState): void;

  displayOption(option: IOption): void;

  clearOptions(): void;
}

export interface OptionSelectionEvent {
  option: IOption;
}

export interface IEventObserver {
  update(event: OptionSelectionEvent): void;
}
