class SliderBar_M {
    constructor() {
        this.sliderBar_Element = document.createElement("input");
        this.sliderBar_Element.className = "SliderBar"
        this.sliderBar_Element.type = "range";
        this.sliderBar_Element.min = "1";
        this.sliderBar_Element.max = "100";
        this.sliderBar_Element.value = 16;
    }
}
export {SliderBar_M};