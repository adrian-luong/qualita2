import { Scene, StandardMaterial, Texture, Vector3 } from "@babylonjs/core";
import { CelestialBody } from "./celestialBody";

export class Earth extends CelestialBody {
    constructor(scene: Scene) {
        super('earth', 1, new Vector3(12.5, 0, 0), scene)

        const mat = new StandardMaterial("earth-texture");
        mat.diffuseTexture = new Texture("textures/earth.jpg", scene);
        this.mesh.material = mat;
    }
}