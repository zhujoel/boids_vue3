import FlockApplication from './FlockApplication'

export default class FlockView {
  app_: FlockApplication
  cnt = 0

  constructor (app: FlockApplication) {
    this.app_ = app
  }

  update () : void {
    this.cnt = this.app_.flocks_[1].boids_.length
  }
}
