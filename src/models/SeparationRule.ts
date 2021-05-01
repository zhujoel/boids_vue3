import IRule from './IRule'
import Boid from './Boid'

export default class SeparationRule implements IRule {
  readonly name_: string

  constructor () {
    this.name_ = 'Separation'
  }

  isIn (current: Boid, other: Boid) : boolean {
    return current !== other && current.distance(other) < 5 && current.inView(other, 5)
  }

  apply (current: Boid, boids: Boid[]) : [number, number] {
    const rule: [number, number] = [0, 0]

    boids.forEach(b => {
      if (this.isIn(current, b)) {
        rule[0] = rule[0] - (b.pos_[0] - current.pos_[0])
        rule[1] = rule[1] - (b.pos_[1] - current.pos_[1])
      }
    })

    return rule
  }
}
