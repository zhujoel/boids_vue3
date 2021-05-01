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

  mounted () : void {
    this.animate(new Flock(250))
  }

  startStop () : void {
    this.start = !this.start
  }

  animate (flock : Flock) : void {
    const c = document.getElementById('myCanvas') as HTMLCanvasElement
    const ctx = c.getContext('2d') as CanvasRenderingContext2D

    const tick = () => {
      if (this.start) {
        flock.move()
        ctx.clearRect(0, 0, 1250, 500)
        flock.boids_.forEach(boid => {
          ctx.fillRect(boid.pos_[0], boid.pos_[1], 2, 2)
        })
      }
      requestAnimationFrame(tick)
    }

    tick()
  }
}
</script>
