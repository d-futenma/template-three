import GUI from "lil-gui";

export default class ControlPanel {
  gui!: GUI;

  constructor() {
    this.setupPanel();
  }

  private setupPanel() {
    this.gui = new GUI();
  }
}
