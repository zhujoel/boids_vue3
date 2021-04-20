import IRule from './IRule'
import Boid from './Boid'

export default class CohesionRule implements IRule {
  readonly name_: string

  constructor () {
    this.name_ = 'Cohesion'
  }

  isIn (current: Boid, other: Boid) : boolean {
    const x = other.pos_[0] - current.pos_[0]
    const y = other.pos_[1] - current.pos_[1]
    return current !== other && Math.sqrt(x * x + y + y) < 300
  }

  apply (current: Boid, neighbours: Boid[]) : [number, number] {
    const rule: [number, number] = [0, 0]

    neighbours.forEach(b => {
      rule[0] += b.pos_[0]
      rule[1] += b.pos_[1]
    })

    rule[0] /= neighbours.length
    rule[1] /= neighbours.length
    rule[0] -= current.pos_[0]
    rule[1] -= current.pos_[1]
    rule[0] /= 100
    rule[1] /= 100
    return rule
  }
}
