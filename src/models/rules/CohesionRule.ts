import IRule from './IRule'
import Boid from '../Boid'
import Point from '../Point'

export default class CohesionRule extends IRule {
  constructor () {
    super('Cohesion', 0.5, 150, 90)
  }

  apply (current: Boid, boids: Boid[]) : Point {
    const rule: Point = new Point(0, 0)

    let cnt = 0
    boids.forEach(b => {
      if (this.isIn(current, b)) {
        rule.addP(b.pos_)
        cnt++
      }
    })
    if (cnt === 0) return rule

    return rule.divS(cnt).subP(current.pos_).divS(100)
  }
}
