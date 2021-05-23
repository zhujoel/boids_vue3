import FlockApplication from './FlockApplication'
import IFlock from './IFlock'

export default class FlockView {
  app_: FlockApplication
  cnts_ = [0, 0]

  constructor (app: FlockApplication) {
    this.app_ = app
  }

  update () : void {
    for (let i = 0; i < this.app_.flocks_.length; ++i) {
      this.cnts_[i] = this.app_.flocks_[i].boids_.length
      this.app_.flocks_[i].boids_.forEach(boid => {
        boid.color_ = Math.random() * 0x010101
      })
    }
  }

  counter (flock: IFlock) : number {
    const idx = this.app_.flocks_.indexOf(flock)
    return this.cnts_[idx]
  }
}
