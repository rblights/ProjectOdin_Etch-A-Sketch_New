import { Sketchpad_Model } from "../Model/Sketchpad_Model.js";
import { Sketchpad_View } from "../View/Sketchpad_View.js";

class Sketchpad_Controller {
    #sketchpad_Model;
    #sketchpad_View;

    constructor(initialSliderValue) {
        this.#sketchpad_Model = new Sketchpad_Model();
        this.#sketchpad_View = new Sketchpad_View(initialSliderValue);
    }

    getSketchpad_Model() {
        return this.#sketchpad_Model;
    }

    getSketchpad_View() {
        return this.#sketchpad_View;
    }
}
export {Sketchpad_Controller};