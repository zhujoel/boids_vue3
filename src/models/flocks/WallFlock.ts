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
    const b = new Boid(p.divS(2), new Point(0, 0), 0xFF0000, 15)
    this.boids_.push(b)
    b.graphics_ = new Graphics()
      .beginFill(0xA7A7A7, 1)
      .drawCircle(b.pos_.x_ * 2, b.pos_.y_ * 2, b.size_)
      .endFill()
    MainApplication.app_.stage.addChild(b.graphics_)
  }

  applyFlock (boid: Boid) : void {
    Separation.apply(boid, this.boids_, 10 + boid.size_, Math.PI, 0.1)
  }

  move (): void {
    // wall does not move
  }
}
