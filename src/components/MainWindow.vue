<template>
  <div id="main">
    <button @click="startStop()">Go</button>
    <button @click="newPreys()">Add</button>
    <button @click="newPredator()">Add Predator</button>
    <button @click="clear()">Clear</button>
    <div>Preys: {{this.preyNo}} | Predators: {{this.predatorNo}}</div>
    <div id="canvas"></div>
  </div>
</template>

<script lang="ts">
import MainApplication from '@/models/MainApplication'
import { Vue } from 'vue-class-component'
import FlockApplication from '../models/flocks/FlockApplication'

export default class MainWindow extends Vue {
  start = false
  preyNo = 0
  predatorNo = 0
  application: FlockApplication|undefined

  mounted () : void {
    MainApplication.setup(window.innerWidth * 0.9, window.innerHeight * 0.9)
    const canvas = document.getElementById('canvas') as HTMLDivElement
    canvas.appendChild(MainApplication.app_.view)
    this.application = new FlockApplication()
    this.boidsNo()
    this.animate(this.application)
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
      this.application.preys_.createRandomBoids(50, 2, 'Line', 0x0000FF)
      this.boidsNo()
    }
  }

  newPredator () : void {
    if (this.application !== undefined) {
      this.application.predators_.createRandomBoids(1, 1, 'Circle', 0xFF0000)
      this.boidsNo()
    }
  }

  boidsNo () : void {
    if (this.application !== undefined) {
      this.preyNo = this.application.preys_.boids_.length
      this.predatorNo = this.application.predators_.boids_.length
    }
  }

  animate (application: FlockApplication) : void {
    MainApplication.app_.ticker.add(() => {
      if (this.start) {
        application.move()
        this.boidsNo()
      }
    })
  }
}
</script>
