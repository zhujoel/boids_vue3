import Boid from '../Boid'
import Point from '../Point'
import * as Bound from '../rules/BoundRule'
import MainApplication from '../MainApplication'
import IRule from '../rules/IRule'

export default abstract class IFlock {
  name_: string
  rules_: IRule[]
  boids_: Boid[]
  color_: number
  readonly others_: IFlock[]

  constructor (name: string, color = 0x000000) {
    this.name_ = name
    this.rules_ = []
    this.boids_ = []
    this.others_ = []
    this.color_ = color
  }

  createRandomBoids (amount = 1, MAX_VEL = 3) : void {
    for (let i = 0; i < amount; ++i) {
      const b = this.createRandomBoid(MAX_VEL)
      this.boids_.push(b)
      MainApplication.app_.stage.addChild(b.graphics_)
    }
    this.draw()
  }

  createRandomBoid (MAX_VEL = 3) : Boid {
    return new Boid(
      new Point(Math.random() * MainApplication.width_ / 2, Math.random() * MainApplication.height_ / 2),
      new Point(Math.random() * 6 - 3, Math.random() * 6 - 3),
      MAX_VEL)
  }

  apply (boid: Boid) : void {
    boid.limitVelocity()
    this.applyOthers(boid)
    Bound.apply(boid, 1, MainApplication.width_ / 2, MainApplication.height_ / 2)
    boid.pos_.addP(boid.vel_)
  }

  applyOthers (boid: Boid) : void {
    this.others_.forEach(flock => {
      flock.applyFlock(boid)
    })
  }

  draw () : void {
    this.boids_.forEach(boid => {
      boid.graphics_.position.x = boid.pos_.x_
      boid.graphics_.position.y = boid.pos_.y_
      boid.graphics_
        .clear()
        .lineStyle(boid.size_, this.color_)
        .moveTo(boid.pos_.x_, boid.pos_.y_)
        .lineTo(boid.pos_.x_ + boid.vel_.x_ * boid.size_, boid.pos_.y_ + boid.vel_.y_ * boid.size_)
        .closePath()
    })
  }

  abstract isPreyFlock () : boolean

  abstract applyFlock (boid: Boid) : void

  abstract move () : void
}
