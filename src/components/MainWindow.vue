<template>
  <div class="main">
    <button @click="startStop()">Click !</button>
    <canvas id="myCanvas" width="1250" height="500" style="border:1px solid #000000;"/>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
import Flock from '../models/Flock'

export default class HelloWorld extends Vue {
  start = false
  mouseX = 0
  mouseY = 0

  mounted () : void {
    this.animate(new Flock(20))

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

  animate (flock : Flock) : void {
    const canvas = document.getElementById('myCanvas') as HTMLCanvasElement
    const context = canvas.getContext('2d') as CanvasRenderingContext2D

    const tick = () => {
      if (this.start) {
        flock.move([this.mouseX, this.mouseY])
        context.clearRect(0, 0, 1250, 500)
        flock.boids_.forEach(boid => {
          context.fillRect(boid.pos_[0], boid.pos_[1], 2, 2)
        })
      }
      requestAnimationFrame(tick)
    }

    tick()
  }
}
</script>
