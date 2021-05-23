import { Application, InteractionManager } from 'pixi.js'
import Boid from './Boid'
import FlockApplication from './flocks/FlockApplication'
import IFlock from './flocks/IFlock'

export default class MainApplication {
  public static app_: Application
  public static interactions_: InteractionManager
  public static width_: number
  public static height_: number
  public static down = false

  public static flocks_: FlockApplication

  static setup (width: number, height: number) : void {
    MainApplication.width_ = width
    MainApplication.height_ = height

    // canvas
    MainApplication.app_ = new Application({
      width: width,
      height: height,
      backgroundColor: 0xeff7fd,
      antialias: false,
      autoDensity: false
    })

    // mouse events
    MainApplication.interactions_ = new InteractionManager(MainApplication.app_.renderer)
    MainApplication.interactions_.on('mousedown', () => {
      MainApplication.down = true
    })
    MainApplication.interactions_.on('mouseup', () => {
      MainApplication.down = false
    })

    this.flocks_ = new FlockApplication()
  }

  static randomNum (min = 0, max = 1) : number {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1))
  }

  static removeBoidFromApp (boid: Boid) : void {
    MainApplication.app_.stage.removeChild(boid.graphics_)
  }

  static removeFlockFromApp (flock: IFlock) : void {
    for (let i = 0; i < flock.boids_.length; ++i) {
      MainApplication.removeBoidFromApp(flock.boids_[i])
    }
  }
}
