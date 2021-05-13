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

  // boids
  public boids_: Boid[]

  // rules
  public ali_ : AlignmentRule = new AlignmentRule(0.05, 100, Math.PI * 0.3)
  public coh_ : CohesionRule = new CohesionRule(0.005, 100, Math.PI * 0.3)
  public sep_ : SeparationRule = new SeparationRule(0.05, 15, Math.PI)
  public bound_ : BoundRule = new BoundRule(1)

  constructor (size: number, width: number, height: number) {
    this.size_ = size
    this.width_ = width
    this.height_ = height
    this.boids_ = []
    for (let i = 0; i < size; ++i) {
      this.boids_.push(new Boid(
        new Point(Math.random() * this.width_, Math.random() * this.height_),
        new Point(1, 1))
      )
    }
  }

  move () : void {
    this.boids_.forEach(boid => {
      this.coh_.apply(boid, this.boids_)
      this.sep_.apply(boid, this.boids_)
      this.ali_.apply(boid, this.boids_)
      boid.limitVelocity()
      this.bound_.apply(boid, this.width_ / 2, this.height_ / 2)
      boid.pos_.addP(boid.vel_)
      boid.graphics_.position.x = boid.pos_.x_
      boid.graphics_.position.y = boid.pos_.y_
      boid.draw()
    })
  }
}
