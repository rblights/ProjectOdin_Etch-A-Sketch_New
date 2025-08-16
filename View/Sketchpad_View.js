class Sketchpad_View {
    constructor(initial_Slider_Value) {
        this._sketchpad_Element = document.createElement("div");
        this._sketchpad_Element.className = "SketchPad_Element";

        this._sketchpad_Element._viewPercent = .75;
        this._sketchpad_Element._gridSize = initial_Slider_Value;
        this._sketchpad_Element._dimensions = this._calcSketchpadDimensions(); 
        this._sketchpad_Element.style.width = this._sketchpad_Element.style.height = `${this._sketchpad_Element._dimensions}px`;
        this._sketchpad_Element.style.margin = '0 auto'
        this._sketchpad_Element.style.backgroundColor = "aliceblue";

    }
    _calcSketchpadDimensions() {
        return Math.min(window.innerWidth, window.innerHeight) * this._sketchpad_Element._viewPercent;
    }
}
export {Sketchpad_View};