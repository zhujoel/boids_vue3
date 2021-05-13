import IRule from './IRule'
import Boid from '../Boid'
import Point from '../Point'

export default class SeparationRule extends IRule {
  constructor () {
    super('Separation', 0.5, 15, 360)
  }

  apply (current: Boid, boids: Boid[]) : void {
    const rule: Point = new Point(0, 0)
    const avoidFactor = 0.05 // Adjust velocity by this %

    boids.forEach(b => {
      if (current !== b) {
        if (this.isIn(current, b)) {
          rule.x_ += (current.pos_.x_ - b.pos_.x_)
          rule.y_ += (current.pos_.y_ - b.pos_.y_)
        }
      }
    })

    rule.multS(avoidFactor)
    current.vel_.addP(rule)
  }
}
