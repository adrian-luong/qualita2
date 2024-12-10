/**
 * Create the canvas html element and attach it to the webpage
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
 */
export function choice<T>(array: T[]) {
    const i = Math.floor(Math.random() * array.length);
    return array[i];
}
