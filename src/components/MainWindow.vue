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
  flock = new Flock(5)

  inc () : void {
    var c = document.getElementById('myCanvas') as HTMLCanvasElement
    var ctx = c.getContext('2d') as CanvasRenderingContext2D
    ctx.clearRect(0, 0, 1250, 500)
    this.flock.move()
    this.flock.boids_.forEach(boid => {
      ctx.beginPath()
      ctx.arc(boid.pos_[0], boid.pos_[1], 2, 0, 2 * Math.PI)
      ctx.stroke()
      ctx.closePath()
    })
    requestAnimationFrame(this.inc)
  }
}
</script>
