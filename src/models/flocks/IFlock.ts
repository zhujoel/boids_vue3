import Boid from '../Boid'
import Point from '../Point'
import * as Bound from '../rules/BoundRule'
import MainApplication from '../MainApplication'

export default abstract class IFlock {
  boids_: Boid[]
  readonly others_: IFlock[]

  constructor () {
    this.boids_ = []
    this.others_ = []
  }

  createRandomBoid (MAX_VEL = 3, color = 0xFFFFFF) : Boid {
    return new Boid(
      new Point(Math.random() * MainApplication.width_ / 2, Math.random() * MainApplication.height_ / 2),
      new Point(Math.random() * 6 - 3, Math.random() * 6 - 3),
      MAX_VEL, color)
  }

  randomNum (min = 0, max = 1) : number {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1))
  }

  apply (boid: Boid) : void {
    boid.limitVelocity()
    this.applyOthers(boid)
    Bound.apply(boid, 1, MainApplication.width_ / 2, MainApplication.height_ / 2)
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
