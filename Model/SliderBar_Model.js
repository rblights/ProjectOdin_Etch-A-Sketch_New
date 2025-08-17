class SliderBar_Model {

    #min;
    #max;
    #value;

    constructor() {
        this.#min = 1;
        this.#max = 100;
        this.#value = 16;
    }

    getValue() {
        return this.#value;
    }
}
export {SliderBar_Model};