export default class Point {
    public x_: number
    public y_: number

    constructor (x: number, y: number) {
      this.x_ = x
      this.y_ = y
    }

    clone () : Point {
      return new Point(this.x_, this.y_)
    }

    isNull () : boolean {
      return this.x_ === 0 && this.y_ === 0
    }

    dist (other: Point) : number {
      const x = other.x_ - this.x_
      const y = other.y_ - this.y_
      return Math.sqrt(x * x + y * y)
    }

    // add with a point
    addP (other: Point) : Point {
      this.x_ += other.x_
      this.y_ += other.y_
      return this
    }

    // add with a scalar
    addS (scalar: number) : Point {
      this.x_ += scalar
      this.y_ += scalar
      return this
    }

    subP (other: Point) : Point {
      this.x_ -= other.x_
      this.y_ -= other.y_
      return this
    }

    norm2 () : number {
      return Math.sqrt(this.x_ * this.x_ + this.y_ * this.y_)
    }

    dotProd (other: Point) : number {
      return this.x_ * other.x_ + this.y_ * other.y_
    }

    divS (scalar: number) : Point {
      this.x_ /= scalar
      this.y_ /= scalar
      return this
    }

    multS (scalar: number) : Point {
      this.x_ *= scalar
      this.y_ *= scalar
      return this
    }
}
