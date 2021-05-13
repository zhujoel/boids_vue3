import IRule from './IRule'
import Boid from '../Boid'
import Point from '../Point'

export default class SeparationRule extends IRule {
  apply (current: Boid, boids: Boid[]) : void {
    const rule: Point = new Point(0, 0)

    boids.forEach(b => {
      if (current !== b) {
        if (this.isIn(current, b)) {
          rule.x_ += (current.pos_.x_ - b.pos_.x_)
          rule.y_ += (current.pos_.y_ - b.pos_.y_)
        }
      }
    })

    rule.multS(this.mag_)
    current.vel_.addP(rule)
  }
}
