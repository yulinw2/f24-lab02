"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.circle = circle;
function circle(radius) {
    radius;
    return {
        computeArea: function () {
            return Math.PI * radius * radius;
        }
    };
}
