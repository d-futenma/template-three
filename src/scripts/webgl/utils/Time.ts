import * as THREE from "three";

export default class Time extends EventTarget {
  clock!: THREE.Clock;
  delta: number = 0;
  elapsed: number = 0;

  constructor() {
    super();
    this.init();
  }

  private init() {
    this.setupClock();
    requestAnimationFrame(this.tick.bind(this));
  }

  private setupClock() {
    this.clock = new THREE.Clock();
  }

  private tick() {
    this.delta = this.clock.getDelta();
    this.elapsed = this.clock.getElapsedTime();

    this.dispatchEvent(new Event("tick"));
    requestAnimationFrame(this.tick.bind(this));
  }
}
