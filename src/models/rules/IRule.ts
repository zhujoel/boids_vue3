import Boid from '../Boid'

export default abstract class IRule {
  // magnitude of the rule, to amplify or reduce its strength
  readonly mag_: number
  // distance to another boid under which the rule apply
  readonly dist_: number
  // angle of view of the boid
  readonly angle_ : number

  constructor (mag: number, dist: number, angle: number) {
    this.mag_ = mag
    this.dist_ = dist
    this.angle_ = angle
  }

  isIn (current: Boid, other: Boid) : boolean {
    return current.pos_.dist(other.pos_) < this.dist_ &&
      current.inView(other, this.angle_)
  }

  abstract apply (current: Boid, neighbours: Boid[]) : void
}
