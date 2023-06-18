import {IGameState, IGameView, IOption} from "./interfaces";

export class GameView implements IGameView {
    private readonly textElement: HTMLElement | null;
    private readonly optionsElement: HTMLElement | null;

    constructor() {
        this.textElement = document.getElementById("text");
        this.optionsElement = document.getElementById("options");
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
                // this.gamePresenter.handleOptionSelection(option);
                console.log('click')
            });
            this.optionsElement.appendChild(button);
        }
    }

    clearOptions(): void {
        if (this.optionsElement) {
            this.optionsElement.innerHTML = "";
        }
    }
}
