import WebGL from '../WebGL.js'
import fragment from '../../../shaders/fragment.glsl'
import vertex from '../../../shaders/vertex.glsl'

export default class World {
  constructor() {
    this.webgl = new WebGL()
    this.scene = this.webgl.scene

    this.init()
  }

  init() {
    this.create()
  }

  create() {
    this.material = new THREE.ShaderMaterial({
      vertexShader: vertex,
      fragmentShader: fragment,
      uniforms: {
        uTime: { type: 'f', value: 0 },
      },
      side: THREE.DoubleSide,
      transparent: true,
      depthWrite: false,
      // wireframe: true,
    })

    this.geometry = new THREE.PlaneGeometry(1, 1, 1, 1)

    this.plane = new THREE.Mesh(this.geometry, this.material)
    this.scene.add(this.plane)
  }
}
