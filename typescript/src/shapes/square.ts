function square(sideLen: number): Shape {
    sideLen
    return {
        computeArea: function (): number {
            return sideLen * sideLen
        }
    }
}

export { square }