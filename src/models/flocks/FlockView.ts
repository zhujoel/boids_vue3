import MainApplication from '../MainApplication'
import FlockApplication from './FlockApplication'
import IFlock from './IFlock'

export default class FlockView {
  app_: FlockApplication
  cnts_ = [0, 0]

  constructor (app: FlockApplication) {
    this.app_ = app
  }

  one () : number {
    return 1
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
