import WebGL from './WebGL'

export default class Camera {
  constructor() {
    this.webgl = new WebGL()
    this.sizes = this.webgl.sizes
    this.scene = this.webgl.scene

    this.cameraParams = {
      fovy: 70,
      aspect: this.sizes.width / this.sizes.height,
      near: 0.001,
      far: 1000.0,
      x: 0.0,
      y: 0.0,
      z: 2.0,
      lookAt: new THREE.Vector3(0.0, 0.0, 0.0),
    }

    this.setupCamera()
  }

  setupCamera() {
    const { fovy, aspect, near, far, x, y, z, lookAt } = this.cameraParams
    this.camera = new THREE.PerspectiveCamera(fovy, aspect, near, far)
    this.camera.position.set(x, y, z)
    this.camera.lookAt(lookAt);
    this.scene.add(this.camera)
  }

  handleResize() {
    this.camera.aspect = this.sizes.width / this.sizes.height
    this.camera.updateProjectionMatrix()
  }
}
