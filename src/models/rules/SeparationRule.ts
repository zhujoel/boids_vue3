import Boid from '../Boid'
import Point from '../Point'
import IRule from './IRule'

export default class CohesionRule extends IRule {
  constructor (name: string, dist: number, angle: number, mag: number) {
    super(name)
    this.params_.dist = dist
    this.params_.angle = angle
    this.params_.mag = mag
  }

  apply (current: Boid, boids: Boid[]) : void {
    const rule: Point = new Point(0, 0)
    boids.forEach(b => {
      if (current !== b) {
        if (current.pos_.dist(b.pos_) < this.params_.dist && current.inView(b, this.params_.angle)) {
          rule.x_ += (current.pos_.x_ - b.pos_.x_)
          rule.y_ += (current.pos_.y_ - b.pos_.y_)
        }
      }
    })

    rule.multS(this.params_.mag)
    current.vel_.addP(rule)
  }
}
