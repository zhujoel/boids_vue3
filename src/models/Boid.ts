import Point from './Point'
import { Graphics } from 'pixi.js'

export default class Boid {
  public readonly MAX_VEL
  public readonly pos_: Point
  public readonly vel_: Point
  public graphics_ = new Graphics()
  public size_ = 3

  constructor (pos: Point, vel: Point, MAX_VEL = 3) {
    this.pos_ = pos
    this.graphics_.x = pos.x_
    this.graphics_.y = pos.y_
    this.vel_ = vel
    this.MAX_VEL = MAX_VEL
  }

  // checks for distance and angle of view.
  // the angle parameter goes from 0 to PI
  inView (other: Boid, angle : number) : boolean {
    if (this.vel_.isNull()) return false
    const center : Point = this.vel_.clone()
    const pos : Point = other.pos_.clone().subP(this.pos_)
    const centerNorm : number = center.norm2()
    const pNorm : number = pos.norm2()
    const cosAlpha = center.dotProd(pos) / (centerNorm * pNorm)
    return Math.acos(cosAlpha) <= angle
  }

  limitVelocity () : void {
    const velMag = this.vel_.norm2()
    const max = Math.max(this.MAX_VEL - this.size_ * 0.3, 0.4)
    if (velMag > max) {
      this.vel_.divS(velMag).multS(max)
    }
  }
}
