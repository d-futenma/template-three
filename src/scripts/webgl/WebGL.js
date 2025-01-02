import Sizes from '@/scripts/webgl/webgl-utils/Sizes'
import Time from '@/scripts/webgl/webgl-utils/Time'
import OrbitControls from '@/scripts/webgl/webgl-utils/OrbitControls'
import Stage from '@/scripts/webgl/Stage.js'
import Mesh from '@/scripts/webgl/Mesh.js'

let instance = null

export default class WebGL {
  constructor() {
    if (instance) return instance
    instance = this

    this.canvas = document.querySelector('[data-webgl]')

    this.init()
  }

  init() {
    this.sizes = new Sizes()
    this.time = new Time()
    this.stage = new Stage(this.canvas, this.sizes)
    this.mesh = new Mesh(this.stage)
    this.orbitControls = new OrbitControls(this.canvas, this.stage.camera)
    
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
