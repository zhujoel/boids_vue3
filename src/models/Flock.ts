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
      this.boids_.push(new Boid([Math.random() * 1250, Math.random() * 500], [0, 0], i))
    }
  }

  cloneBoids () : Boid[] {
    const newFlock: Boid[] = []
    this.boids_.forEach(boid => {
      newFlock.push(boid.clone())
    })
    return newFlock
  }

  move () : void {
    const cloneBoids = this.cloneBoids()

    this.boids_.forEach(boid => {
      const neighbours: Boid[] = []
      this.rules_.forEach(rule => {
        cloneBoids.forEach(neighbour => {
          if (rule.isIn(boid, neighbour)) {
            neighbours.push(neighbour)
          }
        })
        const ruleAcc = rule.apply(boid, neighbours)
        const acceleration: [number, number] = [0, 0]
        acceleration[0] += ruleAcc[0]
        acceleration[1] += ruleAcc[1]
        boid.applyAcceleration(acceleration)
      })
    })
  }
}
