"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _random = require("../utils/random.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Particle =
/*#__PURE__*/
function () {
  function Particle(x, y, vx, vy, radius, windowSize) {
    _classCallCheck(this, Particle);

    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.radius = radius;
    this.windowSize = windowSize;
  }

  _createClass(Particle, [{
    key: "draw",
    value: function draw(ctx) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
    }
  }, {
    key: "update",
    value: function update() {
      if (this.x <= 0 || this.x >= this.windowSize.width) {
        this.vx = -this.vx;
      }

      if (this.y <= 0 || this.y >= this.windowSize.height) {
        this.vy = -this.vy;
      }

      this.x += this.vx;
      this.y += this.vy;
    }
  }]);

  return Particle;
}();

var BgAnimation =
/*#__PURE__*/
function () {
  function BgAnimation() {
    _classCallCheck(this, BgAnimation);

    var _this = this;

    _this._init();

    $(window).on('resize', function () {
      _this._initCanvas();
    });
  }

  _createClass(BgAnimation, [{
    key: "_init",
    value: function _init() {
      this._initCanvas();

      this.particleList = [];

      for (var i = 0; i < this.limit; i++) {
        this._addParticle();
      }

      this._start(this);
    }
  }, {
    key: "_initCanvas",
    value: function _initCanvas() {
      this.width = $(window).width();
      this.height = $(window).height();
      var canvas = $('#bg-canvas')[0];
      canvas.width = this.width;
      canvas.height = this.height;
      this.ctx = canvas.getContext('2d');
      this.ctx.shadowBlur = 20;
      this.ctx.shadowOffsetX = 0;
      this.ctx.shadowOffsetY = 0;
      this.ctx.shadowColor = "#fc6423";
      this.ctx.fillStyle = "#ffffff";
      this.limit = this.width * this.height * 0.00006;
    }
  }, {
    key: "_start",
    value: function _start(self) {
      self.ctx.clearRect(0, 0, self.width, self.height);
      var len = self.particleList.length;

      if (self.limit > len) {
        for (var i = len; i < self.limit; i++) {
          self._addParticle();
        }
      }

      for (var _i = 0; _i < self.limit; _i++) {
        self.particleList[_i].draw(self.ctx);

        self.particleList[_i].update();
      }

      self.AFId = requestAnimationFrame(function () {
        return self._start(self);
      });
    }
  }, {
    key: "_addParticle",
    value: function _addParticle() {
      this.particleList.push(new Particle((0, _random.randomNum)(0, this.width), (0, _random.randomNum)(0, this.height), (0, _random.randomNum)(-1, 1), (0, _random.randomNum)(-1, 1), (0, _random.randomNum)(1, 6), {
        width: this.width,
        height: this.height
      }));
    }
  }]);

  return BgAnimation;
}();

exports["default"] = BgAnimation;