import { BoardGrid_Controller } from "./BoardGrid_Controller.js";
import { Sketchpad_Controller } from "./Sketchpad_Controller.js";
import { SliderBar_Controller } from "./SliderBar_Controller.js";

class Game_Controller {
    #sliderBar_Controller;
    #sketchpad_Controller;
    #boardGrid_Controller
    #gameDiv;

    constructor() {
        this.#sliderBar_Controller = new SliderBar_Controller();
        this.#sketchpad_Controller = new Sketchpad_Controller(this.#sliderBar_Controller.getSliderBar_Model().getValue());

        const SKETCHPAD_ELEMENT = this.#sketchpad_Controller.getSketchpad_View().getSketchpad_Element();

        this.#boardGrid_Controller = new BoardGrid_Controller(SKETCHPAD_ELEMENT, this.#sketchpad_Controller.getSketchpad_View().getSketchpadDimensions(),this.#sliderBar_Controller.getSliderBar_Model().getValue());

        this.#gameDiv = document.createElement("div");
        this.#gameDiv.className = "GameDiv";
        this.#gameDiv.style.display = "Flex";
        this.#gameDiv.style.flexDirection = "column";

        document.body.appendChild(this.#gameDiv);

        
        const BOARDGRID_ELEMENT = this.#boardGrid_Controller.getBoardGrid_View().getBoardGrid_Element();
        this.#gameDiv.appendChild(SKETCHPAD_ELEMENT);
        this.#gameDiv.appendChild(this.#sliderBar_Controller.getSliderBar_View().getSliderBar_Element());
    }
}
export {Game_Controller};