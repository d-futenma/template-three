import { Camera } from "three";
import { OrbitControls as OC } from "three/examples/jsm/controls/OrbitControls.js";

export default class OrbitControls {
  private canvas: HTMLCanvasElement;
  private camera: Camera;
  private orbitControls!: OC;

  constructor(canvas: HTMLCanvasElement, camera: Camera) {
    this.canvas = canvas;
    this.camera = camera;

    this.setupCameraControls();
  }

  private setupCameraControls() {
    this.orbitControls = new OC(this.camera, this.canvas);
    this.orbitControls.enableDamping = true;
  }

  update() {
    this.orbitControls.update();
  }
}
