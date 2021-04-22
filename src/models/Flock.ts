import Boid from './Boid'
import IRule from './IRule'
import CohesionRule from './CohesionRule'
import AlignmentRule from './AlignmentRule'
import SeparationRule from './SeparationRule'

export default class Flock {
  public boids_: Boid[]
  public rules_: IRule[]
  public size_: number

  constructor (size: number) {
    this.size_ = size
    this.rules_ = [new CohesionRule(), new AlignmentRule(), new SeparationRule()]
    this.boids_ = []
    for (let i = 0; i < size; ++i) {
      this.boids_.push(new Boid([Math.random() * 1250, Math.random() * 500], [Math.random(), Math.random()], i))
    }
  }

  move () : void {
    const newBoids : Boid[] = []
    const acceleration: [number, number] = [0, 0]
    this.boids_.forEach(boid => {
      this.rules_.forEach(rule => {
        const ruleAcc = rule.apply(boid, this.boids_)
        acceleration[0] += ruleAcc[0]
        acceleration[1] += ruleAcc[1]
      })
      const newBoid = boid.clone()
      newBoid.applyAcceleration(acceleration)
      acceleration[0] = 0
      acceleration[1] = 0
      newBoids.push(newBoid)
    })
    this.boids_ = newBoids
  }
}
