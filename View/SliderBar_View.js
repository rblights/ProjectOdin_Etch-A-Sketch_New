class SliderBar_View {

    #sliderBar_Element;
    
    constructor(sliderBar_Model) {
        this.#sliderBar_Element = document.createElement("input");
        this.#sliderBar_Element.className = "SliderBar"
        this.#sliderBar_Element.type = "range";
        this.#sliderBar_Element.min = sliderBar_Model.min;
        this.#sliderBar_Element.max = sliderBar_Model.max;
        this.#sliderBar_Element.value = sliderBar_Model.value;
    }

    renderSliderBar_Element() {
        document.body.appendChild(this.#sliderBar_Element);
    }
}
export {SliderBar_View};