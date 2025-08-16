class SliderBar_View {
    constructor(sliderBar_Model) {
        this._sliderBar_Element = document.createElement("input");
        this._sliderBar_Element.className = "SliderBar"
        this._sliderBar_Element.type = "range";
        this._sliderBar_Element.min = sliderBar_Model.min;
        this._sliderBar_Element.max = sliderBar_Model.max;
        this._sliderBar_Element.value = sliderBar_Model.value;
    }
}
export {SliderBar_View};