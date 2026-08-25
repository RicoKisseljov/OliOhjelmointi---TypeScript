export {};

const canvas = document.querySelector("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

const rectangle = {
  x: 50,
  y: 50,
  width: 200,
  height: 100
};

ctx.fillRect(
  rectangle.x,
  rectangle.y,
  rectangle.width,
  rectangle.height
);

const circle = {
  x: 350,
  y: 150,
  radius: 50
};

ctx.beginPath();
ctx.arc(
  circle.x,
  circle.y,
  circle.radius,
  0,
  Math.PI * 2
);
ctx.fill();
