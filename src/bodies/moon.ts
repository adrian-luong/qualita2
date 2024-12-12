import { Scene, StandardMaterial, Texture, Vector3 } from "@babylonjs/core";
import { CelestialBody } from "./celestialBody";

export class Moon extends CelestialBody {
    constructor(scene: Scene) {
        super('moon', 0.5, new Vector3(15, 0, 0), scene);

        const mat = new StandardMaterial("moon-texture");
        mat.diffuseTexture = new Texture("textures/moon.jpg", scene);
        this.mesh.material = mat;
    }
}