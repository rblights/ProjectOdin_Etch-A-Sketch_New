import { Sketchpad_Model } from "../Model/Sketchpad_Model.js";
import { Sketchpad_View } from "../View/Sketchpad_View.js";

class Sketchpad_Controller {
    constructor() {
        this._sketchpad_Model = new Sketchpad_Model();
        this._sketchpad_View = new Sketchpad_View();
    }
}
export {Sketchpad_Controller};