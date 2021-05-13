import IRule from './IRule'
import Boid from '../Boid'
import Point from '../Point'

export default class CohesionRule extends IRule {
  constructor () {
    super('Cohesion', 0.5, 100, 180)
  }

  apply (current: Boid, boids: Boid[]) : void {
    const center: Point = new Point(0, 0)
    const centeringFactor = 0.005 // adjust velocity by this %
    let cnt = 0
    boids.forEach(b => {
      if (this.isIn(current, b)) {
        center.addP(b.pos_)
        cnt++
      }
    })
    if (cnt) {
      center.divS(cnt).subP(current.pos_).multS(centeringFactor)
      current.vel_.addP(center)
    }
  }
}
