import EventEmitter from '../../utils/EventEmitter'

export default class Sizes extends EventEmitter {
  constructor() {
    super()

    this.init()
  }

  init() {
    this.setupSizes()
    this.bindEvent()
  }

  setupSizes() {
    this.width = window.innerWidth
    this.height = window.innerHeight
    this.aspect = this.width / this.height
    this.pixelRatio = Math.min(window.devicePixelRatio, 2)
  }

  bindEvent() {
    window.addEventListener('resize', () => this.handleResize())
  }

  handleResize() {
    this.setupSizes()
    this.trigger('resize')
  }
}
