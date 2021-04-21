import IRule from './IRule'
import Boid from './Boid'

export default class AlignmentRule implements IRule {
  readonly name_: string

  constructor () {
    this.name_ = 'Alignment'
  }

  isIn (current: Boid, other: Boid) : boolean {
    // if (current === other) return false
    // const center : [number, number] = [current.vel_[0], current.vel_[1]]
    // if (center[0] === 0 || center[1] === 0) return true
    // const p : [number, number] = [other.pos_[0] - current.pos_[0], other.pos_[1] - current.pos_[1]]
    // const centerNorme = Math.sqrt(center[0] * center[0] + center[1] * center[1])
    // const pNorme = Math.sqrt(p[0] * p[0] + p[1] * p[1])
    // const cosAlpha = (center[0] * p[0] + center[1] * p[1]) / (centerNorme * pNorme)
    // return Math.acos(cosAlpha) <= 180
    return current !== other && current.distance(other) < 100
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
