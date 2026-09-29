import { ShapeViewer } from "./shape-viewer.js";
import { Rectangle, Circle } from "./shapes.js";

const canvas = document.querySelector("#canvas") as HTMLCanvasElement;

const viewer = new ShapeViewer(canvas);

const rectangle = new Rectangle(50, 50, 150, 100);
const circle = new Circle(300, 150, 75);

viewer.addShape(rectangle);
viewer.addShape(circle);
