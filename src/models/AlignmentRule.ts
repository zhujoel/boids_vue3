import IRule from './IRule'
import Boid from './Boid'

export default class AlignmentRule implements IRule {
  readonly name_: string

  constructor () {
    this.name_ = 'Alignment'
  }

  distance () : number {
    return 500
  }

  apply (current: Boid, neighbours: Boid[]) : [number, number] {
    const rule: [number, number] = [0, 0]

    neighbours.forEach(b => {
      rule[0] += b.vel_[0]
      rule[1] += b.vel_[1]
    })

    rule[0] /= neighbours.length
    rule[1] /= neighbours.length
    rule[0] -= current.vel_[0]
    rule[1] -= current.vel_[1]
    rule[0] /= 8
    rule[1] /= 8
    return rule
  }
}
