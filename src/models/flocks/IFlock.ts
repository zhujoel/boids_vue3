import Boid from '../Boid'
import Point from '../Point'
import * as Bound from '../rules/BoundRule'

export default abstract class IFlock {
  readonly width_: number
  readonly height_: number
  boids_: Boid[]
  readonly others_: IFlock[]

  constructor (width: number, height: number) {
    this.width_ = width
    this.height_ = height
    this.boids_ = []
    this.others_ = []
  }

  createRandomBoid (MAX_VEL = 3, color = 0xFFFFFF) : Boid {
    return new Boid(
      new Point(Math.random() * this.width_ / 2, Math.random() * this.height_ / 2),
      new Point(Math.random() * 6 - 3, Math.random() * 6 - 3),
      MAX_VEL, color)
  }

  randomNum (min = 0, max = 1) : number {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1))
  }

  apply (boid: Boid) : void {
    boid.limitVelocity()
    this.applyOthers(boid)
    Bound.apply(boid, 1, this.width_ / 2, this.height_ / 2)
    boid.pos_.addP(boid.vel_)
    boid.draw()
  }

  applyOthers (boid: Boid) : void {
    this.others_.forEach(flock => {
      flock.applyFlock(boid)
    })
  }

  abstract applyFlock (boid: Boid) : void

  abstract move () : void
}
