export default class Loader {
  constructor() {
    this.loader = document.querySelector('[data-loader]')
    if (!this.loader) return
    
    this.init();
  }

  get classes() {
    return {
      isLoaded: 'is-loaded',
    }
  }

  init() {
    this.bindLoadEvent()
  }

  bindLoadEvent() {
    window.addEventListener('load', () => {
      this.handleWindowLoad()
    })
  }

  async handleWindowLoad() {
    await this.addClass()
    setTimeout(() => history.scrollRestoration = 'manual');
    await this.removeLoader()
  }

  addClass() {
    return new Promise((resolve) => {
      document.documentElement.classList.add(this.classes.isLoaded)
      resolve()
    })
  }

  removeLoader() {
    return new Promise((resolve) => {
      setTimeout(() => this.loader.remove(), 500);
      history.scrollRestoration = 'manual'
      resolve()
    })
  }
}
