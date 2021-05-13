import Point from './Point'
import Boid from './Boid'
import * as Cohesion from './rules/CohesionRule'
import * as Alignment from './rules/AlignmentRule'
import * as Separation from './rules/SeparationRule'
import * as BoundApply from './rules/BoundRule'

export default class Flock {
  // flock
  public size_: number
  public width_: number
  public height_: number

  public predators_: Boid[]
  public boids_: Boid[]

  constructor (size: number, width: number, height: number) {
    this.size_ = size
    this.width_ = width
    this.height_ = height
    this.boids_ = []
    for (let i = 0; i < size; ++i) {
      this.boids_.push(new Boid(
        new Point(Math.random() * this.width_, Math.random() * this.height_),
        new Point(1, 1),
        0x0000FF)
      )
    }

    this.predators_ = []
    for (let i = 0; i < 3; ++i) {
      this.predators_.push(new Boid(
        new Point(Math.random() * this.width_, Math.random() * this.height_),
        new Point(1, 1),
        0xFF0000)
      )
    }
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
      Separation.apply(boid, this.predators_, 50, Math.PI * 0.4, 0.2)
      boid.limitVelocity()
      BoundApply.apply(boid, 1, this.width_ / 2, this.height_ / 2)
      boid.pos_.addP(boid.vel_)
      boid.draw()
    })
  }
}
