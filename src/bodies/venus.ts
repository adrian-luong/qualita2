import { Scene, StandardMaterial, Texture, Vector3 } from "@babylonjs/core";
import { CelestialBody } from "./celestialBody";

export class Venus extends CelestialBody {
    constructor(scene: Scene) {
        super('venus', 0.9499, Vector3.Zero(), scene)

        const mat = new StandardMaterial("venus-texture");
        mat.diffuseTexture = new Texture("textures/venus.jpg", scene);
        this.mesh.material = mat;
    }
}