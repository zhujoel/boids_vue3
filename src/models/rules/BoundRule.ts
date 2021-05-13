import Boid from '../Boid'

// @param turn Determines how hard a boid should turn around when reaching a boundary
export function apply (current: Boid, turn: number, Xmax: number, Ymax: number,
  Xmin = 0, Ymin = 0) : void {
  const x = current.pos_.x_
  const y = current.pos_.y_

  if (x < Xmin) {
    current.vel_.x_ += turn
  } else if (x > Xmax) {
    current.vel_.x_ -= turn
  }
  if (y < Ymin) {
    current.vel_.y_ += turn
  } else if (y > Ymax) {
    current.vel_.y_ -= turn
  }
}
