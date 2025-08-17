class SliderBar_Model {

    #min;
    #max;
    #value;
    #width;

    constructor() {
        this.#min = 1;
        this.#max = 100;
        this.#value = 16;
        this.#width = "50vw";
    }

    getMin() {
        return this.#min;
    }

    getMax() {
        return this.#max;
    }

    getValue() {
        return this.#value;
    }

    setWidth(newWidth) {
        this.#width = newWidth;
    }

    getWidth() {
        return this.#width;
    }
}
export {SliderBar_Model};