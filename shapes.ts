 /**
  * Represents a rectangle with a specified width and height.
  */
export class Rectangle {

    // The width of the rectangle.
    private width: number

    // The height of the rectangle.
    private height: number

    /**
     * Constructs a Rectangle with the specified dimensions.
     * @param width the width of the rectangle.
     * @param height the height of the rectangle.
     */
    public constructor(width: number, height: number) {
        this.width = width
        this.height = height
    }

    /**
     * Calculates the area of the rectangle.
     * @returns the area of the rectangle.
     */
    public area(): number {
        return this.width * this.height
    }
}
