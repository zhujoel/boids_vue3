import IRule from './IRule'
import Boid from '../Boid'

export default class CohesionRule extends IRule {
  constructor () {
    super('Cohesion', 0.5, 150, 90)
  }

  apply (current: Boid, boids: Boid[]) : [number, number] {
    const rule: [number, number] = [0, 0]

    let cnt = 0
    boids.forEach(b => {
      if (this.isIn(current, b)) {
        rule[0] = rule[0] + b.pos_[0]
        rule[1] = rule[1] + b.pos_[1]
        cnt++
      }
    })
    if (cnt === 0) return rule

    rule[0] = rule[0] / cnt
    rule[1] = rule[1] / cnt
    rule[0] = (rule[0] - current.pos_[0]) / 100
    rule[1] = (rule[1] - current.pos_[1]) / 100
    return rule
  }
}