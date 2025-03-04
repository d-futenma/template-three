import * as THREE from "three";
import Time from "@/scripts/webgl/utils/Time";
import fragment from "@/shaders/fragment.glsl";
import vertex from "@/shaders/vertex.glsl";

export default class Mesh {
  private scene: THREE.Scene;
  private time: Time;

  private material!: THREE.ShaderMaterial;

  constructor(scene: THREE.Scene, time: Time) {
    this.scene = scene;
    this.time = time;
    this.create();
  }

  private create() {
    const geometry = new THREE.PlaneGeometry(1.0, 1.0);

    this.material = new THREE.ShaderMaterial({
      vertexShader: vertex,
      fragmentShader: fragment,
      side: THREE.DoubleSide,
      transparent: true,
      depthWrite: false,
      uniforms: {
        uTime: { value: 0 },
      },
    });

    const plane = new THREE.Mesh(geometry, this.material);
    this.scene.add(plane);
  }

  update() {
    this.material.uniforms.uTime.value += this.time.delta;
  }
}
