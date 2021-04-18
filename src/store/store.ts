import { reactive, readonly } from 'vue'

export abstract class Store<T extends Record<string, unknown>> {
  protected state: T;

  constructor () {
    const data = this.data()
    this.setup(data)
    this.state = reactive(data) as T
  }

  protected abstract data (): T

  protected abstract setup (data: T): void

  public getState (): T {
    return readonly(this.state) as T
  }
}
