import { ShapeViewer } from "./shape-viewer.js"

/**
 * Defines an action that can be performed on a canvas.
 */
export interface CanvasAction {

    readonly name: string

    readonly status: string

    readonly id: string
}

/**
 * Provides the common functionality for canvas actions.
 */
export abstract class BaseAction implements CanvasAction {

    protected shapeViewer: ShapeViewer

    public abstract readonly name: string

    public abstract readonly status: string

    public get id(): string {
        return this.name.toLowerCase().split(" ").join("-")
    }

    public constructor(shapeViewer: ShapeViewer) {
        this.shapeViewer = shapeViewer
    }
}

/**
 * Represents an action used to select a shape from the canvas.
 */
export class SelectAction extends BaseAction {

    public get name(): string {
        return "Select"
    }

    public get status(): string {
        return "Click the drawing area to select a shape"
    }

}

/**
 * Represents an action used to add a shape to the canvas.
 */
export class AddShapeAction extends BaseAction {

    private shapeName: string

    public constructor(
        shapeViewer: ShapeViewer,
        shapeName: string
    ) {
        super(shapeViewer)
        this.shapeName = shapeName
    }

    public get name(): string {
        return `Add ${this.shapeName}`
    }

    public get status(): string {
        return `Click the drawing area to add a ${this.shapeName.toLowerCase()}`
    }

}
