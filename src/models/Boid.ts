import Point from './Point'
import BoundRule from './rules/BoundRule'

export default class Boid {
  public pos_: Point
  public vel_: Point

  constructor (pos: Point, vel: Point) {
    this.pos_ = pos
    this.vel_ = vel
  }

  clone () : Boid {
    return new Boid(this.pos_.clone(), this.vel_.clone())
  }

  // checks for distance and angle of view.
  // the angle parameter goes from 0 to 360.
  inView (other: Boid, angle : number) : boolean {
    // if (this.vel_.isNull()) return false
    // const center : Point = this.vel_.clone()
    // const pos : Point = other.pos_.clone().subP(this.pos_)
    // const centerNorm : number = center.norm2()
    // const pNorm : number = pos.norm2()
    // const cosAlpha = center.dotProd(pos) / (centerNorm * pNorm)
    // return Math.acos(cosAlpha) <= angle
    return true
  }

  limitVelocity () : void {
    const vlim = 5
    const velMag = this.vel_.norm2()
    if (velMag > vlim) {
      this.vel_.divS(velMag).multS(vlim)
    }
  }

  applyAcceleration (acc: Point) : void {
    this.vel_.addP(acc)
    this.limitVelocity()
    this.pos_.addP(this.vel_)
    // const bound = this.boundRule_.apply(this, 1250, 450)
    // this.vel_[0] += bound[0]
    // this.vel_[1] += bound[1]
  }
}
