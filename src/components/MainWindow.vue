<template>
  <div id="main">
    <button @click="startStop()">Go</button>
    <button @click="newBoids()">Add</button>
    <button @click="newPredator()">Add Predator</button>
    <button @click="clear()">Clear</button>
    <div id="canvas"></div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
import Flock from '../models/Flock'

export default class MainWindow extends Vue {
  start = false
  flock: Flock|undefined

  mounted () : void {
    this.flock = new Flock(200, window.innerWidth * 0.9, window.innerHeight * 0.9)
    const canvas = document.getElementById('canvas') as HTMLDivElement
    canvas.appendChild(this.flock.app_.view)
    this.animate(this.flock)
  }

  startStop () : void {
    this.start = !this.start
  }

  clear () : void {
    if (this.flock !== undefined) {
      this.flock.clear()
    }
  }

  newBoids () : void {
    if (this.flock !== undefined) {
      this.flock.createRandomBoids(this.flock.boids_, 50, 3, 0x00FF00)
    }
  }

  newPredator () : void {
    if (this.flock !== undefined) {
      this.flock.createRandomBoids(this.flock.predators_, 1, 2, 0xFF0000)
    }
  }

  animate (flock : Flock) : void {
    flock.app_.ticker.add(() => {
      if (this.start) {
        flock.move()
      }
    })
  }
}
</script>
