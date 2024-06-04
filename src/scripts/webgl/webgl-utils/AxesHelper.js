import WebGL from '../WebGL'

export default class AxesHelper {
  constructor() {
    this.webgl = new WebGL()
    this.scene = this.webgl.scene

    this.setupAxesHelper()
  }

  setupAxesHelper() {
    const axesBarLength = 5.0
    this.axesHelper = new THREE.AxesHelper(axesBarLength)
    this.scene.add(this.axesHelper)
  }
}
