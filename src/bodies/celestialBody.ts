import { Mesh, MeshBuilder, Scene, Vector3 } from "@babylonjs/core"

export class CelestialBody {
    // Physical characteristics
    public mesh: Mesh

    constructor(name: string, radius: number, position: Vector3, scene: Scene) {
        const body = MeshBuilder.CreateSphere(name, { diameter: 2 * radius }, scene)
        body.position = position
        this.mesh = body
    }
}