import Boid from './Boid'

export default class Flock {
  public boids_: Boid[]
  public size_: number

  constructor (size: number) {
    this.size_ = size
    this.boids_ = []
    for (let i = 0; i < size; ++i) {
      this.boids_.push(new Boid([Math.random() * 50, Math.random() * 50], [0, 0], i))
    }
  }
}
