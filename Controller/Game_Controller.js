import { Sketchpad_Controller } from "./Sketchpad_Controller.js";
import { SliderBar_Controller } from "./SliderBar_Controller.js";

class Game_Controller {
    #sliderBar_Controller;
    #sketchpad_Controller;
    #gameDiv;

    constructor() {
        this.#sliderBar_Controller = new SliderBar_Controller();
        this.#sketchpad_Controller = new Sketchpad_Controller(this.#sliderBar_Controller.getSliderBar_Model().getValue());

        this.#gameDiv = document.createElement("div");
        this.#gameDiv.className = "GameDiv";
        this.#gameDiv.style.display = "Flex";
        this.#gameDiv.style.flexDirection = "column";
        
        document.body.appendChild(this.#gameDiv);

        this.#gameDiv.appendChild(this.#sketchpad_Controller.getSketchpad_View().getSketchpad_Element());
        this.#gameDiv.appendChild(this.#sliderBar_Controller.getSliderBar_View().getSliderBar_Element());
    }
}
export {Game_Controller};