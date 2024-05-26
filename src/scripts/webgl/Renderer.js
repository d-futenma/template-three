import WebGL from './WebGL.js'

export default class Renderer {
  constructor() {
    this.webgl = new WebGL()
    this.canvas = this.webgl.canvas
    this.sizes = this.webgl.sizes

    this.setupRenderer()
  }

  setupRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
      antialias: true,
    })
    this.renderer.setSize(this.sizes.width, this.sizes.height)
    this.renderer.setPixelRatio(this.sizes.pixelRatio)
  }
}
