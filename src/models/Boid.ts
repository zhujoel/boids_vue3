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

  applyAcceleration (acc: [number, number]) : void {
    this.vel_[0] += acc[0]
    this.vel_[1] += acc[1]

    if (this.vel_[0] > 20 || this.vel_[1] > 20) {
      this.vel_[0] = (this.vel_[0] / Math.abs(this.vel_[0])) * this.vel_[0]
      this.vel_[1] = (this.vel_[1] / Math.abs(this.vel_[1])) * this.vel_[1]
    }

    this.pos_[0] += this.vel_[0]
    this.pos_[1] += this.vel_[1]

    if (this.pos_[0] > 1250 || this.pos_[1] > 500 || this.pos_[0] < 0 || this.pos_[1] < 0) {
      this.pos_[0] = 600
      this.pos_[1] = 250
    }
    
  }
}
