import { Sketchpad_Controller } from "./Sketchpad_Controller.js";
import { SliderBar_Controller } from "./SliderBar_Controller.js";

class Game_Controller {
    #sliderBar_Controller;
    #sketchpad_Controller;

    constructor() {
        this.#sliderBar_Controller = new SliderBar_Controller();
        this.#sketchpad_Controller = new Sketchpad_Controller(this.#sliderBar_Controller.getSliderBar_Model().getValue());
    }
}
export {Game_Controller};