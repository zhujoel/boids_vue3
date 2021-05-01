<template>
  <div id="main">
    <button @click="inc()">Click !</button> <br>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
import Flock from '../models/Flock'
import * as PIXI from 'pixi.js'

export default class HelloWorld extends Vue {
  // app = new PIXI.Application({ width: 1250, height: 800 })

  mounted () : void {
    // const main = document.getElementById('main') as HTMLDivElement
    // main.appendChild(this.app.view)
    // this.flock.boids_.forEach(boid => {
    //   this.app.stage.addChild(boid.graphics)
    // })
  }

  inc () : void {
    const flock = new Flock(100)
    const app = new PIXI.Application({ width: 1250, height: 800 })
    const main = document.getElementById('main') as HTMLDivElement
    main.appendChild(app.view)
    flock.boids_.forEach(boid => {
      app.stage.addChild(boid.graphics)
    })
    // this.flock.boids_.forEach(boid => {
    //   var graphics = new PIXI.Graphics()
    //   graphics.beginFill(0xFFFF00)
    //   graphics.lineStyle(5, 0xFF0000)
    //   graphics.drawRect(boid.pos_[0], boid.pos_[1], 5, 5)
    //   this.app.stage.addChild(graphics)
    // })
    // this.flock.move()
    // this.app.ticker.add(() => {
    //   this.flock.boids_.forEach(boid => {
    //     this.graphics[boid.idx_].x = boid.pos_[0]
    //     this.graphics[boid.idx_].y = boid.pos_[1]
    //   })
    // })

    // this.flock.move()
    app.ticker.add(() => {
      // this.app.stage.getChildAt(0).x += 5
      // this.flock.boids_[0].graphics.x += 5
      flock.move()
    })
  }
}
</script>
