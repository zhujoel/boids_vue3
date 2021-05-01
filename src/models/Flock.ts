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
      this.boids_.push(new Boid(
        [Math.random() * 625, Math.random() * 400],
        [Math.random(), Math.random()],
        i)
      )
    }
  }

  move () : void {
    const newBoids : number[][][] = []
    const acceleration: [number, number] = [0, 0]
    this.boids_.forEach(boid => {
      this.rules_.forEach(rule => {
        const ruleAcc = rule.apply(boid, this.boids_)
        acceleration[0] += ruleAcc[0]
        acceleration[1] += ruleAcc[1]
      })
      const newBoid = [boid.pos().slice(), boid.vel_.slice()]
      boid.applyAccTmp(newBoid, acceleration)
      acceleration[0] = 0
      acceleration[1] = 0
      newBoids.push(newBoid)
    })
    for (let i = 0; i < this.boids_.length; ++i) {
      this.boids_[i].graphics.x = newBoids[i][0][0]
      this.boids_[i].graphics.y = newBoids[i][0][1]
      this.boids_[i].vel_[0] = newBoids[i][1][0]
      this.boids_[i].vel_[0] = newBoids[i][1][1]
    }
    // this.boids_ = newBoids
    // const newBoids : Boid[] = []
    // const acceleration: [number, number] = [0, 0]
    // this.boids_.forEach(boid => {
    //   this.rules_.forEach(rule => {
    //     const ruleAcc = rule.apply(boid, this.boids_)
    //     acceleration[0] += ruleAcc[0]
    //     acceleration[1] += ruleAcc[1]
    //   })
    //   const newBoid = boid.clone()
    //   newBoid.applyAcceleration(acceleration)
    //   acceleration[0] = 0
    //   acceleration[1] = 0
    //   newBoids.push(newBoid)
    // })
    // this.boids_ = newBoids
    // this.boids_.forEach(boid => {
    //   boid.graphics.x += 1
    //   boid.graphics.y += 1
    // })
  }
}
