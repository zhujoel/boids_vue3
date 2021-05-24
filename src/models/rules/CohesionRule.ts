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

  isSeparation () : boolean {
    return false
  }

  apply (current: Boid, boids: Boid[]) : void {
    const center: Point = new Point(0, 0)
    let cnt = 0
    boids.forEach(b => {
      if (current.pos_.dist(b.pos_) < this.params_.dist && current.inView(b, this.params_.angle)) {
        center.addP(b.pos_)
        cnt++
      }
    })
    if (cnt) {
      center.divS(cnt).subP(current.pos_).multS(this.params_.mag)
      current.vel_.addP(center)
    }
  }
}
