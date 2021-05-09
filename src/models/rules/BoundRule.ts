import IRule from './IRule'
import Boid from '../Boid'

export default class BoundRule {
  readonly name_: string
  constructor () {
    this.name_ = 'Bound'
  }

  apply (current: Boid, Xmax: number, Ymax: number) : [number, number] {
    const rule: [number, number] = [0, 0]
    const x = current.pos_[0]
    const y = current.pos_[1]

    if (x < 0) {
      rule[0] = 2
    } else if (x > Xmax) {
      rule[0] = -2
    }
    if (y < 0) {
      rule[1] = 2
    } else if (y > Ymax) {
      rule[1] = -2
    }

    return rule
  }
}
