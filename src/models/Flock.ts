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
      this.boids_.push(new Boid([Math.random() * 50, Math.random() * 50], [0, 0], i))
    }
  }

  move () : void {
    for (let i = 0; i < this.size_; ++i) {
      this.boids_.push(new Boid([Math.random() * 50, Math.random() * 50], [0, 0], i))
    }
  }
}
