import Boid from '../Boid'
import Point from '../Point'

export default class BoundRule {
  readonly name_: string
  constructor () {
    this.name_ = 'Bound'
  }

  apply (current: Boid, Xmax: number, Ymax: number) : Point {
    const rule: Point = new Point(0, 0)
    const x = current.pos_.x_
    const y = current.pos_.y_

    if (x < 0) {
      rule.x_ = 2
    } else if (x > Xmax) {
      rule.y_ = -2
    }
    if (y < 0) {
      rule.x_ = 2
    } else if (y > Ymax) {
      rule.y_ = -2
    }

    return rule
  }
}
