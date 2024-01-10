export default class Resize {
  static get SIZES() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    }
  }

  constructor(camera, renderer) {
    this.camera = camera
    this.renderer = renderer

    window.addEventListener('resize', () => {
      const { width, height } = Resize.SIZES

      this.renderer.setSize(width, height)
      this.camera.aspect = width / height
      this.camera.updateProjectionMatrix()
    })
  }
}
