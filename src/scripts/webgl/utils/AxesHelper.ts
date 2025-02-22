import { Scene, AxesHelper as ThreeAxesHelper } from "three";

export default class AxesHelper {
  private scene: Scene;

  constructor(scene: Scene) {
    this.scene = scene;

    this.setupAxesHelper();
  }

  private setupAxesHelper() {
    const axesBarLength = 5.0;
    const axesHelper = new ThreeAxesHelper(axesBarLength);
    this.scene.add(axesHelper);
  }
}
