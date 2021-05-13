import * as PIXI from 'pixi.js'
import Point from './Point'
import Boid from './Boid'
import * as Cohesion from './rules/CohesionRule'
import * as Alignment from './rules/AlignmentRule'
import * as Separation from './rules/SeparationRule'
import * as BoundApply from './rules/BoundRule'

export default class Flock {
  public app_: PIXI.Application

  public width_: number
  public height_: number

  public predators_: Boid[]
  public boids_: Boid[]
  public others_: Boid[]

  constructor (size: number, width: number, height: number) {
    this.app_ = new PIXI.Application({
      width: width,
      height: height,
      backgroundColor: 0xeff7fd
    })

    this.width_ = width
    this.height_ = height
    this.boids_ = []
    this.predators_ = []
    this.others_ = []
    this.createRandomBoids(this.boids_, size, 2, 0x0000FF)
    this.createRandomBoids(this.predators_, 3, 1, 0xFF0000)
    this.createRandomBoids(this.others_, 30, 1.5, 0x00FF00)
  }

  createRandomBoids (list : Boid[], amount = 1, MAX_VEL = 3, color = 0xFFFFFF) : void {
    for (let i = 0; i < amount; ++i) {
      const b = new Boid(
        new Point(Math.random() * this.width_ / 2, Math.random() * this.height_ / 2),
        new Point(Math.random() * 6 - 3, Math.random() * 6 - 3),
        MAX_VEL,
        color)
      list.push(b)
      this.app_.stage.addChild(b.graphics_)
    }
  }

  clear () : void {
    this.boids_ = []
    this.predators_ = []
    this.app_.stage.removeChildren()
  }

  randomNum (min = 0, max = 1) : number {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1))
  }

  move () : void {
    this.predators_.forEach(pred => {
      // attraction to preys, negative magnitude reverses the behaviour of the rule
      Separation.apply(pred, this.boids_, 100, Math.PI * 0.4, -0.05)
      Separation.apply(pred, this.predators_, 75, Math.PI, 0.5)
      pred.limitVelocity()
      BoundApply.apply(pred, 1, this.width_ / 2, this.height_ / 2)
      pred.pos_.addP(pred.vel_)
      pred.draw()
    })

    this.boids_.forEach(boid => {
      Cohesion.apply(boid, this.boids_, 100, Math.PI * 0.3, 0.005)
      Separation.apply(boid, this.boids_, 15, Math.PI, 0.05)
      Alignment.apply(boid, this.boids_, 100, Math.PI * 0.3, 0.05)
      // run away from predators
      Separation.apply(boid, this.predators_, this.randomNum(1, 35), Math.PI * 0.4, 0.2)
      boid.limitVelocity()
      BoundApply.apply(boid, 1, this.width_ / 2, this.height_ / 2)
      boid.pos_.addP(boid.vel_)
      boid.draw()
    })

    this.others_.forEach(other => {
      Cohesion.apply(other, this.others_, 100, Math.PI * 0.3, 0.005)
      Separation.apply(other, this.others_, 15, Math.PI, 0.05)
      Alignment.apply(other, this.others_, 100, Math.PI * 0.3, 0.05)
      other.limitVelocity()
      BoundApply.apply(other, 1, this.width_ / 2, this.height_ / 2)
      other.pos_.addP(other.vel_)
      other.draw()
    })
  }
}
