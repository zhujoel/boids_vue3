import Boid from '../Boid'
import * as Separation from '../rules/SeparationRule'
import IFLock from './IFlock'

export default class PredatorFlock extends IFLock {
  applyFlock (boid: Boid, flock: IFLock) : void {
    Separation.apply(boid, flock.boids_, 100, Math.PI * 0.4, -0.05)
  }

  move () : void {
    this.boids_.forEach(pred => {
      Separation.apply(pred, this.boids_, 75, Math.PI, 0.5)
      this.apply(pred)
    })
  }
}
