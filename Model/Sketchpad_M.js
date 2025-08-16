class Sketchpad_M {
    constructor(SliderBar_M) {
        this.sketchPad_Element = document.createElement("div");
        this.sketchPad_Element.className = "SketchPad_Element";

        document.body.appendChild(this.sketchPad_Element);
    }
}
export {Sketchpad_M};