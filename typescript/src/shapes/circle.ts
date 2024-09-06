function circle(radius: number): Shape {
    radius
    return {
        computeArea: function (): number {
            return Math.PI * radius * radius
        }
    }
}

export { circle }
