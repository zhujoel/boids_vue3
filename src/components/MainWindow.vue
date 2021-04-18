<template>
  <div class="main">
    <h1>{{ msg }}</h1>
    <canvas id="myCanvas" width="200" height="100" style="border:1px solid #000000;"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Flock from '../models/Flock'

@Options({
  props: {
    msg: String
  }
})
export default class HelloWorld extends Vue {
  msg!: string
  cnt = 0

  inc () : void {
    var c = document.getElementById('myCanvas') as HTMLCanvasElement
    var ctx = c.getContext('2d') as CanvasRenderingContext2D
    ctx.clearRect(0, 0, 200, 100)
    const flock = new Flock(5)
    flock.move()
    flock.boids_.forEach(
      boid => {
        ctx.beginPath()
        ctx.arc(boid.pos_[0], boid.pos_[1], 2, 0, 2 * Math.PI)
        ctx.stroke()
        ctx.closePath()
      }
    )
    requestAnimationFrame(this.inc)
  }
}
</script>
