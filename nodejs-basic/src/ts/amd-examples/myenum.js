"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorDemo = exports.Color = void 0;
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["BLUE"] = 1] = "BLUE";
    Color[Color["GREEN"] = 2] = "GREEN";
})(Color = exports.Color || (exports.Color = {}));
class ColorDemo {
    constructor() {
        this.myColor = Color.GREEN;
    }
    test() {
        console.log(this.myColor);
    }
    getMyColor() {
        return this.myColor;
    }
}
exports.ColorDemo = ColorDemo;
