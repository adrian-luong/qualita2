import { Scene, StandardMaterial, Texture, Vector3 } from "@babylonjs/core";
import { CelestialBody } from "./celestialBody";

export class Mercury extends CelestialBody {
    constructor(scene: Scene) {
        super('mercury', 0.3829, Vector3.Zero(), scene)

        const mat = new StandardMaterial("mercury-texture");
        mat.diffuseTexture = new Texture("textures/mercury.jpg", scene);
        this.mesh.material = mat;
    }
}