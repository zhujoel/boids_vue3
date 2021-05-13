import Boid from './Boid'
import CohesionRule from './rules/CohesionRule'
import AlignmentRule from './rules/AlignmentRule'
import SeparationRule from './rules/SeparationRule'
import BoundRule from './rules/BoundRule'
import Point from './Point'

export default class Flock {
  public boids_: Boid[]
  public ali_ : AlignmentRule = new AlignmentRule()
  public coh_ : CohesionRule = new CohesionRule()
  public sep_ : SeparationRule = new SeparationRule()
  public bound_ : BoundRule = new BoundRule()
  public size_: number

  constructor (size: number) {
    this.size_ = size
    this.boids_ = []
    for (let i = 0; i < size; ++i) {
      this.boids_.push(new Boid(
        new Point(Math.random() * 1250, Math.random() * 500),
        new Point(Math.random() * 10 - 5, Math.random() * 10 - 5))
      )
    }
  }

  drawBoid (boid: Boid) : void {
    const angle = Math.atan2(boid.vel_.y_, boid.vel_.x_)
    // boid.graphics_.translate(boid.pos_.x_, boid.pos_.y_)
    // boid.graphics_.rotate(angle)
    // boid.graphics_.translate(-boid.pos_.x_, -boid.pos_.y_)
    // boid.graphics_.fillStyle = '#558cf4'
    boid.graphics_.clear()
    boid.graphics_.lineStyle(1, 0xff0000, 1)
    boid.graphics_.moveTo(boid.pos_.x_, boid.pos_.y_)
    boid.graphics_.lineTo(boid.pos_.x_ + boid.vel_.x_ * 5, boid.pos_.y_ + boid.vel_.y_ * 5)
    boid.graphics_.closePath()
  }

  move () : void {
    const newBoids : Boid[] = []
    this.boids_.forEach(boid => {
      this.coh_.apply(boid, this.boids_)
      this.sep_.apply(boid, this.boids_)
      this.ali_.apply(boid, this.boids_)
      boid.limitVelocity()
      this.bound_.apply(boid, 1250, 500)
      boid.pos_.addP(boid.vel_)
      boid.graphics_.position.x = boid.pos_.x_
      boid.graphics_.position.y = boid.pos_.y_
      this.drawBoid(boid)
    })
  }
}
