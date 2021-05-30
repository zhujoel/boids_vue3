import AlignmentRule from '../rules/AlignmentRule'
import SeparationRule from '../rules/SeparationRule'
import CohesionRule from '../rules/CohesionRule'
import * as Eat from '../rules/EatRule'
import IFlock from './IFlock'
import Boid from '../Boid'

export default class PreyFlock extends IFlock {
  applyFlockRule = new SeparationRule('Separation', 100, Math.PI * 0.4, -0.0005)
  constructor (name: string, color = 0x000000) {
    super(name, color)
    this.rules_.push(new AlignmentRule('Alignment', 100, Math.PI * 0.3, 0.05))
    this.rules_.push(new CohesionRule('Cohesion', 20, Math.PI * 0.3, 0.005))
    this.rules_.push(new SeparationRule('Separation', 3, Math.PI, 0.05))
  }

  isPreyFlock () : boolean {
    return true
  }

  applyFlock (boid: Boid) : void {
    this.applyFlockRule.apply(boid, this.boids_)
    if (Eat.apply(boid, this.boids_, boid.size_ * 0.5)) {
      if (boid.size_ < 10) {
        boid.size_++
      }
    }
  }

  move () : void {
    this.boids_.forEach(boid => {
      this.rules_.forEach(r => {
        r.apply(boid, this.boids_)
      })
      this.apply(boid)
    })
    this.draw()
  }
}
