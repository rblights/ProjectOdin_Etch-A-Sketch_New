import { Sketchpad_Controller } from "./Sketchpad_Controller.js";
import { SliderBar_Controller } from "./SliderBar_Controller.js";

class Game_Controller {
    constructor() {
        this._sliderBar_Controller = new SliderBar_Controller();
        this._sketchpad_Controller = new Sketchpad_Controller(this._sliderBar_Controller._sliderBar_Model.value);

        document.body.appendChild(this._sketchpad_Controller._sketchpad_View._sketchpad_Element);
        document.body.appendChild(this._sliderBar_Controller._sliderBar_View._sliderBar_Element);
    }
}
export {Game_Controller};