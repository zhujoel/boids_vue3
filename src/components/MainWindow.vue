<template>
  <div id="main">
    <button @click="startStop()">Go</button>
    <button @click="newPreys()">Add</button>
    <button @click="newPredator()">Add Predator</button>
    <button @click="clear()">Clear</button>
    <div id="canvas"></div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
import FlockApplication from '../models/FlockApplication'

export default class MainWindow extends Vue {
  start = false
  application: FlockApplication|undefined

  mounted () : void {
    this.application = new FlockApplication(window.innerWidth * 0.9, window.innerHeight * 0.9)
    const canvas = document.getElementById('canvas') as HTMLDivElement
    canvas.appendChild(this.application.app_.view)
    this.animate(this.application)
  }

  startStop () : void {
    this.start = !this.start
  }

  clear () : void {
    if (this.application !== undefined) {
      this.application.clear()
    }
  }

  newPreys () : void {
    if (this.application !== undefined) {
      this.application.createPreys(50, 2, 0x0000FF)
    }
  }

  newPredator () : void {
    if (this.application !== undefined) {
      this.application.createPredators(1, 1, 0xFF0000)
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
