import FlockView from './FlockView'
import IFlock from './IFlock'
import PredatorFlock from './PredatorFlock'
import PreyFlock from './PreyFlock'
import WallFlock from './WallFlock'

export default class FlockApplication {
  public walls_ = new WallFlock('Wall')
  public flocks_: IFlock[] = [
    new PredatorFlock('Predator', 0xFF0000),
    new PreyFlock('Prey', 0x000000)
  ]

  constructor () {
    this.flocks_[0].others_.push(this.flocks_[1])
    this.flocks_[1].others_.push(this.flocks_[0])
    this.flocks_[0].others_.push(this.walls_)
    this.flocks_[1].others_.push(this.walls_)

    this.flocks_[0].createRandomBoids(2, 2, 6)
    this.flocks_[1].createRandomBoids(200, 3)
  }

  move (view: FlockView) : void {
    this.flocks_.forEach(flock => flock.move())
    view.update()
  }
}
