import Boid from '../Boid'
import * as Separation from '../rules/SeparationRule'
import IFlock from './IFlock'

export default class PredatorFlock extends IFlock {
  applyFlock (boid: Boid) : void {
    Separation.apply(boid, this.boids_, this.randomNum(1, 35), Math.PI * 0.4, 0.2)
  }

  move () : void {
    this.boids_.forEach(pred => {
      Separation.apply(pred, this.boids_, 75, Math.PI, 0.5)
      this.apply(pred)
    })
  }
}
