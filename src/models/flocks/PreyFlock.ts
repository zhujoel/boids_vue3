import * as Cohesion from '../rules/CohesionRule'
import AlignmentRule from '../rules/AlignmentRule'
import * as Separation from '../rules/SeparationRule'
import * as Eat from '../rules/EatRule'
import IFlock from './IFlock'
import Boid from '../Boid'

export default class PreyFlock extends IFlock {
  constructor (name: string, color = 0x000000) {
    super(name, color)
    this.rules_.push(new AlignmentRule('Alignment', 100, Math.PI * 0.3, 0.05))
  }

  isPreyFlock () : boolean {
    return true
  }

  applyFlock (boid: Boid) : void {
    Separation.apply(boid, this.boids_, 100, Math.PI * 0.4, -0.0005)
    if (Eat.apply(boid, this.boids_, boid.size_ * 0.5)) {
      boid.size_++
    }
  }

  move () : void {
    this.boids_.forEach(boid => {
      Cohesion.apply(boid, this.boids_, 100, Math.PI * 0.3, 0.005)
      Separation.apply(boid, this.boids_, 15, Math.PI, 0.05)
      this.rules_.forEach(r => {
        r.apply(boid, this.boids_)
      })
      this.apply(boid)
    })
    this.draw()
  }
}
