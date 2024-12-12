import { Mesh, MeshBuilder, Scene, Vector3, Animation, Quaternion, AnimationGroup } from "@babylonjs/core"
import { createCircle } from "../helper"

export class CelestialBody {
    public mesh: Mesh
    private _scene: Scene

    constructor(name: string, radius: number, position: Vector3, scene: Scene) {
        const body = MeshBuilder.CreateSphere(name, { diameter: 2 * radius }, scene)
        body.position = position
        this.mesh = body
        this._scene = scene
    }

    /**
     * Make an animation of this object spinning around another. 
     * @param relDistance - The relative distance between the static body and the orbiting one
     * @param otherBody - A larger mass celestial body for this one to orbit around
     */
    public orbit(relDistance: number, otherBody: CelestialBody, isClockwise = true) {
        this.mesh.parent = otherBody.mesh;
        this.mesh.position = new Vector3(relDistance, 0, 0);
        
        const animFrameRate = 30; //per sec
        const animTime = 5; //secs
        const nbFrames = animTime * animFrameRate - 1;
        const randAxis = new Vector3(0, 0, relDistance);

        const animationRotation = new Animation(
            this.mesh.name + "-orbit-" + otherBody.mesh.name,
            "rotationQuaternion", animFrameRate,
            Animation.ANIMATIONTYPE_QUATERNION, Animation.ANIMATIONLOOPMODE_CYCLE
        );

        const rotationKeys: { frame: number, value: Quaternion }[] = [];
        rotationKeys.push({
            frame: 0,
            value: Quaternion.RotationAxis(randAxis, isClockwise ? Math.PI * 2 : 0)
        });
        rotationKeys.push({
            frame: Math.floor(nbFrames / 2),
            value: Quaternion.RotationAxis(randAxis, isClockwise ? Math.PI : Math.PI / 2)
        });
        rotationKeys.push({
            frame: nbFrames,
            value: Quaternion.RotationAxis(randAxis, isClockwise ? Math.PI / 2 : Math.PI)
        });
        rotationKeys.push({
            frame: 2 * nbFrames,
            value: Quaternion.RotationAxis(randAxis, isClockwise ? 0 : Math.PI * 2)
        });
        
        // Adding orbit line going through this orbit
        const orbit = createCircle(this.mesh.name + '-orbital', otherBody.mesh.position, relDistance, this._scene)
        orbit.rotation.x = Math.PI / 2;
        orbit.parent = otherBody.mesh.parent;

        //Adding keys to the animation object
        animationRotation.setKeys(rotationKeys);
        const animationGroup = new AnimationGroup(this.mesh.name + "-around-" + otherBody.mesh.name,); // Create the animation group
        animationGroup.addTargetedAnimation(animationRotation, otherBody.mesh); // Spin around a pivot
        animationGroup.play(true);
    }
}