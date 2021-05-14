<template>
  <div id="main">
    <button @click="startStop()">Go</button>
    <button @click="newPreys()">Add</button>
    <button @click="newPredator()">Add Predator</button>
    <button @click="clear()">Clear</button>
    <div> Preys: {{this.preyNo}} | Predators: {{this.predatorNo}} | Neutral: {{this.neutralNo}}</div>
    <div id="canvas"></div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
import FlockApplication from '../models/FlockApplication'

export default class MainWindow extends Vue {
  start = false
  preyNo = 0
  predatorNo = 0
  neutralNo = 0
  application: FlockApplication|undefined

  mounted () : void {
    this.application = new FlockApplication(window.innerWidth * 0.9, window.innerHeight * 0.9)
    const canvas = document.getElementById('canvas') as HTMLDivElement
    canvas.appendChild(this.application.app_.view)
    this.boidsNo()
    this.animate(this.application)
  }

  mouseMove () : void {
    console.log('ok')
  }

  startStop () : void {
    this.start = !this.start
  }

  clear () : void {
    if (this.application !== undefined) {
      this.application.clear()
      this.boidsNo()
    }
  }

  newPreys () : void {
    if (this.application !== undefined) {
      this.application.createPreys(50, 2, 0x0000FF)
      this.boidsNo()
    }
  }

  newPredator () : void {
    if (this.application !== undefined) {
      this.application.createPredators(1, 1, 0xFF0000)
      this.boidsNo()
    }
  }

  boidsNo () : void {
    if (this.application !== undefined) {
      this.preyNo = this.application.preys_.boids_.length
      this.predatorNo = this.application.predators_.boids_.length
      this.neutralNo = this.application.neutral_.boids_.length
    }
  }

  animate (application: FlockApplication) : void {
    application.app_.ticker.add(() => {
      if (this.start) {
        application.move()
      }
    })
  }
}
</script>
