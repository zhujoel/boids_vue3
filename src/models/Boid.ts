import Point from './Point'
import * as PIXI from 'pixi.js'

export default class Boid {
  public pos_: Point
  // graphics include position (x, y)
  // we compute position directly from graphics
  public graphics_ = new PIXI.Graphics()
  public vel_: Point

  constructor (pos: Point, vel: Point) {
    this.pos_ = pos

    /* draw */
    /* end draw */
    this.graphics_.x = pos.x_
    this.graphics_.y = pos.y_
    this.graphics_.beginFill(0xFFFF00)
    this.graphics_.lineStyle(5, 0xFF0000)
    this.graphics_.drawRect(pos.x_, pos.y_, 2, 5)
    this.vel_ = vel
  }

  // checks for distance and angle of view.
  // the angle parameter goes from 0 to 360.
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
    const vlim = 5
    const velMag = this.vel_.norm2()
    if (velMag > vlim) {
      this.vel_.divS(velMag).multS(vlim)
    }
  }
}
