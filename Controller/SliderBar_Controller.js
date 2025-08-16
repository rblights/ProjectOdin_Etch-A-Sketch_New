import { SliderBar_Model } from "../Model/SliderBar_Model.js";
import { SliderBar_View } from "../View/SliderBar_View.js";

class SliderBar_Controller {
    constructor() {
        this._sliderBar_Model = new SliderBar_Model();
        this._sliderBar_View = new SliderBar_View(this._sliderBar_Model);
    }
}
export {SliderBar_Controller};