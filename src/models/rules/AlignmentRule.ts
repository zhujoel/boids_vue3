import Boid from '../Boid'
import Point from '../Point'
import IRule from './IRule'

export default class AlignmentRule extends IRule {
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
    const rule: Point = new Point(0, 0)
    let cnt = 0
    boids.forEach(b => {
      if (current.pos_.dist(b.pos_) < this.params_.dist && current.inView(b, this.params_.angle)) {
        rule.addP(b.vel_)
        cnt++
      }
    })
    if (cnt !== 0) {
      rule.divS(cnt).subP(current.vel_).multS(this.params_.mag)
      current.vel_.addP(rule)
    }
  }
}
