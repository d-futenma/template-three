import fragment from '@/shaders/fragment.glsl'
import vertex from '@/shaders/vertex.glsl'

export default class Mesh {
  constructor(stage, resources = null) {
    this.scene = stage.scene
    this.resources = resources

    this.create()
  }

  create() {
    const geometry = new THREE.PlaneGeometry(1.0, 1.0)

    this.material = new THREE.ShaderMaterial({
      vertexShader: vertex,
      fragmentShader: fragment,
      side: THREE.DoubleSide,
      transparent: true,
      depthWrite: false,
      extensions: {
        derivatives: '#extension GL_OES_standard_derivatives : enable'
      },
      uniforms: {
        uTime: { type: 'f', value: 0 },
      },
    })

    const plane = new THREE.Mesh(geometry, this.material)
    this.scene.add(plane)
  }
}
