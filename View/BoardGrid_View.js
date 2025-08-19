class BoardGrid_View {

    #boardGrid_Element;
    #sketchpadDimensions

    constructor(sketchpad_Element, sketchpadDimensions, initialSliderValue) {
        this.#boardGrid_Element = sketchpad_Element;
        this.#sketchpadDimensions = sketchpadDimensions;
        this.#createBoardGrid(initialSliderValue);
    }

    #createBoardGrid(initialSliderValue) {
        this.#boardGrid_Element.innerHTML = '';
        initialSliderValue = parseInt(initialSliderValue);
        const CELLSIZE = this.#sketchpadDimensions / initialSliderValue;

        for (let i = 0; i < initialSliderValue * initialSliderValue; i++) {
            const GRIDCELL = document.createElement("div");

            GRIDCELL.style.width = GRIDCELL.style.height = `${CELLSIZE}px`;
            GRIDCELL.classList.add("GridCell");
            GRIDCELL.style.border = "1px solid lightgray";
            
            GRIDCELL.addEventListener("mouseenter", this.#setCellColor);
            this.#boardGrid_Element.appendChild(GRIDCELL);
        }
    }

    #setCellColor(event) {
        event.target.style.backgroundColor = "black";
    }

    updateGrid(newSliderValue) {
        this.#createBoardGrid(newSliderValue)
    }

    getBoardGrid_Element() {
        return this.#boardGrid_Element;
    }
}
export {BoardGrid_View};