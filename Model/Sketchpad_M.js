import { SliderBar_M } from "./SliderBar_M.js";

class Sketchpad_M {
    constructor(SliderBar_M) {
        this.sketchPad_Element = document.createElement("div");
        this.sketchPad_Element.className = "SketchPad_Element";
        this.sketchPad_Element._viewPercent = .75;
        this.sketchPad_Element._gridSize = SliderBar_M.value;
        this.sketchPad_Element._dimensions = this._calcSketchpadDimensions(); 
        this.sketchPad_Element.style.width = this.sketchPad_Element.style.height = `${this.sketchPad_Element._dimensions}px`;
        this.sketchPad_Element.style.backgroundColor = "black";

        document.body.appendChild(this.sketchPad_Element);

    }
    _calcSketchpadDimensions() {
        return Math.min(window.innerWidth, window.innerHeight) * this.sketchPad_Element._viewPercent;
    }
}
export {Sketchpad_M};