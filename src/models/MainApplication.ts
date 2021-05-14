import * as PIXI from 'pixi.js'

export default class MainApplication {
  public static app_: PIXI.Application
  public static interactions_: PIXI.InteractionManager
  public static width_: number
  public static height_: number
  public static down = false

  static setup (width: number, height: number) : void {
    MainApplication.width_ = width
    MainApplication.height_ = height

    // canvas
    MainApplication.app_ = new PIXI.Application({
      width: width,
      height: height,
      backgroundColor: 0xeff7fd,
      antialias: false,
      autoDensity: false
    })

    // mouse events
    MainApplication.interactions_ = new PIXI.InteractionManager(MainApplication.app_.renderer)
    MainApplication.interactions_.on('mousedown', () => {
      MainApplication.down = true
    })
    MainApplication.interactions_.on('mouseup', () => {
      MainApplication.down = false
    })
  }
}
