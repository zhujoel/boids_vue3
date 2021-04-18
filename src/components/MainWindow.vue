<template>
  <div class="main">
    <h1>{{ msg }}</h1>
    <canvas id="myCanvas" width="200" height="100" style="border:1px solid #000000;"/>
    <button @click="inc()">{{cnt}}</button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { boidStore } from '../store/BoidStore'

@Options({
  props: {
    msg: String
  }
})
export default class HelloWorld extends Vue {
  msg!: string
  cnt = 0

  mounted () : void {
    const boids = [[0, 0], [40, 50], [40, 80], [20, 50]]
    var c = document.getElementById('myCanvas') as HTMLCanvasElement
    var ctx = c.getContext('2d') as CanvasRenderingContext2D
    boids.forEach(
      boid => {
        ctx.beginPath()
        ctx.arc(boid[0], boid[1], 10, 0, 2 * Math.PI)
        ctx.stroke()
      })
  }

  inc () : void {
    boidStore.incrementCount()
    this.cnt = boidStore.getState().count
  }
}
</script>
