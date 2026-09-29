import { Shape } from "./shapes.js";

export class ShapeViewer {
    ctx: CanvasRenderingContext2D;
    shapes: Shape[];

    constructor(canvasElement: HTMLCanvasElement) {
        this.ctx = canvasElement.getContext("2d")!;
        this.shapes = [];
    }

    addShapes(shapes: Shape[]): void {
        this.shapes.push(...shapes);
        this.draw();
    }

    addShape(shape: Shape): void {
        this.shapes.push(shape);
        this.draw();
    }

    draw(): void {
        this.ctx.clearRect(
            0,
            0,
            this.ctx.canvas.width,
            this.ctx.canvas.height
        );

        for (const shape of this.shapes) {
            shape.draw(this.ctx);
        }
    }
}
