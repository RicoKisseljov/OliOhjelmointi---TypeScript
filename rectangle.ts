export {}

const canvas: HTMLCanvasElement =
    document.getElementById("myCanvas") as HTMLCanvasElement

const ctx: CanvasRenderingContext2D =
    canvas.getContext("2d") as CanvasRenderingContext2D

const rectangleWidth: number = 200
const rectangleHeight: number = 100

const x: number = (canvas.width - rectangleWidth) / 2
const y: number = (canvas.height - rectangleHeight) / 2

ctx.fillStyle = "blue"

ctx.fillRect(
    x,
    y,
    rectangleWidth,
    rectangleHeight
)
