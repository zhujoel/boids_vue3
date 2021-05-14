import Boid from '../Boid'
import MainApplication from '../MainApplication'

export function apply (current: Boid, boids: Boid[], dist: number) : boolean {
  for (let i = 0; i < boids.length; ++i) {
    if (current.pos_.dist(boids[i].pos_) < dist) {
      MainApplication.app_.stage.removeChild(boids[i].graphics_)
      boids.splice(i, 1)
      return true
    }
  }
  return false
}
