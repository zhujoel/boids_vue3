import FlockApplication from './FlockApplication'

export default class FlockView {
  cnt = 0
  flocks: FlockApplication

  constructor (app: FlockApplication) {
    this.flocks = app
  }

  update () : void {
    this.cnt++
  }
}
