import Boid from './Boid'

export default interface IRule {
  readonly name_: string
  distance () : number
  apply (current: Boid, neighbours: Boid[]) : [number, number]
}