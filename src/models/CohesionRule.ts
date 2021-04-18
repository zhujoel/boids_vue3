import IRule from './IRule'
import Boid from './Boid'

export default class CohesionRule implements IRule {
  readonly name_: string

  constructor () {
    this.name_ = 'Cohesion'
  }

  apply (boid: Boid, neighbours: Boid[]) : number[] {
    const rule: number[] = [0, 0]

    neighbours.forEach(
      (b: Boid) => {
        rule[0] += b.pos_[0]
        rule[1] += b.pos_[1]
      }
    )

    rule[0] -= boid.pos_[0]
    rule[1] -= boid.pos_[1]
    rule[0] /= neighbours.length
    rule[1] /= neighbours.length
    return rule
  }
}
