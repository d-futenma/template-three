export default class Plane {
  static PLANE_GEOMETRY_PARAM = {
    width: 1,
    height: 1,
  }

  static get PLANE_MATERIAL_PARAM() {
    return {
      color: 0xff0000,
      side: THREE.DoubleSide,
    }
  }

  constructor() {
    const { width, height } = Plane.PLANE_GEOMETRY_PARAM
    const planeMaterialParams = Plane.PLANE_MATERIAL_PARAM

    this.planeGeometry = new THREE.PlaneGeometry(width, height)
    this.planeMaterial = new THREE.MeshBasicMaterial(planeMaterialParams)
  }
}
