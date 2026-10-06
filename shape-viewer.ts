import { Shape } from "./shapes.js";

/**
 * Displays shapes on a HTML canvas element.
 */
export class ShapeViewer {

    // The 2D rendering context of the canvas.
    private ctx: CanvasRenderingContext2D;

    // The shapes currently displayed by the viewer.
    private shapes: Shape[];

    /**
     * Constructs a ShapeViewer using the specified canvas element.
     * @param canvasElement the HTML canvas element used to display the shapes.
     */
    public constructor(canvasElement: HTMLCanvasElement) {
        this.ctx = canvasElement.getContext("2d")!;
        this.shapes = [];
    }

    /**
     * Adds multiple shapes to the viewer and redraws the canvas.
     * @param shapes the shapes to add to the viewer.
     */
    public addShapes(shapes: Shape[]): void {
        this.shapes.push(...shapes);
        this.draw();
    }

    /**
     * Adds a shape to the viewer and redraws the canvas.
     * @param shape the shape to add to the viewer.
     */
    public addShape(shape: Shape): void {
        this.shapes.push(shape);
        this.draw();
    }

    /**
     * Clears the canvas and draws all shapes currently stored in the viewer.
     */
    private draw(): void {
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
