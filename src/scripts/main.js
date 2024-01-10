import * as THREE from 'three'
import Loader from './ui/Loader'
import WebGL from './webgl/WebGL'

window.THREE = THREE

window.addEventListener('DOMContentLoaded', () => {
  new Loader()
  new WebGL()
})
