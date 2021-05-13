<template>
  <div id="main">
    <button @click="startStop()">Click !</button>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
import Flock from '../models/Flock'
import * as PIXI from 'pixi.js'

export default class MainWindow extends Vue {
  start = false

  mounted () : void {
    this.animate(new Flock(100))
  }

  startStop () : void {
    this.start = !this.start
  }

  animate (flock : Flock) : void {
    const app = new PIXI.Application({ width: 1250, height: 800 })
    const main = document.getElementById('main') as HTMLDivElement
    main.appendChild(app.view)
    flock.boids_.forEach(boid => {
      app.stage.addChild(boid.graphics_)
    })

    app.ticker.add(() => {
      // this.app.stage.getChildAt(0).x += 5
      // this.flock.boids_[0].graphics.x += 5
      if (this.start) {
        flock.move()
      }
    })
  }
}
</script>
