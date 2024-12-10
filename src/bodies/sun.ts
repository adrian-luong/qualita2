import { Color3, HemisphericLight, PointLight, Scene, StandardMaterial, Vector3 } from "@babylonjs/core";

export class Sun {
    // public light: PointLight;

    constructor(scene: Scene) {
        const light = new HemisphericLight('sunlight', new Vector3(1, 1, 0), scene)
        const yellow = new Color3(1, 0.875, 0.133)
        light.diffuse = yellow

        // super('sun', 1, sunPos, scene)
        // const composition = new StandardMaterial('sun-material', scene)
        // composition.diffuseColor = yellow;
        // this.mesh.material = composition
    }
}