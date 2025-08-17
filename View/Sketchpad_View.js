class Sketchpad_View {

    #sketchpad_Element;

    constructor(initial_Slider_Value) {
        this.#sketchpad_Element = document.createElement("div");
        this.#sketchpad_Element.className = "SketchPad_Element";

        this.#sketchpad_Element._viewPercent = .75;
        this.#sketchpad_Element._gridSize = initial_Slider_Value;

        this.#sketchpad_Element._dimensions = this.#calcSketchpadDimensions(); 
        this.#sketchpad_Element.style.width = this.#sketchpad_Element.style.height = `${this.#sketchpad_Element._dimensions}px`;
        this.#sketchpad_Element.style.margin = '0 auto'
        this.#sketchpad_Element.style.backgroundColor = "aliceblue";

    }

    #calcSketchpadDimensions() {
        return Math.min(window.innerWidth, window.innerHeight) * this.#sketchpad_Element._viewPercent;
    }

    renderSketchpad_Element() {
        document.body.appendChild(this.#sketchpad_Element);
    }

    getSketchpad_Element() {
        return this.#sketchpad_Element;
    }
}
export {Sketchpad_View};