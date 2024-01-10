import Stage from './Stage'
import Mesh from './Mesh'
import Resize from './Resize'

export default class WebGL {
  constructor() {
    this.stage
    this.mesh
    this.resize

    this.$canvas = document.querySelector('[data-webgl]')

    this.createStage()
    this.createMesh()
    this.createResize()
  }

  createStage() {
    this.stage = new Stage()
  }

  createMesh() {
    this.mesh = new Mesh(this.stage.scene)
  }

  createResize() {
    this.resize = new Resize(this.stage.camera, this.stage.renderer)
  }
}
