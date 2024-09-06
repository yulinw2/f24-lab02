import { newRenderer } from "./renderer.js"
import { circle } from "./shapes/circle.js";
import { rectangle } from "./shapes/rectangle.js";

// const renderer = newRenderer(rectangle(2, 3))
const renderer = newRenderer(circle(2))
renderer.draw();