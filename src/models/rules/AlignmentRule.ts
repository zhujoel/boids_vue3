import Boid from '../Boid'
import Point from '../Point'

export function apply (current: Boid, boids: Boid[], dist: number, angle: number, mag: number) : void {
  const rule: Point = new Point(0, 0)

  let cnt = 0
  boids.forEach(b => {
    if (current.pos_.dist(b.pos_) < dist && current.inView(b, angle)) {
      rule.addP(b.vel_)
      cnt++
    }
  })
  if (cnt !== 0) {
    rule.divS(cnt).subP(current.vel_).multS(mag)
    current.vel_.addP(rule)
  }
}
