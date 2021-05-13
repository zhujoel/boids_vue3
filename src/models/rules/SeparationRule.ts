import Boid from '../Boid'
import Point from '../Point'

export function apply (current: Boid, boids: Boid[], dist: number, angle: number, mag: number) : void {
  const rule: Point = new Point(0, 0)

  boids.forEach(b => {
    if (current !== b) {
      if (current.pos_.dist(b.pos_) < dist && current.inView(b, angle)) {
        rule.x_ += (current.pos_.x_ - b.pos_.x_)
        rule.y_ += (current.pos_.y_ - b.pos_.y_)
      }
    }
  })

  rule.multS(mag)
  current.vel_.addP(rule)
}
