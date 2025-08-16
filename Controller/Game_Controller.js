import { SliderBar_Model } from "../Model/SliderBar_Model.js";
import { SliderBar_View } from "../View/SliderBar_View.js";
import { Sketchpad_Model } from "../Model/Sketchpad_Model.js";
import { Sketchpad_View } from "../View/Sketchpad_View.js";

class Game_Controller {
    constructor() {
        const INITIAL_SLIDER_VALUE = 16;

        this._sketchpad_Model = new Sketchpad_Model();
        this._sliderBar_Model = new SliderBar_Model();

        this._sketchpad_View = new Sketchpad_View(INITIAL_SLIDER_VALUE);
        this._sliderBar_View = new SliderBar_View(this._sliderBar_Model);
        

        document.body.appendChild(this._sketchpad_View.sketchpad_Element);
        document.body.appendChild(this._sliderBar_View.sliderBar_Element);
    }
}
export {Game_Controller};