import IRule from './IRule'
import Boid from '../Boid'

export default class AlignmentRule extends IRule {
  constructor () {
    super('Alignment', 0.5, 50, 360)
  }

  apply (current: Boid, boids: Boid[]) : [number, number] {
    const rule: [number, number] = [0, 0]

    let cnt = 0
    boids.forEach(b => {
      if (this.isIn(current, b)) {
        rule[0] = rule[0] + b.vel_[0]
        rule[1] = rule[1] + b.vel_[1]
        cnt++
      }
    })
    if (cnt === 0) return rule

    rule[0] = rule[0] / cnt
    rule[1] = rule[1] / cnt
    rule[0] = (rule[0] - current.vel_[0]) / 8
    rule[1] = (rule[1] - current.vel_[1]) / 8
    return rule
  }
}