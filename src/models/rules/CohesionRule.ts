import Boid from '../Boid'
import Point from '../Point'

export function apply (current: Boid, boids: Boid[], dist: number, angle: number, mag: number) : void {
  const center: Point = new Point(0, 0)
  let cnt = 0
  boids.forEach(b => {
    if (current.pos_.dist(b.pos_) < dist && current.inView(b, angle)) {
      center.addP(b.pos_)
      cnt++
    }
  })
  if (cnt) {
    center.divS(cnt).subP(current.pos_).multS(mag)
    current.vel_.addP(center)
  }
}
