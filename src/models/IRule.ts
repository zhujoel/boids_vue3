import Boid from './Boid'

export default interface IRule {
  readonly name_: string
  apply (boid: Boid, neighbours: Boid[]) : number[]
}