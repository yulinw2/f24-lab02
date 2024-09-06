// import { Shape } from './shapes/shape.js";

function newRenderer(object: Shape) {
    return {
        draw() {
            const area: number = object.computeArea()
            console.log("Shape drawn\n" + "Its area is " + area)
        }
    }
}

export { newRenderer }