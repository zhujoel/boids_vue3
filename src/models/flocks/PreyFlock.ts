import * as Cohesion from '../rules/CohesionRule'
import * as Alignment from '../rules/AlignmentRule'
import * as Separation from '../rules/SeparationRule'
import IFlock from './IFlock'
import Boid from '../Boid'

export default class PreyFlock extends IFlock {
  applyFlock (boid: Boid) : void {
    Separation.apply(boid, this.boids_, 100, Math.PI * 0.4, -0.0005)
  }

  move () : void {
    this.boids_.forEach(boid => {
      Cohesion.apply(boid, this.boids_, 100, Math.PI * 0.3, 0.005)
      Separation.apply(boid, this.boids_, 15, Math.PI, 0.05)
      Alignment.apply(boid, this.boids_, 100, Math.PI * 0.3, 0.05)
      this.apply(boid)
    })
  }
}
