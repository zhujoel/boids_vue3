import * as PIXI from 'pixi.js'
import IFLock from './flocks/IFlock'
import PredatorFlock from './flocks/PredatorFlock'
import PreyFlock from './flocks/PreyFlock'

export default class FlockApplication {
  public app_: PIXI.Application

  public width_: number
  public height_: number

  public predators_: IFLock
  public preys_: IFLock

  constructor (width: number, height: number) {
    this.app_ = new PIXI.Application({
      width: width,
      height: height,
      backgroundColor: 0xeff7fd
    })
    this.width_ = width
    this.height_ = height

    this.predators_ = new PredatorFlock(width, height)
    this.preys_ = new PreyFlock(width, height)

    this.predators_.others_.push(this.preys_)
    this.preys_.others_.push(this.predators_)

    this.createPredators(3, 2, 0xFF0000)
    this.createPreys(100, 3, 0x0000FF)
  }

  createPredators (amount = 1, MAX_VEL = 3, color = 0xFFFFFF) : void {
    for (let i = 0; i < amount; ++i) {
      const b = this.predators_.createRandomBoid(MAX_VEL, color)
      this.predators_.boids_.push(b)
      this.app_.stage.addChild(b.graphics_)
    }
  }

  createPreys (amount = 1, MAX_VEL = 3, color = 0xFFFFFF) : void {
    for (let i = 0; i < amount; ++i) {
      const b = this.preys_.createRandomBoid(MAX_VEL, color)
      this.preys_.boids_.push(b)
      this.app_.stage.addChild(b.graphics_)
    }
  }

  randomNum (min = 0, max = 1) : number {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1))
  }

  clear () : void {
    this.predators_.boids_ = []
    this.preys_.boids_ = []
    this.app_.stage.removeChildren()
  }

  move () : void {
    this.preys_.move()
    this.predators_.move()
  }
}
