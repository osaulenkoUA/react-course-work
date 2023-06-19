import {IGameState, IGameView, IOption, OptionSelectionEvent} from "../interfaces";
import {EventDispatcher} from "../eventDispatcher";

export class GameView implements IGameView {
    private readonly textElement: HTMLElement | null;
    private readonly optionsElement: HTMLElement | null;
    private eventDispatcher: EventDispatcher;

    constructor(eventDispatcher: EventDispatcher) {
        this.textElement = document.getElementById("text");
        this.optionsElement = document.getElementById("options");
        this.eventDispatcher = eventDispatcher;
    }

    displayGameState(state: IGameState): void {
        if (this.textElement) {
            this.textElement.innerText = state.text;
        }
    }

    displayOption(option: IOption): void {
        if (this.optionsElement) {
            const button = document.createElement("button");
            button.innerText = option.text;
            button.addEventListener("click", () => {
                const event: OptionSelectionEvent = { option };
                this.eventDispatcher.dispatchEvent(event);
            });
            this.optionsElement.appendChild(button);
        }
    }

    clearOptions(): void {
        if (this.optionsElement && this.textElement) {
            this.textElement.innerHTML = ""
            this.optionsElement.innerHTML = "";
        }
    }
}
