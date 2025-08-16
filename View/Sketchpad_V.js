class Sketchpad_V {
    constructor(SliderBar_M, Sketchpad_M) {
        this.sketchPad_V = Sketchpad_M;
        this.sketchPad_Element = this.sketchPad_V.sketchPad_Element
        this.sliderBar_V = SliderBar_M;
        this.sliderBar_value = this.sliderBar_V.value;

        this.sketchPad_Element._viewPercent = .75;
        this.sketchPad_Element._gridSize = this.sliderBar_value;
        this.sketchPad_Element._dimensions = this._calcSketchpadDimensions(); 
        this.sketchPad_Element.style.width = this.sketchPad_Element.style.height = `${this.sketchPad_Element._dimensions}px`;
        this.sketchPad_Element.style.backgroundColor = "black";

    }
    _calcSketchpadDimensions() {
        return Math.min(window.innerWidth, window.innerHeight) * this.sketchPad_Element._viewPercent;
    }
}
export {Sketchpad_V};