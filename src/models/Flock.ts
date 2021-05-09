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
    // this.boids_.push(new Boid(new Point(350, 350), new Point(1, 1)))
    // this.boids_.push(new Boid(new Point(400, 350), new Point(-1, 1)))
    // this.boids_.push(new Boid(new Point(350, 400), new Point(1, -1)))
    // this.boids_.push(new Boid(new Point(400, 400), new Point(-1, -1)))

    // this.boids_.push(new Boid([50, 50], [1, 1], 0))
    // this.boids_.push(new Boid([100, 50], [-1, 1], 1))
    // this.boids_.push(new Boid([50, 100], [1, -1], 2))
    // this.boids_.push(new Boid([100, 100], [-1, -1], 3))
  }

  move (mousePos: [number, number]) : void {
    const newBoids : Boid[] = []
    this.boids_.forEach(boid => {
      // const newBoid = boid.clone()
      this.coh_.apply(boid, this.boids_)
      this.sep_.apply(boid, this.boids_)
      this.ali_.apply(boid, this.boids_)
      boid.limitVelocity()
      this.bound_.apply(boid, 1250, 500)

      boid.pos_.addP(boid.vel_)
      // newBoids.push(newBoid)
    })
    // this.boids_ = newBoids
  }
}
