import * as PIXI from 'pixi.js'
import Boid from './Boid'
import IFlock from './flocks/IFlock'
import PredatorFlock from './flocks/PredatorFlock'
import PreyFlock from './flocks/PreyFlock'
import WallFlock from './flocks/WallFlock'
import Point from './Point'

export default class FlockApplication {
  public app_: PIXI.Application

  public width_: number
  public height_: number

  public predators_: IFlock
  public preys_: IFlock
  public neutral_: IFlock

  public down = false

  public walls_: IFlock

  constructor (width: number, height: number) {
    this.app_ = new PIXI.Application({
      width: width,
      height: height,
      backgroundColor: 0xeff7fd,
      antialias: false,
      autoDensity: false
    })
    const inter = new PIXI.InteractionManager(this.app_.renderer)
    inter.on('mousedown', (e) => {
      this.down = true
      this.wall(e)
    })
    inter.on('mousemove', (e) => {
      if (this.down) {
        this.wall(e)
      }
    })
    inter.on('mouseup', (e) => {
      this.down = false
    })

    this.width_ = width
    this.height_ = height

    this.predators_ = new PredatorFlock(width, height)
    this.preys_ = new PreyFlock(width, height)
    this.neutral_ = new PreyFlock(width, height)
    this.walls_ = new WallFlock(width, height)

    this.predators_.others_.push(this.preys_)
    this.predators_.others_.push(this.walls_)
    this.preys_.others_.push(this.predators_)
    this.preys_.others_.push(this.walls_)

    this.createPredators(3, 2, 0xFF0000)
    this.createPreys(200, 3, 0x0000FF)
    this.createNeutral(50, 3, 0x00FF00)
  }

  wall (e: any) : void {
    const p = new Point(e.data.global.x, e.data.global.y)
    this.drawWall(p)
    this.walls_.boids_.push(new Boid(p.divS(2), new Point(0, 0), 0xFF0000))
  }

  drawWall (p: Point) {
    const graphics = new PIXI.Graphics()
    graphics.lineStyle(0) // draw a circle, set the lineStyle to zero so the circle doesn't have an outline
    graphics.beginFill(0xDE3249, 1)
    graphics.drawCircle(p.x_, p.y_, 2)
    graphics.endFill()
    console.log(this.preys_.others_[1].boids_.length)
    this.app_.stage.addChild(graphics)
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

  createNeutral (amount = 1, MAX_VEL = 3, color = 0xFFFFFF) : void {
    for (let i = 0; i < amount; ++i) {
      const b = this.neutral_.createRandomBoid(MAX_VEL, color)
      this.neutral_.boids_.push(b)
      this.app_.stage.addChild(b.graphics_)
    }
  }

  randomNum (min = 0, max = 1) : number {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1))
  }

  amount () : number {
    return this.app_.stage.children.length
  }

  clear () : void {
    this.predators_.boids_ = []
    this.preys_.boids_ = []
    this.neutral_.boids_ = []
    this.walls_.boids_ = []
    this.app_.stage.removeChildren()
  }

  move () : void {
    this.preys_.move()
    this.predators_.move()
    this.neutral_.move()
  }
}
