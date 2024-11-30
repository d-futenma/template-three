import Sizes from './webgl-utils/Sizes'
import Time from './webgl-utils/Time'
import OrbitControls from './webgl-utils/OrbitControls'
import Stage from './Stage.js'
import Mesh from './Mesh.js'

let instance = null

export default class WebGL {
  constructor() {
    if (instance) return instance
    instance = this

    this.init()
  }

  init() {
    this.sizes = new Sizes()
    this.time = new Time()
    this.stage = new Stage(this.sizes)
    this.mesh = new Mesh(this.stage.scene)
    this.orbitControls = new OrbitControls(this.stage.canvas, this.stage.camera)   
    
    this.bindEvents()
  }

  bindEvents() {
    this.time.on('tick', () => this.update())
    this.sizes.on('resize', () => this.resize())
  }

  update() {
    this.stage.update()
    this.orbitControls.update()
  }

  resize() {
    this.stage.resize()
  }
}
