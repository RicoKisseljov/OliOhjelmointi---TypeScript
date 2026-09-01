export {};

const canvas = document.querySelector("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

const rectangle = {
    x: 10,
    y: 20,
    width: 100,
    height: 50,

    draw: function() {
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
};

const circle = {
    x: 200,
    y: 100,
    radius: 50,

    draw: function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
    }
};

rectangle.draw();
circle.draw();
