class BoardGrid_View {

    #boardGrid_Element;

    constructor(sketchpad_Element, sketchpadDimensions, initialSliderValue) {
        this.#boardGrid_Element = sketchpad_Element

        this.#createBoardGrid(sketchpadDimensions, initialSliderValue);
    }

    #createBoardGrid(sketchpadDimensions, initialSliderValue) {
        initialSliderValue = parseInt(initialSliderValue);
        const CELLSIZE = sketchpadDimensions / initialSliderValue;

        for (let i = 0; i < initialSliderValue * initialSliderValue; i++) {
            this.gridCell = document.createElement("div");

            this.gridCell.style.width = this.gridCell.style.height = `${CELLSIZE}px`;
            this.gridCell.classList.add("GridCell");
            this.gridCell.style.border = "1px solid gray";
            //this.gridCell.addEventListener("mouseover", setCellColor());
            this.#boardGrid_Element.appendChild(this.gridCell);
        }
    }

    #setCellColor() {
        this.style.backgroundColor = "black";
    }

    getBoardGrid_Element() {
        return this.#boardGrid_Element;
    }
}
export {BoardGrid_View};