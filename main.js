import { Sketchpad_M } from "./Model/Sketchpad_M.js";
import { SliderBar_M } from "./Model/SliderBar_M.js";

document.addEventListener('DOMContentLoaded', () => {
    const SLIDERBAR_MODEL = new SliderBar_M();
    const SKETCHPAD_MODEL = new Sketchpad_M(SLIDERBAR_MODEL);
})