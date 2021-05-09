import Boid from '../Boid'

export default abstract class IRule {
  readonly name_: string
  // magnitude of the rule, to amplify or reduce
  readonly mag_: number
  // distance to another boid under which the rule apply
  readonly dist_: number
  // angle of view of the boid
  readonly angle_ : number

  constructor (name: string, mag: number, dist: number, angle: number) {
    this.name_ = name
    this.mag_ = mag
    this.dist_ = dist
    this.angle_ = angle
  }

  isIn (current: Boid, other: Boid) : boolean {
    // return current !== other &&
    //   current.pos_.dist(other.pos_) < this.dist_ &&
    //   current.inView(other, this.angle_)
    return current.pos_.dist(other.pos_) < this.dist_
  }

  abstract apply (current: Boid, neighbours: Boid[]) : void
}
