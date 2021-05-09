import IRule from './IRule'
import Boid from '../Boid'
import Point from '../Point'

export default class AlignmentRule extends IRule {
  constructor () {
    super('Alignment', 0.5, 50, 360)
  }

  apply (current: Boid, boids: Boid[]) : Point {
    const rule: Point = new Point(0, 0)

    let cnt = 0
    boids.forEach(b => {
      if (this.isIn(current, b)) {
        rule.addP(b.vel_)
        cnt++
      }
    })
    if (cnt === 0) return rule

    return rule.divS(cnt).subP(current.vel_).divS(8).multS(this.mag_)
  }
}
