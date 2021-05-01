import * as PIXI from 'pixi.js'

export default class Boid {
  // graphics include position (x, y)
  // we compute position directly from graphics
  public graphics = new PIXI.Graphics()
  public vel_: [number, number]
  public idx_: number

  constructor (pos: [number, number], vel: [number, number], idx: number) {
    this.graphics.x = pos[0]
    this.graphics.y = pos[1]
    this.graphics.beginFill(0xFFFF00)
    this.graphics.lineStyle(5, 0xFF0000)
    this.graphics.drawRect(pos[0], pos[1], 2, 2)
    this.vel_ = vel
    this.idx_ = idx
  }

  pos () : [number, number] {
    return [this.graphics.x, this.graphics.y]
  }

  clone () : Boid {
    return new Boid([this.pos()[0], this.pos()[1]], [this.vel_[0], this.vel_[1]], this.idx_)
  }

  distance (other : Boid) : number {
    const x = other.pos()[0] - this.pos()[0]
    const y = other.pos()[1] - this.pos()[1]
    return Math.sqrt(x * x + y * y)
  }

  // checks for distance and angle of view.
  // the angle parameter goes from 0 to 360.
  inView (other: Boid, angle : number) : boolean {
    const center : [number, number] = [this.vel_[0], this.vel_[1]]
    if (center[0] === 0 && center[1] === 0) return false
    const p : [number, number] = [other.pos()[0] - this.pos()[0], other.pos()[1] - this.pos()[1]]
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

    this.limitVelocity()

    this.pos()[0] += this.vel_[0]
    this.pos()[1] += this.vel_[1]
  }

  limitVelTmp (newBoid : number[][]) : void {
    const vlim = 3
    const velMagnitude = Math.sqrt(newBoid[1][0] * newBoid[1][0] + newBoid[1][1] * newBoid[1][1])
    if (velMagnitude > vlim) {
      newBoid[1][0] = (newBoid[1][0] / velMagnitude) * vlim
      newBoid[1][1] = (newBoid[1][1] / velMagnitude) * vlim
    }
  }

  applyAccTmp (newBoid : number[][], acc: [number, number]) : void {
    newBoid[1][0] += acc[0]
    newBoid[1][1] += acc[1]

    // this.limitVelTmp(newBoid)

    newBoid[0][0] += newBoid[1][0]
    newBoid[0][1] += newBoid[1][1]
  }
}
