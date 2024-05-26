import Debug from './webgl-utils/Debug'
import Sizes from './webgl-utils/Sizes'
import Time from './webgl-utils/Time'
import Camera from './Camera'
import Renderer from './Renderer'
import World from './world/World'

let instance = null

export default class WebGL {
  constructor() {
    if (instance) return instance
    instance = this

    this.canvas = document.querySelector('[data-webgl]')

    this.debug = new Debug()
    this.sizes = new Sizes()
    this.time = new Time()
    
    this.sceneInstance = new THREE.Scene()
    this.cameraInstance = new Camera()
    this.rendererInstance = new Renderer()
    this.worldInstance = new World()
    this.bindEvents()
  }

  bindEvents() {
    this.sizes.on('resize', () => this.resize())
    this.time.on('tick', () => this.update())
  }

  update() {
    this.cameraInstance.cameraControls.update()
    this.rendererInstance.renderer.render(this.sceneInstance, this.cameraInstance.camera)
  }

  resize() {
    this.cameraInstance.camera.aspect = this.sizes.width / this.sizes.height
    this.cameraInstance.camera.updateProjectionMatrix()
    this.rendererInstance.renderer.setSize(this.sizes.width, this.sizes.height)
    this.rendererInstance.renderer.setPixelRatio(this.sizes.pixelRatio)
  }
}
