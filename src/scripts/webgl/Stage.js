export default class Stage {
  static get SIZES() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    }
  }

  static get CAMERA_PARAM() {
    return {
      fovy: 75,
      aspect: Stage.SIZES.width / Stage.SIZES.height,
      near: 0.1,
      far: 10.0,
      x: 0.0,
      y: 0.0,
      z: 1.0,
      lookAt: new THREE.Vector3(0.0, 0.0, 0.0),
    }
  }

  static get RENDERER_PARAM() {
    return {
      width: Stage.SIZES.width,
      height: Stage.SIZES.height,
      clearColor: 0x000000,
    }
  }

  constructor() {
    this.scene
    this.camera
    this.renderer

    this.$canvas = document.querySelector('[data-webgl]')

    this.setup()
  }

  setup() {
    this.createScene()
    this.createCamera()
    this.createRenderer()
  }

  createScene() {
    this.scene = new THREE.Scene()
  }

  createCamera() {
    const { fovy, aspect, near, far, x, y, z, lookAt } = Stage.CAMERA_PARAM

    this.camera = new THREE.PerspectiveCamera(fovy, aspect, near, far)
    this.camera.position.set(x, y, z)
    this.camera.lookAt(lookAt)
    this.scene.add(this.camera)
  }

  createRenderer() {
    const { width, height, clearColor } = Stage.RENDERER_PARAM

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.$canvas,
      alpha: true,
      antialias: true,
    })
    this.renderer.setSize(width, height)
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    this.renderer.setClearColor(clearColor, 0)
    this.renderer.render(this.scene, this.camera)

    this.render = this.render.bind(this)
    this.render()
  }

  render() {
    this.renderer.render(this.scene, this.camera)
    window.requestAnimationFrame(this.render)
  }
}
