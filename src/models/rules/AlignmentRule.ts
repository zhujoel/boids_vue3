import IRule from './IRule'
import Boid from '../Boid'
import Point from '../Point'

export default class AlignmentRule extends IRule {
  constructor () {
    super('Alignment', 0.5, 50, 180)
  }

  apply (current: Boid, boids: Boid[]) : void {
    const rule: Point = new Point(0, 0)
    const matchingFactor = 0.05 // Adjust by this % of average velocity

    let cnt = 0
    boids.forEach(b => {
      if (this.isIn(current, b)) {
        rule.addP(b.vel_)
        cnt++
      }
    })
    if (cnt !== 0) {
      rule.divS(cnt).subP(current.vel_).multS(matchingFactor)
      current.vel_.addP(rule)
    }
  }
}
