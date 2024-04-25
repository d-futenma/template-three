import WebGL from '../WebGL.js'

export default class World {
  constructor() {
    this.webgl = new WebGL()
    this.scene = this.webgl.scene

    this.init()
  }

  init() {
    // this.loadTexture()
    this.create()
  }

  // loadTexture() {
  //   this.textureLoader = new THREE.TextureLoader()
  //   this.texture = this.textureLoader.load('/assets/img/img.png')
  // }

  create() {
    // Test mesh
    this.params = {
      width: 1,
      height: 1,
      color: 0xff0000,
      side: THREE.DoubleSide,
    }

    const { width, height, color, side } = this.params
    
    this.planeGeometry = new THREE.PlaneGeometry(width, height)
    this.planeMaterial = new THREE.MeshBasicMaterial({ color, side})

    const testMesh = new THREE.Mesh(
      this.planeGeometry,
      this.planeMaterial
    )
    // Test mesh
    
    this.scene.add(testMesh)
  }
}
