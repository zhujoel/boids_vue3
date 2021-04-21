import IRule from './IRule'
import Boid from './Boid'

export default class CohesionRule implements IRule {
  readonly name_: string

  constructor () {
    this.name_ = 'Cohesion'
  }

  isIn (current: Boid, other: Boid) : boolean {
    return current !== other && current.distance(other) < 100
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
