import Boid from './Boid'
import IRule from './rules/IRule'
import CohesionRule from './rules/CohesionRule'
import AlignmentRule from './rules/AlignmentRule'
import SeparationRule from './rules/SeparationRule'

export default class Flock {
  public boids_: Boid[]
  public rules_: IRule[]
  public size_: number

  constructor (size: number) {
    this.size_ = size
    this.rules_ = [new CohesionRule(), new AlignmentRule(), new SeparationRule()]
    this.boids_ = []
    for (let i = 0; i < size; ++i) {
      this.boids_.push(new Boid(
        [Math.random() * 1250, Math.random() * 500],
        [Math.random(), Math.random()],
        i)
      )
    }
  }

  move (mousePos: [number, number]) : void {
    const newBoids : Boid[] = []
    const acceleration: [number, number] = [0, 0]
    this.boids_.forEach(boid => {
      this.rules_.forEach(rule => {
        const ruleAcc = rule.apply(boid, this.boids_)
        acceleration[0] += rule.mag_ * ruleAcc[0]
        acceleration[1] += rule.mag_ * ruleAcc[1]
      })
      // tendency away from mouse position
      acceleration[0] += (((mousePos[0] - boid.pos_[0]) / 100))
      acceleration[1] += (((mousePos[1] - boid.pos_[1]) / 100))

      const newBoid = boid.clone()
      newBoid.applyAcceleration(acceleration)
      acceleration[0] = 0
      acceleration[1] = 0
      newBoids.push(newBoid)
    })
    this.boids_ = newBoids
  }
}
