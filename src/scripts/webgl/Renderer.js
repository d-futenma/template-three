import WebGL from './WebGL.js'

export default class Renderer {
  constructor() {
    this.webgl = new WebGL()
    this.canvas = this.webgl.canvas
    this.sizes = this.webgl.sizes
    this.scene = this.webgl.scene
    this.cameraInstance = this.webgl.camera

    this.setupRenderer()
  }

  setupRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
      antialias: true,
    })
    this.renderer.setClearColor(new THREE.Color(0x000000));
    this.renderer.setSize(this.sizes.width, this.sizes.height)
  }

  update() {
    this.renderer.render(this.scene, this.cameraInstance.camera)
  }

  handleResize() {
    this.renderer.setSize(this.sizes.width, this.sizes.height)
  }
}
