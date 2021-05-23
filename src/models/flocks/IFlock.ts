import Boid from '../Boid'
import Point from '../Point'
import * as Bound from '../rules/BoundRule'
import MainApplication from '../MainApplication'
import IRule from '../rules/IRule'

export default abstract class IFlock {
  name_: string
  rules_: IRule[]
  boids_: Boid[]
  readonly others_: IFlock[]

  constructor (name: string) {
    this.name_ = name
    this.rules_ = []
    this.boids_ = []
    this.others_ = []
  }

  createRandomBoids (amount = 1, MAX_VEL = 3, style = 'Line', color = 0xFFFFFF) : void {
    for (let i = 0; i < amount; ++i) {
      const b = this.createRandomBoid(MAX_VEL, style, color)
      this.boids_.push(b)
      console.log(b)
      MainApplication.app_.stage.addChild(b.graphics_)
    }
  }

  createRandomBoid (MAX_VEL = 3, style = 'Line', color = 0xFFFFFF) : Boid {
    return new Boid(
      new Point(Math.random() * MainApplication.width_ / 2, Math.random() * MainApplication.height_ / 2),
      new Point(Math.random() * 6 - 3, Math.random() * 6 - 3),
      MAX_VEL, style, color)
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
