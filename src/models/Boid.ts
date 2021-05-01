export default class Boid {
  public pos_: [number, number]
  public vel_: [number, number]
  public idx_: number

  constructor (pos: [number, number], vel: [number, number], idx: number) {
    this.pos_ = pos
    this.vel_ = vel
    this.idx_ = idx
  }

  clone () : Boid {
    return new Boid([this.pos_[0], this.pos_[1]], [this.vel_[0], this.vel_[1]], this.idx_)
  }

  distance (other : Boid) : number {
    const x = other.pos_[0] - this.pos_[0]
    const y = other.pos_[1] - this.pos_[1]
    return Math.sqrt(x * x + y * y)
  }

  // checks for distance and angle of view.
  // the angle parameter goes from 0 to 360.
  inView (other: Boid, angle : number) : boolean {
    const center : [number, number] = [this.vel_[0], this.vel_[1]]
    if (center[0] === 0 && center[1] === 0) return false
    const p : [number, number] = [other.pos_[0] - this.pos_[0], other.pos_[1] - this.pos_[1]]
    const centerNorme = Math.sqrt(center[0] * center[0] + center[1] * center[1])
    const pNorme = Math.sqrt(p[0] * p[0] + p[1] * p[1])
    const cosAlpha = (center[0] * p[0] + center[1] * p[1]) / (centerNorme * pNorme)
    return Math.acos(cosAlpha) <= angle
  }

  limitVelocity () : void {
    const vlim = 3
    const velMagnitude = Math.sqrt(this.vel_[0] * this.vel_[0] + this.vel_[1] * this.vel_[1])
    if (velMagnitude > vlim) {
      this.vel_[0] = (this.vel_[0] / velMagnitude) * vlim
      this.vel_[1] = (this.vel_[1] / velMagnitude) * vlim
    }
  }

  applyAcceleration (acc: [number, number]) : void {
    this.vel_[0] += acc[0]
    this.vel_[1] += acc[1]
    this.pos_[0] += this.vel_[0]
    this.pos_[1] += this.vel_[1]
    this.limitVelocity()
  }
}
