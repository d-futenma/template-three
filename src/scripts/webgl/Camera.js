import WebGL from './WebGL'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export default class Camera {
  constructor() {
    this.webgl = new WebGL()
    this.sizes = this.webgl.sizes
    this.scene = this.webgl.scene
    this.canvas = this.webgl.canvas

    this.param = {
      fovy: 100,
      aspect: this.sizes.width / this.sizes.height,
      near: 0.1,
      far: 10.0,
      x: 0.0,
      y: 0.0,
      z: 1.0,
      lookAt: new THREE.Vector3(0.0, 0.0, 0.0),
    }

    this.setInstance()
    this.setControls()
  }

  setInstance() {
    const { fovy, aspect, near, far, x, y, z } = this.param
    this.instance = new THREE.PerspectiveCamera(fovy, aspect, near, far)
    this.instance.position.set(x, y, z)
    this.scene.add(this.instance)
  }

  setControls() {
    this.controls = new OrbitControls(this.instance, this.canvas)
    this.controls.enableDamping = true
  }

  resize() {
    this.instance.aspect = this.sizes.width / this.sizes.height
    this.instance.updateProjectionMatrix()
  }

  update() {
    this.controls.update()
  }
}
