import fragment from '../../shaders/fragment.glsl'
import vertex from '../../shaders/vertex.glsl'

export default class Mesh {
  constructor(scene, resources = null) {
    this.scene = scene

    this.create()
  }

  create() {
    const geometry = new THREE.PlaneGeometry(1.0, 1.0)

    this.material = new THREE.ShaderMaterial({
      vertexShader: vertex,
      fragmentShader: fragment,
      uniforms: {
        uTime: { type: 'f', value: 0 },
      },
      side: THREE.DoubleSide,
      transparent: true,
      depthWrite: false,
    })

    const plane = new THREE.Mesh(geometry, this.material)
    this.scene.add(plane)
  }
}
