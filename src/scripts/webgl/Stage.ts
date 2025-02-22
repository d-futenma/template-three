import * as THREE from "three";

export default class Stage {
  private canvas: HTMLCanvasElement;
  private sizes: { width: number; height: number };
  private renderer!: THREE.WebGLRenderer;
  scene!: THREE.Scene;
  camera!: THREE.PerspectiveCamera;

  constructor(canvas: HTMLCanvasElement, sizes: { width: number; height: number }) {
    this.canvas = canvas;
    this.sizes = sizes;

    this.init();
  }

  private get cameraParams() {
    return {
      fovy: 70,
      aspect: this.sizes.width / this.sizes.height,
      near: 0.1,
      far: 100.0,
      x: 0.0,
      y: 0.0,
      z: 2.0,
      lookAt: new THREE.Vector3(0.0, 0.0, 0.0),
    };
  }

  private init() {
    this.setupRenderer();
    this.setupScene();
    this.setupCamera();
  }

  private setupRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
      antialias: true,
    });
    this.renderer.setClearColor(new THREE.Color(0xffffff));
    this.renderer.setSize(this.sizes.width, this.sizes.height);
  }

  private setupScene() {
    this.scene = new THREE.Scene();
  }

  private setupCamera() {
    const { fovy, aspect, near, far, x, y, z, lookAt } = this.cameraParams;
    this.camera = new THREE.PerspectiveCamera(fovy, aspect, near, far);
    this.camera.position.set(x, y, z);
    this.camera.lookAt(lookAt);
    this.scene.add(this.camera);
  }

  update() {
    this.renderer.render(this.scene, this.camera);
  }

  resize() {
    this.renderer.setSize(this.sizes.width, this.sizes.height);
    this.camera.aspect = this.sizes.width / this.sizes.height;
    this.camera.updateProjectionMatrix();
  }
}
