<template>
  <div class="main">
    <button @click="inc()">Click !</button>
    <canvas id="myCanvas" width="1250" height="500" style="border:1px solid #000000;"/>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
import Flock from '../models/Flock'

export default class HelloWorld extends Vue {
  flock = new Flock(50)
  c! : HTMLCanvasElement
  ctx! : CanvasRenderingContext2D

  mounted () : void {
    this.c = document.getElementById('myCanvas') as HTMLCanvasElement
    this.ctx = this.c.getContext('2d') as CanvasRenderingContext2D
  }

  inc () : void {
    this.ctx.save()
    this.flock.move()
    this.flock.boids_.forEach(boid => {
      this.ctx.fillRect(boid.pos_[0], boid.pos_[1], 2, 2)
      // ctx.arc(boid.pos_[0], boid.pos_[1], 3, 0, 2 * Math.PI)
      // ctx.arc(boid.pos_[0] + boid.vel_[0], boid.pos_[1] + boid.vel_[1], 1, 0, 2 * Math.PI)
    })
    this.ctx.restore()
    requestAnimationFrame(this.inc)
  }
}
</script>
