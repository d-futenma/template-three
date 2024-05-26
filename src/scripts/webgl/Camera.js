import WebGL from './WebGL'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export default class Camera {
  constructor() {
    this.webgl = new WebGL()
    this.sizes = this.webgl.sizes
    this.scene = this.webgl.sceneInstance
    this.canvas = this.webgl.canvas

    this.params = {
      fovy: 70,
      aspect: this.sizes.width / this.sizes.height,
      near: 0.001,
      far: 1000,
      x: 0,
      y: 0,
      z: 2,
    }

    this.setupCamera()
    this.setupCameraControls()
  }

  setupCamera() {
    const { fovy, aspect, near, far, x, y, z } = this.params
    this.camera = new THREE.PerspectiveCamera(fovy, aspect, near, far)
    this.camera.position.set(x, y, z)
    this.scene.add(this.camera)
  }

  setupCameraControls() {
    this.cameraControls = new OrbitControls(this.camera, this.canvas)
    this.cameraControls.enableDamping = true
  }
}
