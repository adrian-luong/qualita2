import { MeshBuilder, Scene, Vector3 } from "@babylonjs/core";

/**
 * Create the canvas html element and attach it to the webpage
 * @returns a HTML's <canvas> element
 */
export function createCanvas() {
    var canvas = document.createElement("canvas");
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.id = "gameCanvas";
    document.body.appendChild(canvas);

    return canvas
}

/**
 * A similar function to that in Python, where a random value of an array is returned every call
 * @param array - whichever desired array
 * @param T - a generic, for the sake of typing
 * @returns 
 */
export function choice<T>(array: T[]) {
    const i = Math.floor(Math.random() * array.length);
    return array[i];
}

/**
 * Create a circle from a center point (X, Y, Z) with a radius
 * @param name - the circle's name
 * @param center - its center, as a Vector3 position
 * @param radius - its radius
 * @param scene - the scene for it to display
 * @returns a Mesh
 */
export function createCircle(name: string, center: Vector3, radius: number, scene: Scene) {
    const arcPoints: Vector3[] = [];
    for (var i = -Math.PI; i <= Math.PI; i += Math.PI / 360) {
        arcPoints.push(new Vector3(center.x + radius * Math.cos(i), center.y, center.z + radius * Math.sin(i)));
    }
    return MeshBuilder.CreateLines(name, { points: arcPoints }, scene);
}