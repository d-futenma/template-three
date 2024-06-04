import WebGL from '../WebGL'
import { OrbitControls as OC } from 'three/examples/jsm/controls/OrbitControls.js'

export default class OrbitControls {
  constructor() {
    this.webgl = new WebGL()
    this.canvas = this.webgl.canvas
    this.cameraInstance = this.webgl.camera

    this.setupCameraControls()
  }

  setupCameraControls() {
    this.cameraControls = new OC(this.cameraInstance.camera, this.canvas)
    this.cameraControls.enableDamping = true
  }

  update() {
    this.cameraControls.update()
  }
}
