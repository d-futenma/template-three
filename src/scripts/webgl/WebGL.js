import Sizes from './webgl-utils/Sizes'
import Time from './webgl-utils/Time'
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
    
    this.bindEvents()
  }

  bindEvents() {
    this.time.on('tick', () => this.update())
    this.sizes.on('resize', () => this.resize())
  }

  update() {
    this.stage.update()
  }

  resize() {
    this.stage.resize()
  }
}
