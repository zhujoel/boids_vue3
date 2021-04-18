import IRule from './IRule'
import Boid from './Boid'

export default class SeparationRule implements IRule {
  readonly name_: string

  constructor () {
    this.name_ = 'Separation'
  }

  apply (current: Boid, neighbours: Boid[]) : number[] {
    const rule: number[] = [0, 0]

    neighbours.forEach(b => {
      rule[0] -= (b.pos_[0] - current.pos_[0])
      rule[1] -= (b.pos_[1] - current.pos_[1])
    })
    return rule
  }
}
