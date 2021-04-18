import { Store } from './store'

interface Click extends Record<string, unknown> {
    count: number
}

class BoidStore extends Store<Click> {
  protected data (): Click {
    return {
      count: 0
    }
  }

  protected setup (data: Click): void {
    data.count = 0
  }

  incrementCount () {
    this.state.count++
  }
}

export const boidStore: BoidStore = new BoidStore()
