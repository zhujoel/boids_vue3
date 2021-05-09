import Boid from '../Boid'
import Point from '../Point'

export default class BoundRule {
  readonly name_: string
  constructor () {
    this.name_ = 'Bound'
  }

  apply (current: Boid, Xmax: number, Ymax: number) : void {
    const x = current.pos_.x_
    const y = current.pos_.y_
    const turnFactor = 1

    if (x < 0) {
      current.vel_.x_ += turnFactor
    } else if (x > Xmax) {
      current.vel_.x_ -= turnFactor
    }
    if (y < 0) {
      current.vel_.y_ += turnFactor
    } else if (y > Ymax) {
      current.vel_.y_ -= turnFactor
    }
  }
}
