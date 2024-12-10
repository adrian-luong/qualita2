import { MeshBuilder, Scene, ShadowGenerator } from "@babylonjs/core";

export class Player {
    constructor(scene: Scene, shadowGen: ShadowGenerator) {
        const sphere = MeshBuilder.CreateSphere("sphere", { diameter: 2, segments: 32 }, scene);
        sphere.position.y = 1; // Move the sphere upward at 4 units

        shadowGen.useBlurExponentialShadowMap = true;
        shadowGen.addShadowCaster(sphere);
        // var sphereAggregate = new PhysicsAggregate(sphere, PhysicsShapeType.SPHERE, { mass: 1, restitution: 0.75 }, scene);
    }
}