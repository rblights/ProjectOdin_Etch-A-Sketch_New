import { SliderBar_M } from "./Model/SliderBar_M.js";
import { Sketchpad_M } from "./Model/Sketchpad_M.js";
import { Sketchpad_V } from "./View/Sketchpad_V.js";

document.addEventListener('DOMContentLoaded', () => {
    const SLIDERBAR_MODEL = new SliderBar_M();
    const SKETCHPAD_MODEL = new Sketchpad_M();
    const SKETCHPAD_VIEW = new Sketchpad_V(SLIDERBAR_MODEL, SKETCHPAD_MODEL);
})