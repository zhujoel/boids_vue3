import Boid from './Boid'

export default interface IRule {
  readonly name_: string
  apply (current: Boid, neighbours: Boid[]) : [number, number]
}