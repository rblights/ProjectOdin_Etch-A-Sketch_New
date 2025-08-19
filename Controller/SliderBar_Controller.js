import { SliderBar_Model } from "../Model/SliderBar_Model.js";
import { SliderBar_View } from "../View/SliderBar_View.js";

class SliderBar_Controller {
    #sliderBar_Model;
    #sliderBar_View;
    #changeHandlers = [];

    constructor() {
        this.#sliderBar_Model = new SliderBar_Model();
        this.#sliderBar_View = new SliderBar_View(this.#sliderBar_Model);

        this.#sliderBar_View.addChangeListener((newValue) => {
            this.#sliderBar_Model.setValue(newValue);
            this.#notifyChange(newValue);
        });
    }

    #notifyChange(newValue) {
        this.#changeHandlers.forEach(handler => handler(newValue));
    }

    addChangeListener(handler) {
        if (typeof handler == `function`) {
            this.#changeHandlers.push(handler);
        }
    }

    getSliderBar_Model() {
        return this.#sliderBar_Model;
    }

    getSliderBar_View() {
        return this.#sliderBar_View;
    }
}
export {SliderBar_Controller};