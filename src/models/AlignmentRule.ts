import IRule from './IRule'
import Boid from './Boid'

export default class AlignmentRule implements IRule {
  readonly name_: string

  constructor () {
    this.name_ = 'Alignment'
  }

  isIn (current: Boid, other: Boid) : boolean {
    const x = other.pos_[0] - current.pos_[0]
    const y = other.pos_[1] - current.pos_[1]
    return current !== other
  }

  apply (current: Boid, boids: Boid[]) : [number, number] {
    const rule: [number, number] = [0, 0]

    boids.forEach(b => {
      if (this.isIn(current, b)) {
        rule[0] = rule[0] + b.vel_[0]
        rule[1] = rule[1] + b.vel_[1]
      }
    })

    rule[0] = rule[0] / (boids.length - 1)
    rule[1] = rule[1] / (boids.length - 1)
    rule[0] = (rule[0] - current.vel_[0]) / 8
    rule[1] = (rule[1] - current.vel_[1]) / 8
    return rule
  }
}
