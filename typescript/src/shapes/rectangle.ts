// interface Rectangle {
//     width: number,
//     height: number,
//     computeArea: () => number
// }

function rectangle(width: number, height: number): Shape {
    width
    height
    return {
        computeArea: function (): number {
            return width * height
        }
    }
}

export { rectangle }
