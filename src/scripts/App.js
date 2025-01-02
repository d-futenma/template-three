import Loader from '@/scripts/components/ui/Loader';
import WebGL from '@/scripts/webgl/WebGL'

export default class App {
  constructor() {
    this.loader = new Loader()
    this.webGL = new WebGL()
  }
}
