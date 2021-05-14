import * as PIXI from 'pixi.js'
import Boid from '../Boid'
import MainApplication from '../MainApplication'
import Point from '../Point'
import IFlock from './IFlock'
import PredatorFlock from './PredatorFlock'
import PreyFlock from './PreyFlock'
import WallFlock from './WallFlock'

export default class FlockApplication {
  public predators_: IFlock
  public preys_: IFlock
  public walls_: IFlock

  constructor () {
    MainApplication.interactions_.on('mouseup', (e) => {
      if (MainApplication.down) {
        this.wall(e)
      }
    })
    MainApplication.interactions_.on('mousemove', (e) => {
      if (MainApplication.down) {
        this.wall(e)
      }
    })

    this.predators_ = new PredatorFlock()
    this.preys_ = new PreyFlock()
    this.walls_ = new WallFlock()

    this.predators_.others_.push(this.preys_)
    this.predators_.others_.push(this.walls_)
    this.preys_.others_.push(this.predators_)
    this.preys_.others_.push(this.walls_)

    this.createPredators(3, 2, 0xFF0000)
    this.createPreys(200, 3, 0x0000FF)
  }

  wall (e: PIXI.InteractionEvent) : void {
    const p = new Point(e.data.global.x, e.data.global.y)
    this.drawWall(p)
    this.walls_.boids_.push(new Boid(p.divS(2), new Point(0, 0), 0xFF0000))
  }

  drawWall (p: Point) : void {
    const graphics = new PIXI.Graphics()
      .beginFill(0x000000, 1)
      .drawCircle(p.x_, p.y_, 2)
      .endFill()
    MainApplication.app_.stage.addChild(graphics)
  }

  createPredators (amount = 1, MAX_VEL = 3, color = 0xFFFFFF) : void {
    for (let i = 0; i < amount; ++i) {
      const b = this.predators_.createRandomBoid(MAX_VEL, color)
      this.predators_.boids_.push(b)
      MainApplication.app_.stage.addChild(b.graphics_)
    }
  }

  createPreys (amount = 1, MAX_VEL = 3, color = 0xFFFFFF) : void {
    for (let i = 0; i < amount; ++i) {
      const b = this.preys_.createRandomBoid(MAX_VEL, color)
      this.preys_.boids_.push(b)
      MainApplication.app_.stage.addChild(b.graphics_)
    }
  }

  randomNum (min = 0, max = 1) : number {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1))
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
