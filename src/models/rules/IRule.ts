import Boid from '../Boid'

export default abstract class IRule {
  name_: string
  params_: { [id: string]: number} = {}

  constructor (name: string) {
    this.name_ = name
  }

  abstract apply (current: Boid, boids: Boid[]) : void
}
