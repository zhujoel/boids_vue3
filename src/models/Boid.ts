export default class Boid {
  public pos_: [number, number]
  public vel_: [number, number]
  public idx_: number

  constructor (pos: [number, number], vel: [number, number], idx: number) {
    this.pos_ = pos
    this.vel_ = vel
    this.idx_ = idx
  }
}
