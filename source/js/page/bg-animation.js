import { randomNum } from "../utils/random.js";

class Particle {
  constructor(x, y, vx, vy, radius, windowSize) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.radius = radius;
    this.windowSize = windowSize;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }

  update() {
    if (this.x <= 0 || this.x >= this.windowSize.width) {
      this.vx = -this.vx;
    }
    if (this.y <= 0 || this.y >= this.windowSize.height) {
      this.vy = -this.vy;
    }
    this.x += this.vx;
    this.y += this.vy;
  }
}

export default class BgAnimation {
  constructor() {
    const _this = this;
    _this._init();
    $(window).on('resize', function () {
      _this._initCanvas();
    });
  }
  _init() {
    this._initCanvas();
    this.particleList = [];
    for (let i = 0; i < this.limit; i++) {
      this._addParticle();
    }
    this._start(this);
  }
  _initCanvas() {
    this.width = $(window).width();
    this.height = $(window).height();
    const canvas = $('#bg-canvas')[0];
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
  _start(self) {
    self.ctx.clearRect(0, 0, self.width, self.height);
    const len = self.particleList.length;
    if (self.limit > len) {
      for (let i = len; i < self.limit; i++) {
        self._addParticle();
      }
    }
    for (let i = 0; i < self.limit; i++) {
      self.particleList[i].draw(self.ctx);
      self.particleList[i].update();
    }
    self.AFId = requestAnimationFrame(() => self._start(self));
  }
  _addParticle() {
    this.particleList.push(new Particle(
      randomNum(0, this.width),
      randomNum(0, this.height),
      randomNum(-1, 1),
      randomNum(-1, 1),
      randomNum(1, 6),
      { width: this.width, height: this.height }
    ));
  }
}