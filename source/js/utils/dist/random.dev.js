"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.randomNum = randomNum;
exports.randomColor = randomColor;

function randomNum(min, max) {
  return min + Math.random() * (max - min);
}

function randomColor() {
  var r = randomNum(0, 255);
  var g = randomNum(0, 255);
  var b = randomNum(0, 255);
  return "rgb(".concat(r, ", ").concat(g, ", ").concat(b, ")");
}