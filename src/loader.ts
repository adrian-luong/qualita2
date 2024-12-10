import { Color3, Scene, StandardMaterial } from "@babylonjs/core";

export class Loader {
    private _scene: Scene
    public assets: {
        materials: StandardMaterial[],
    }

    constructor(scene: Scene) {
        this._scene = scene;

        const dirt = new StandardMaterial("dirt", this._scene);
        dirt.diffuseColor = new Color3(0.749, 0.608, 0.043);

        const grass = new StandardMaterial("grass", this._scene);
        grass.diffuseColor = new Color3(0.247, 0.608, 0.043);

        const freshwater = new StandardMaterial("freshwater", this._scene);
        freshwater.diffuseColor = new Color3(0.302, 0.651, 0.698);

        this.assets = {
            materials: [dirt, grass, freshwater]
        }
    }
}