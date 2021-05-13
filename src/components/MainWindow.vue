<template>
  <div id="main">
    <button @click="startStop()">Click !</button>
    <div id="canvas"></div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
import Flock from '../models/Flock'
import * as PIXI from 'pixi.js'

export default class MainWindow extends Vue {
  start = false
  width = window.innerWidth * 0.9
  height = window.innerHeight * 0.9

  mounted () : void {
    this.animate(new Flock(100, this.width, this.height))
  }

  startStop () : void {
    this.start = !this.start
  }

  animate (flock : Flock) : void {
    const app = new PIXI.Application({
      width: this.width,
      height: this.height,
      backgroundColor: 0xeff7fd
    })
    const main = document.getElementById('canvas') as HTMLDivElement
    main.appendChild(app.view)
    flock.boids_.forEach(boid => {
      app.stage.addChild(boid.graphics_)
    })
    flock.predators_.forEach(pred => {
      app.stage.addChild(pred.graphics_)
    })

    app.ticker.add(() => {
      if (this.start) {
        flock.move()
      }
    })
  }
}
</script>
