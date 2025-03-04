import Time from "@/scripts/webgl/utils/Time";
import Sizes from "@/scripts/webgl/utils/Sizes";
import OrbitControls from "@/scripts/webgl/utils/OrbitControls";
import Stage from "@/scripts/webgl/Stage";
import Mesh from "@/scripts/webgl/Mesh";

export default class Canvas {
  private canvas: HTMLCanvasElement | null;
  private time!: Time;
  private sizes!: Sizes;
  private stage!: Stage;
  private mesh!: Mesh;
  private orbitControls!: OrbitControls;

  constructor() {
    this.canvas = document.querySelector<HTMLCanvasElement>("[data-webgl]");
    if (!this.canvas) return;

    this.init();
  }

  private init() {
    this.time = new Time();
    this.sizes = new Sizes();
    this.stage = new Stage(this.canvas!, this.sizes);
    this.mesh = new Mesh(this.stage.scene, this.time);
    this.orbitControls = new OrbitControls(this.canvas!, this.stage.camera);

    this.bindEvents();
  }

  private bindEvents() {
    this.time.addEventListener("tick", this.update.bind(this));
    this.sizes.addEventListener("resize", this.resize.bind(this));
  }

  private update() {
    this.stage.update();
    this.mesh.update();
    this.orbitControls.update();
  }

  private resize() {
    this.stage.resize();
  }
}
