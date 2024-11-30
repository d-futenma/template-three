export default class AxesHelper {
  constructor(scene) {
    this.scene = scene

    this.setupAxesHelper()
  }

  setupAxesHelper() {
    const axesBarLength = 5.0
    const axesHelper = new THREE.AxesHelper(axesBarLength)
    this.scene.add(axesHelper)
  }
}
