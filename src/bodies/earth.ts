import { MeshBuilder, Scene, Vector3 } from "@babylonjs/core";

export class Earth {
    // public light: PointLight;

    constructor(scene: Scene) {
        const body = MeshBuilder.CreateSphere('earth', {}, scene)
        body.position = new Vector3(1, 0, 0)
        // this.mesh = body
    }
}