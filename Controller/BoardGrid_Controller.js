import { BoardGrid_Model } from "../Model/BoardGrid_Model.js";
import { BoardGrid_View } from "../View/BoardGrid_View.js";

class BoardGrid_Controller {
    #boardGrid_Model;
    #boardGrid_View;

    constructor(sketchpad_Element, sketchpadDimensions, initialSliderValue) {
        this.#boardGrid_Model = new BoardGrid_Model();
        this.#boardGrid_View = new BoardGrid_View(sketchpad_Element, sketchpadDimensions, initialSliderValue);
    }

    getBoardGrid_Model() {
        return this.#boardGrid_Model;
    }

    getBoardGrid_View() {
        return this.#boardGrid_View;
    }
}
export {BoardGrid_Controller};