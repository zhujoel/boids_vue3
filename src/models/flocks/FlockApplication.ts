import FlockView from './FlockView'
import IFlock from './IFlock'
import PredatorFlock from './PredatorFlock'
import PreyFlock from './PreyFlock'
import WallFlock from './WallFlock'

export default class FlockApplication {
  public walls_ = new WallFlock('Wall')
  public flocks_: IFlock[] = [
    new PredatorFlock('Predator'),
    new PreyFlock('Prey')
  ]

  constructor () {
    this.flocks_[0].others_.push(this.flocks_[1])
    this.flocks_[1].others_.push(this.flocks_[0])
    this.flocks_[0].others_.push(this.walls_)
    this.flocks_[1].others_.push(this.walls_)

    this.flocks_[0].createRandomBoids(3, 2, 'Circle', 0xFF0000)
    this.flocks_[0].createRandomBoids(200, 3, 'Line', 0x0000FF)
  }

  move (view: FlockView) : void {
    this.flocks_.forEach(flock => flock.move())
    view.update()
  }
}
