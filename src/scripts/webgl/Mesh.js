import Plane from './objects/Plane'

export default class Mesh {
  constructor(scene) {
    this.createObject()

    this.scene = scene
    this.mesh = new THREE.Mesh(
      this.PlaneInstance.planeGeometry,
      this.PlaneInstance.planeMaterial
    )
    this.scene.add(this.mesh)
  }

  createObject() {
    this.PlaneInstance = new Plane()
  }
}
