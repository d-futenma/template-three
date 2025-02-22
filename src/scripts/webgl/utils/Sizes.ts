export default class Sizes extends EventTarget {
  width!: number;
  height!: number;
  aspect!: number;
  pixelRatio!: number;

  constructor() {
    super()
    this.init()
  }

  private init() {
    this.setupSizes()
    this.bindEvent()
  }

  private setupSizes() {
    this.width = window.innerWidth
    this.height = window.innerHeight
    this.aspect = this.width / this.height
    this.pixelRatio = Math.min(window.devicePixelRatio, 2)
  }

  private bindEvent() {
    window.addEventListener('resize', this.handleResize.bind(this))
  }

  private handleResize() {
    this.setupSizes()
    this.dispatchEvent(new Event('resize'));
  }
}
