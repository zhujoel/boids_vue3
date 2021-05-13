import Boid from '../Boid'

export default class BoundRule {
  // determines how hard a boid should turn around when reaching a boundary
  readonly turn_ : number
  constructor (turn: number) {
    this.turn_ = turn
  }

  apply (current: Boid,
    Xmax: number,
    Ymax: number,
    Xmin = 0,
    Ymin = 0) : void {
    const x = current.pos_.x_
    const y = current.pos_.y_

    if (x < Xmin) {
      current.vel_.x_ += this.turn_
    } else if (x > Xmax) {
      current.vel_.x_ -= this.turn_
    }
    if (y < Ymin) {
      current.vel_.y_ += this.turn_
    } else if (y > Ymax) {
      current.vel_.y_ -= this.turn_
    }
  }
}
