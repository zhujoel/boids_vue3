import Boid from '../Boid'
import MainApplication from '../MainApplication'
import IFlock from './IFlock'
import SeparationRule from '@/models/rules/SeparationRule'

export default class PredatorFlock extends IFlock {
  constructor (name: string, color = 0x000000) {
    super(name, color)
    this.rules_.push(new SeparationRule('Separation', 25, Math.PI, 0.5))
  }

  isPreyFlock () : boolean {
    return false
  }

  applyFlock (boid: Boid) : void {
    const rule = new SeparationRule('Separation', MainApplication.randomNum(1, 35), Math.PI * 0.4, 0.1)
    rule.apply(boid, this.boids_)
  }

  move () : void {
    this.boids_.forEach(pred => {
      this.rules_.forEach(r => {
        r.apply(pred, this.boids_)
      })
      this.apply(pred)
    })
    this.draw()
  }
}
