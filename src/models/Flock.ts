import Boid from './Boid'
import CohesionRule from './rules/CohesionRule'
import AlignmentRule from './rules/AlignmentRule'
import SeparationRule from './rules/SeparationRule'
import BoundRule from './rules/BoundRule'
import Point from './Point'

export default class Flock {
  // flock
  public size_: number
  public width_: number
  public height_: number

  // predator boids
  public predators_: Boid[]
  // attraction to regular boids rule (it's just the inverse of sep)
  public attr_: SeparationRule = new SeparationRule(-0.05, 100, Math.PI * 0.4)
  public predSep_ : SeparationRule = new SeparationRule(0.5, 75, Math.PI)

  // regular boids
  public boids_: Boid[]
  public ali_ : AlignmentRule = new AlignmentRule(0.05, 100, Math.PI * 0.3)
  public coh_ : CohesionRule = new CohesionRule(0.005, 100, Math.PI * 0.3)
  public sep_ : SeparationRule = new SeparationRule(0.05, 15, Math.PI)
  public runaway_ : SeparationRule = new SeparationRule(0.2, 50, Math.PI * 0.4)
  public bound_ : BoundRule = new BoundRule(1)

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
      this.attr_.apply(pred, this.boids_)
      this.predSep_.apply(pred, this.predators_)
      pred.limitVelocity()
      this.bound_.apply(pred, this.width_ / 2, this.height_ / 2)
      pred.pos_.addP(pred.vel_)
      pred.draw()
    })

    this.boids_.forEach(boid => {
      this.coh_.apply(boid, this.boids_)
      this.sep_.apply(boid, this.boids_)
      this.ali_.apply(boid, this.boids_)
      this.runaway_.apply(boid, this.predators_)
      boid.limitVelocity()
      this.bound_.apply(boid, this.width_ / 2, this.height_ / 2)
      boid.pos_.addP(boid.vel_)
      boid.draw()
    })
  }
}
