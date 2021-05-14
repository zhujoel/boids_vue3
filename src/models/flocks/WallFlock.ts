import Boid from '../Boid'
import * as Separation from '../rules/SeparationRule'
import IFlock from './IFlock'

export default class WallFlock extends IFlock {
  applyFlock (boid: Boid) : void {
    Separation.apply(boid, this.boids_, 10, Math.PI, 0.2)
  }

  move (): void {
    const s = ''
  }
}
