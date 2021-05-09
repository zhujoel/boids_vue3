<template>
  <div class="main">
    <button @click="startStop()">Click !</button>
    <canvas id="myCanvas" width="1250" height="500" style="border:1px solid #000000;"/>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
import Flock from '../models/Flock'
import Boid from '../models/Boid'

export default class HelloWorld extends Vue {
  start = false
  mouseX = 0
  mouseY = 0

  mounted () : void {
    this.animate(new Flock(100))

    const canvas = document.getElementById('myCanvas') as HTMLCanvasElement
    var rect = canvas.getBoundingClientRect()

    // mouse position on the canvas to make boid go away from it
    canvas.onmousemove = e => {
      this.mouseX = e.x - rect.x
      this.mouseY = e.y - rect.y
    }
  }

  startStop () : void {
    this.start = !this.start
  }

  drawBoid (boid: Boid, context: CanvasRenderingContext2D) : void {
    // context.fillRect(boid.pos_.x_, boid.pos_.y_, 2, 2)

    const angle = Math.atan2(boid.vel_.y_, boid.vel_.x_)
    context.translate(boid.pos_.x_, boid.pos_.y_)
    context.rotate(angle)
    context.translate(-boid.pos_.x_, -boid.pos_.y_)
    context.fillStyle = '#558cf4'
    context.beginPath()
    context.moveTo(boid.pos_.x_, boid.pos_.y_)
    context.lineTo(boid.pos_.x_ - 15, boid.pos_.y_ + 5)
    context.lineTo(boid.pos_.x_ - 15, boid.pos_.y_ - 5)
    context.lineTo(boid.pos_.x_, boid.pos_.y_)
    context.fill()
    context.setTransform(1, 0, 0, 1, 0, 0)
  }

  animate (flock : Flock) : void {
    const canvas = document.getElementById('myCanvas') as HTMLCanvasElement
    const context = canvas.getContext('2d') as CanvasRenderingContext2D

    const tick = () => {
      if (this.start) {
        flock.move([this.mouseX, this.mouseY])
        context.clearRect(0, 0, 1250, 500)
        flock.boids_.forEach(boid => {
          this.drawBoid(boid, context)
        })
      }
      requestAnimationFrame(tick)
    }

    tick()
  }
}
</script>
