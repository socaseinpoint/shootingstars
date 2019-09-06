/* eslint-disable no-self-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
import Star from './Star';

const STARS_QUANTITY = 1000;
const speed = 10;

function setup(ctx, qty) {
  const stars = [];
  stars.length = qty;
  for (let i = 0; i < stars.length; i++) {
    stars[i] = new Star(ctx);
  }
  ctx.translate(window.innerWidth, window.innerHeight);
  return stars;
}

function draw(stars, ctx, canvas) {
  return setInterval(() => {
    canvas.width = canvas.width;
    ctx.translate(ctx.canvas.width / 2, ctx.canvas.height / 2);
    for (let i = 0; i < stars.length; i++) {
      stars[i].update();
      stars[i].show();
    }
  }, speed);
}

window.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  const stars = setup(ctx, STARS_QUANTITY);
  draw(stars, ctx, canvas);
});
