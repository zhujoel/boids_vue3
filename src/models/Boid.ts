import Point from './Point'
import * as PIXI from 'pixi.js'

export default class Boid {
  public static MAX_VEL = 5
  public pos_: Point
  // graphics include position (x, y)
  // we compute position directly from graphics
  public graphics_ = new PIXI.Graphics()
  public color_: number
  public vel_: Point

  constructor (pos: Point, vel: Point, color = 0xFF0000) {
    this.pos_ = pos
    this.graphics_.x = pos.x_
    this.graphics_.y = pos.y_
    this.vel_ = vel
    this.color_ = color
    this.draw()
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

  draw () : void {
    this.graphics_.clear()
    this.graphics_.lineStyle(1, this.color_)
      .moveTo(this.pos_.x_, this.pos_.y_)
      .lineTo(this.pos_.x_ + this.vel_.x_ * 3, this.pos_.y_ + this.vel_.y_ * 3)
      .closePath()
  }

  limitVelocity () : void {
    const velMag = this.vel_.norm2()
    if (velMag > Boid.MAX_VEL) {
      this.vel_.divS(velMag).multS(Boid.MAX_VEL)
    }
  }
}
