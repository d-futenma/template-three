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
    const promises = this.sources.map((source) => {
      return new Promise((resolve) => {
        if (source.type === 'texture') {
          this.loaders.textureLoader.load(source.path, (file) => {
            this.sourceLoaded(source, file)
            resolve(file)
          })
        } else if (source.type === 'gltfModel') {
          this.loaders.gltfLoader.load(source.path, (file) => {
            this.sourceLoaded(source, file)
            resolve(file)
          })
        } else if (source.type === 'cubeTexture') {
          this.loaders.cubeTextureLoader.load(source.path, (file) => {
            this.sourceLoaded(source, file)
            resolve(file)
          })
        }
      })
    })
    return Promise.all(promises).then(() => this.items)
  }

  sourceLoaded(source, file) {
    this.items[source.name] = file
  }
}
