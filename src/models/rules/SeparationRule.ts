import IRule from './IRule'
import Boid from '../Boid'
import Point from '../Point'

export default class SeparationRule extends IRule {
  constructor () {
    super('Separation', 0.5, 5, 5)
  }

  apply (current: Boid, boids: Boid[]) : Point {
    const rule: Point = new Point(0, 0)

    boids.forEach(b => {
      if (this.isIn(current, b)) {
        rule.x_ = rule.x_ - (b.pos_.x_ - current.pos_.x_)
        rule.y_ = rule.y_ - (b.pos_.y_ - current.pos_.y_)
      }
    })

    return rule
  }
}
