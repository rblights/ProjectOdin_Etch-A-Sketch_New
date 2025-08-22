class BoardGrid_View {

    #isDrawing = false;
    #boardGrid_Element;
    #sketchpadDimensions;

    constructor(sketchpad_Element, sketchpadDimensions, initialSliderValue) {
        this.#boardGrid_Element = sketchpad_Element;
        this.#sketchpadDimensions = sketchpadDimensions;
        this.#createBoardGrid(initialSliderValue);

        this.#boardGrid_Element.addEventListener("mousedown", this.#handleMouseDown.bind(this));
        document.addEventListener("mouseup", this.#handleMouseUp.bind(this));
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
            
            GRIDCELL.addEventListener("mouseenter", this.#handleMouseEnter.bind(this));
            this.#boardGrid_Element.appendChild(GRIDCELL);
        }
    }

    #handleMouseDown(event) {
        this.#isDrawing = true;
        if (event.target.classList.contains("GridCell")) {
            this.#setCellColor(event.target);
        }
        event.preventDefault();
    }

    #handleMouseUp() {
        this.#isDrawing = false;
    }

    #handleMouseEnter(event) {
        if (this.#isDrawing && event.target.classList.contains("GridCell")) {
            this.#setCellColor(event.target);
        }
    }

    #setCellColor(cell_Element) {
        cell_Element.style.backgroundColor = "black";
    }

    updateGrid(newSliderValue) {
        this.#createBoardGrid(newSliderValue)
    }

    getBoardGrid_Element() {
        return this.#boardGrid_Element;
    }
}
export {BoardGrid_View};