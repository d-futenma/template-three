import WebGL from '../WebGL.js'
import fragment from '../../../shaders/fragment.glsl'
import vertex from '../../../shaders/vertex.glsl'

export default class World {
  constructor() {
    this.webgl = new WebGL()
    this.sizes = this.webgl.sizes
    this.scene = this.webgl.scene

    this.createObject()
  }

  createObject() {
    const geometry = new THREE.PlaneGeometry(1.0, 1.0)

    this.material = new THREE.ShaderMaterial({
      vertexShader: vertex,
      fragmentShader: fragment,
      uniforms: {
        uTime: { type: 'f', value: 0 },
        uTextureAspect: { value: this.sizes.aspect },
        uScreenAspect: { value: this.sizes.aspect },
      },
      side: THREE.DoubleSide,
      transparent: true,
      depthWrite: false,
    })

    const plane = new THREE.Mesh(geometry, this.material)
    this.scene.add(plane)
  }
}
