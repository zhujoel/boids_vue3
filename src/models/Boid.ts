import Point from './Point'
import * as PIXI from 'pixi.js'

export default class Boid {
  public readonly MAX_VEL
  public pos_: Point
  public vel_: Point
  public graphics_ = new PIXI.Graphics()
  public color_: number

  constructor (pos: Point, vel: Point, MAX_VEL = 3, color = 0xFF0000) {
    this.pos_ = pos
    this.graphics_.x = pos.x_
    this.graphics_.y = pos.y_
    this.vel_ = vel
    this.MAX_VEL = MAX_VEL
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
    this.graphics_.position.x = this.pos_.x_
    this.graphics_.position.y = this.pos_.y_
    this.graphics_.clear()
    // circle
    // this.graphics_.lineStyle(0)
    //   .beginFill(this.color_, 2)
    //   .drawCircle(this.graphics_.x, this.graphics_.y, 2)
    //   .endFill()
    // line
    this.graphics_.lineStyle(3, this.color_)
      .moveTo(this.pos_.x_, this.pos_.y_)
      .lineTo(this.pos_.x_ + this.vel_.x_ * 3, this.pos_.y_ + this.vel_.y_ * 3)
      .closePath()
  }

  limitVelocity () : void {
    const velMag = this.vel_.norm2()
    if (velMag > this.MAX_VEL) {
      this.vel_.divS(velMag).multS(this.MAX_VEL)
    }
  }
}
