import MainApplication from '../MainApplication'
import PredatorFlock from './PredatorFlock'
import PreyFlock from './PreyFlock'
import WallFlock from './WallFlock'

export default class FlockApplication {
  public predators_ = new PredatorFlock()
  public preys_ = new PreyFlock()
  public walls_ = new WallFlock()

  constructor () {
    this.predators_.others_.push(this.preys_)
    this.predators_.others_.push(this.walls_)
    this.preys_.others_.push(this.predators_)
    this.preys_.others_.push(this.walls_)

    this.predators_.createRandomBoids(3, 2, 'Circle', 0xFF0000)
    this.preys_.createRandomBoids(200, 3, 'Line', 0x0000FF)
  }

  clear () : void {
    this.predators_.boids_ = []
    this.preys_.boids_ = []
    this.walls_.boids_ = []
    MainApplication.app_.stage.removeChildren()
  }

  move () : void {
    this.preys_.move()
    this.predators_.move()
  }
}
