export {};

const canvas = document.querySelector("canvas")!;
const ctx = canvas.getContext("2d")!;

const rectangle = {
  x: 50,
  y: 50,
  width: 200,
  height: 100,
};

ctx.fillRect(
  rectangle.x,
  rectangle.y,
  rectangle.width,
  rectangle.height
);
