class Game_View {

    #gameDiv

    constructor(SKETCHPAD_ELEMENT, SLIDERBAR_ELEMENT) {
        this.#gameDiv = document.createElement("div");
        this.#gameDiv.className = "GameDiv";
        this.#gameDiv.style.display = "Flex";
        this.#gameDiv.style.flexDirection = "column";

        document.body.appendChild(this.#gameDiv);

        this.#gameDiv.appendChild(SKETCHPAD_ELEMENT);
        this.#gameDiv.appendChild(SLIDERBAR_ELEMENT);
    }
}
export {Game_View};