class SliderBar_View {

    #sliderBar_Element;
    
    constructor(sliderBar_Model) {
        this.#sliderBar_Element = document.createElement("input");
        this.#sliderBar_Element.className = "SliderBar"
        this.#sliderBar_Element.type = "range";
        this.#sliderBar_Element.min = sliderBar_Model.getMin();
        this.#sliderBar_Element.max = sliderBar_Model.getMax();
        this.#sliderBar_Element.value = sliderBar_Model.getValue();
        this.#sliderBar_Element.style.width = sliderBar_Model.getWidth();
        this.#sliderBar_Element.style.margin = "0 auto";
    }

    getSliderBar_Element() {
        return this.#sliderBar_Element;
    }

    addChangeListener(handler) {
        this.#sliderBar_Element.addEventListener("input", (event) => {
            handler(parseInt(event.target.value));
        });
    }
}
export {SliderBar_View};