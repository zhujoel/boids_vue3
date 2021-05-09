import Boid from './Boid'
import IRule from './rules/IRule'
import CohesionRule from './rules/CohesionRule'
import AlignmentRule from './rules/AlignmentRule'
import SeparationRule from './rules/SeparationRule'
import BoundRule from './rules/BoundRule'
import Point from './Point'

export default class Flock {
  public boids_: Boid[]
  public rules_: IRule[]
  public size_: number

  constructor (size: number) {
    this.size_ = size
    // this.rules_ = [new CohesionRule(), new AlignmentRule(), new SeparationRule()]
    this.rules_ = [new CohesionRule(), new AlignmentRule(), new SeparationRule()]
    this.boids_ = []
    for (let i = 0; i < size; ++i) {
      this.boids_.push(new Boid(
        new Point(Math.random() * 1250, Math.random() * 500),
        new Point(Math.random(), Math.random()))
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
    const acceleration: Point = new Point(0, 0)
    this.boids_.forEach(boid => {
      this.rules_.forEach(rule => {
        const ruleAcc = rule.apply(boid, this.boids_)
        acceleration.addP(ruleAcc.multS(rule.mag_))
      })
      // tendency away from mouse position
      // acceleration[0] += (((mousePos[0] - boid.pos_[0]) / 100))
      // acceleration[1] += (((mousePos[1] - boid.pos_[1]) / 100))

      const newBoid = boid.clone()
      newBoid.applyAcceleration(acceleration)
      acceleration.multS(0)
      newBoids.push(newBoid)
    })
    this.boids_ = newBoids
  }
}
