import getRandom from './getRandom';
import getColor from './getRandomColor';
import mapper from './mapper';

class Star {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = getRandom(-ctx.canvas.clientWidth, ctx.canvas.clientWidth);
    this.y = getRandom(-ctx.canvas.clientHeight, ctx.canvas.clientHeight);
    this.z = getRandom(0, ctx.canvas.clientWidth);
    this.color = getColor();
  }

  update() {
    this.z = this.z - 2;

    if (this.z < 1) {
      this.z = this.ctx.canvas.clientWidth;
      this.x = getRandom(-this.ctx.canvas.clientWidth, this.ctx.canvas.clientWidth);
      this.y = getRandom(-this.ctx.canvas.clientHeight, this.ctx.canvas.clientHeight);
    }
  }

  show() {
    this.ctx.fillStyle = this.color;
    const sx = mapper(this.x / this.z, 0, 1, 0, this.ctx.canvas.width);
    const sy = mapper(this.y / this.z, 0, 1, 0, this.ctx.canvas.height);
    const r = mapper(this.z, 0, this.ctx.canvas.width, 16, 0);

    this.ctx.beginPath();
    this.ctx.arc(sx, sy, r, 2 * Math.PI, false);
    this.ctx.fill();
  }
}

export default Star;
