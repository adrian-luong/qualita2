import "@babylonjs/core/Debug/debugLayer";
import "@babylonjs/inspector";
import "@babylonjs/loaders/glTF";

import { Engine, Scene, Sound, EngineFactory, Vector3, ArcRotateCamera, ArcRotateCameraGamepadInput, Mesh, Color3, Color4, VolumetricLightScatteringPostProcess, Texture } from "@babylonjs/core";
import { choice, createCanvas } from "./helper";
import { Sun } from "./bodies/sun";
import { Earth } from "./bodies/earth";
import { Moon } from "./bodies/moon";
// import { Loader } from "./loader";
// import { Sphere } from "./player/player";

// App class is our entire game application
class App {
    // General Entire Application
    private _scene!: Scene;
    private _engine!: Engine;
    private _canvas: HTMLCanvasElement

    //Game State Related
    public assets;

    //Sounds
    // public sfx: Sound;
    public game!: Sound;
    public end!: Sound;
    private _tile!: Mesh;
    private _sounds;

    constructor() {
        // initialize babylon scene and engine
        this._canvas = createCanvas();
        EngineFactory.CreateAsync(this._canvas, { stencil: true }).then(async (engine) => {
            this._engine = engine as Engine
            this._scene = new Scene(engine);
            // this._sounds = loadSounds(this._scene);
            await this._makeScene()
            await this._main();
        });
    }

    private async _makeScene() {
        // const loader = new Loader(this._scene);
        // this._scene.clearColor = Color4.FromColor3(Color3.Black(), 1)

        // Camera & its controls
        const camera = new ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 4, 10, Vector3.Zero());
        camera.attachControl(this._canvas, true);
        camera.inputs.add(new ArcRotateCameraGamepadInput());

        // The sun light and animation
        const sun = new Sun(this._scene);
        sun.light.parent = camera;

        const earth = new Earth(this._scene);
        earth.orbit(10, sun)

        const moon = new Moon(this._scene);
        moon.orbit(5, earth)

        // Physics
        // this._scene.gravity = new Vector3(0, -0.9, 0);
        // this._scene.collisionsEnabled = true;

        // Player
        // const shadowGenerator = new ShadowGenerator(128, light);
        // const player = new Player(this._scene, shadowGenerator);

        // Background
        // Sounds
    }

    private async _main(): Promise<void> {
        // Register a render loop to repeatedly render the scene
        this._engine.runRenderLoop(() => {
            this._scene.debugLayer.show();
            this._scene.render();
        })

        //resize if the screen is resized/rotated
        window.addEventListener('resize', () => {
            this._engine.resize();
        });
    }

}
new App();