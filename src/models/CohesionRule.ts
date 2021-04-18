import IRule from './IRule'
import Boid from './Boid'

export default class CohesionRule implements IRule {
  readonly name_: string

  constructor () {
    this.name_ = 'Cohesion'
  }

  apply (current: Boid, neighbours: Boid[]) : [number, number] {
    const rule: [number, number] = [0, 0]

    neighbours.forEach(b => {
      rule[0] += b.pos_[0]
      rule[1] += b.pos_[1]
    })

    rule[0] -= current.pos_[0]
    rule[1] -= current.pos_[1]
    rule[0] /= neighbours.length
    rule[1] /= neighbours.length
    return rule
  }
}
