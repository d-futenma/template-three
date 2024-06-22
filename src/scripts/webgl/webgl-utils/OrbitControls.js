import { OrbitControls as OC } from 'three/examples/jsm/controls/OrbitControls.js'

export default class OrbitControls {
  constructor(canvas, camera) {
    this.canvas = canvas
    this.camera = camera

    this.setupCameraControls()
  }

  setupCameraControls() {
    this.cameraControls = new OC(this.camera, this.canvas)
    this.cameraControls.enableDamping = true
  }

  update() {
    this.cameraControls.update()
  }
}
