import { Color3, PointLight, Scene, StandardMaterial, Texture, Vector3 } from "@babylonjs/core";
import { CelestialBody } from "./celestialBody";

export class Sun extends CelestialBody {
    public light: PointLight;

    constructor(scene: Scene) {
        super('sun', 2, Vector3.Zero(), scene)

        const light = new PointLight("sun-light", Vector3.Zero(), scene);
        light.diffuse = new Color3(1, 1, 1);
        this.light = light;

        // const mat = new StandardMaterial('sun-texture', scene)
        // mat.diffuseTexture = new Texture('textures/sun.png', scene)

        // this.mesh.material = mat;
    }
}