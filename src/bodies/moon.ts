import { Scene, Vector3 } from "@babylonjs/core";
import { CelestialBody } from "./celestialBody";

export class Moon extends CelestialBody {
    // public light: PointLight;

    constructor(scene: Scene) {
        super('moon', 0.5, new Vector3(1.5, 0, 0), scene);
    }
}