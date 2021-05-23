import Boid from '../Boid'
import MainApplication from '../MainApplication'
import * as Separation from '../rules/SeparationRule'
import IFlock from './IFlock'
import { InteractionEvent, Graphics } from 'pixi.js'
import Point from '../Point'

export default class WallFlock extends IFlock {
  constructor (name: string) {
    super(name)

    MainApplication.interactions_
      .on('mouseup', (e) => {
        if (MainApplication.down) {
          this.wall(e)
        }
      })
      .on('mousemove', (e) => {
        if (MainApplication.down) {
          this.wall(e)
        }
      })
  }

  isPreyFlock () : boolean {
    return false
  }

  wall (e: InteractionEvent) : void {
    const p = new Point(e.data.global.x, e.data.global.y)
    // this.drawWall(p)
    const b = new Boid(p.divS(2), new Point(0, 0), 0xFF0000)
    this.boids_.push(b)
    b.graphics_ = new Graphics()
      .beginFill(0x000000, 1)
      .drawCircle(b.pos_.x_ * 2, b.pos_.y_ * 2, 2)
      .endFill()
    MainApplication.app_.stage.addChild(b.graphics_)
  }

  drawWall (p: Point) : void {
    const graphics = new Graphics()
      .beginFill(0x000000, 1)
      .drawCircle(p.x_, p.y_, 2)
      .endFill()
    MainApplication.app_.stage.addChild(graphics)
  }

  applyFlock (boid: Boid) : void {
    Separation.apply(boid, this.boids_, 10, Math.PI, 0.1)
  }

  move (): void {
    // wall does not move
  }
}
