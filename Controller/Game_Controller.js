import { BoardGrid_Controller } from "./BoardGrid_Controller.js";
import { Sketchpad_Controller } from "./Sketchpad_Controller.js";
import { SliderBar_Controller } from "./SliderBar_Controller.js";
import { Game_View } from "../View/Game_View.js";

class Game_Controller {
    #sliderBar_Controller;
    #sketchpad_Controller;
    #boardGrid_Controller

    constructor() {
        this.#sliderBar_Controller = new SliderBar_Controller();

        const SLIDERBAR_ELEMENT = this.#sliderBar_Controller.getSliderBar_View().getSliderBar_Element()
        const INITIAL_SLIDER_VALUE = this.#sliderBar_Controller.getSliderBar_Model().getValue();

        this.#sketchpad_Controller = new Sketchpad_Controller(INITIAL_SLIDER_VALUE);

        const SKETCHPAD_ELEMENT = this.#sketchpad_Controller.getSketchpad_View().getSketchpad_Element();
        const SKETCHPAD_DIMENSIONS = this.#sketchpad_Controller.getSketchpad_View().getSketchpadDimensions();
        
        this.#boardGrid_Controller = new BoardGrid_Controller(SKETCHPAD_ELEMENT, SKETCHPAD_DIMENSIONS, INITIAL_SLIDER_VALUE);

        this.#sliderBar_Controller.addChangeListener((newSliderValue) => {
            this.#boardGrid_Controller.updateGrid(newSliderValue);
        });

        new Game_View(SKETCHPAD_ELEMENT, SLIDERBAR_ELEMENT);
    }
}
export {Game_Controller};