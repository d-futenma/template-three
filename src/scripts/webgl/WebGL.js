import AxesHelper from './webgl-utils/AxesHelper'
import Debug from './webgl-utils/Debug'
import Sizes from './webgl-utils/Sizes'
import Time from './webgl-utils/Time'
import Camera from './Camera'
import OrbitControls from './webgl-utils/OrbitControls';
import Renderer from './Renderer'
import World from './world/World'

let instance = null

export default class WebGL {
  constructor() {
    if (instance) return instance
    instance = this

    this.canvas = document.querySelector('[data-webgl]')

    this.scene = new THREE.Scene()
    this.axesHelper = new AxesHelper()
    this.debug = new Debug()
    this.sizes = new Sizes()
    this.time = new Time()
    this.camera = new Camera()
    this.orbitControls = new OrbitControls()
    this.renderer = new Renderer()
    this.world = new World()
    this.bindEvents()
  }

  bindEvents() {
    this.time.on('tick', () => this.update())
    this.sizes.on('resize', () => this.handleResize())
  }

  update() {
    this.renderer.update()
    this.orbitControls.update()
  }

  handleResize() {
    this.renderer.handleResize()
    this.camera.handleResize()
  }
}
