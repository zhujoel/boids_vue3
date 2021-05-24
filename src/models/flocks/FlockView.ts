import FlockApplication from './FlockApplication'
import IFlock from './IFlock'

export default class FlockView {
  app_: FlockApplication
  cnts_ = [3, 200]
  adds_ = [0, 0]

  constructor (app: FlockApplication) {
    this.app_ = app
  }

  update () : void {
    for (let i = 0; i < this.app_.flocks_.length; ++i) {
      this.cnts_[i] = this.app_.flocks_[i].boids_.length
    }
  }

  counter (flock: IFlock) : number {
    const idx = this.app_.flocks_.indexOf(flock)
    return this.cnts_[idx]
  }
}
