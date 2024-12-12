import { Color3, PointLight, Scene, StandardMaterial, Texture, Vector3 } from "@babylonjs/core";
import { CelestialBody } from "./celestialBody";

export class Sun extends CelestialBody {
    public light: PointLight;

    constructor(scene: Scene) {
        super('sun', 1, Vector3.Zero(), scene);
        const white = new Color3(1, 1, 1);
        const mat = new StandardMaterial('sun-texture', scene);
        mat.diffuseTexture = new Texture('textures/sun.jpg', scene);
        mat.diffuseColor = white
        mat.specularColor = white
        mat.emissiveColor = white
        this.mesh.material = mat;

        const light = new PointLight("sun-light", Vector3.Zero(), scene);
        light.diffuse = white
        light.specular = white
        this.light = light;
    }
}