import Sizes from './webgl-utils/Sizes'
import Time from './webgl-utils/Time'
import Camera from './Camera'
import Renderer from './Renderer'
import World from './world/World'
import Debug from './webgl-utils/Debug'

let instance = null

export default class WebGL {
  constructor() {
    if (instance) return instance
    instance = this

    this.canvas = document.querySelector('[data-webgl]')
    this.debug = new Debug()
    this.sizes = new Sizes()
    this.time = new Time()
    this.scene = new THREE.Scene()
    this.camera = new Camera()
    this.renderer = new Renderer()
    this.world = new World()

    this.bindEvents()
  }

  bindEvents() {
    this.sizes.on('resize', () => {
      this.resize()
    })

    this.time.on('tick', () => {
      this.update()
    })
  }

  resize() {
    this.camera.resize()
    this.renderer.resize()
  }

  update() {
    this.camera.update()
    this.renderer.update()
  }
}
