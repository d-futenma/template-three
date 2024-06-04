import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

export default class Resources {
  constructor(sources) {
    this.sources = sources
    this.items = {}
    this.loaders = {
      gltfLoader: new GLTFLoader(),
      textureLoader: new THREE.TextureLoader(),
      cubeTextureLoader: new THREE.CubeTextureLoader(),
    }
  }

  load() {
    const promises = this.sources.map((source) => this.loadSource(source))
    return Promise.all(promises).then(() => this.items)
  }

  loadSource(source) {
    return new Promise((resolve) => {
      const loader = this.loaders[`${source.type}Loader`]
      loader.load(source.path, (file) => {
        this.items[source.name] = file
        resolve(file)
      })
    })
  }
}
