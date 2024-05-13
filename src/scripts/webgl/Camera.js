import WebGL from './WebGL'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export default class Camera {
  constructor() {
    this.webgl = new WebGL()
    this.sizes = this.webgl.sizes
    this.scene = this.webgl.scene
    this.canvas = this.webgl.canvas

    this.params = {
      fovy: 100,
      aspect: this.sizes.width / this.sizes.height,
      near: 0.1,
      far: 10.0,
      x: 0.0,
      y: 0.0,
      z: 1.0,
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

  resize() {
    this.camera.aspect = this.sizes.width / this.sizes.height
    this.camera.updateProjectionMatrix()
  }

  update() {
    this.cameraControls.update()
  }
}
