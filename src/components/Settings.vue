<template>
  <div id="settings">
    <button @click="startStop()">Go</button>
    <button @click="newPreys()">Add</button>
    <button @click="newPredator()">Add Predator</button>
    <button @click="clear()">Clear</button>
    {{ this.instruction }}
    <div>Preys: {{this.preyNo}} | Predators: {{this.predatorNo}}</div>
    <Button label="Submit" />
    <div id="canvas"></div>
  </div>
</template>

<script lang="ts">
import MainApplication from '@/models/MainApplication'
import { Vue } from 'vue-class-component'

export default class Settings extends Vue {
  start = false
  preyNo = 0
  predatorNo = 0
  instruction = 'Click on the canvas to draw walls!'

  mounted () : void {
    this.$nextTick(() => {
      this.boidsNo()
      this.animate()
    })
  }

  animate () : void {
    MainApplication.app_.ticker.add(() => {
      if (this.start) {
        MainApplication.flocks_.move()
      }
    })
  }

  startStop () : void {
    this.start = !this.start
  }

  clear () : void {
    MainApplication.flocks_.clear()
    this.boidsNo()
  }

  newPreys () : void {
    MainApplication.flocks_.preys_.createRandomBoids(50, 2, 'Line', 0x0000FF)
    this.boidsNo()
  }

  newPredator () : void {
    MainApplication.flocks_.predators_.createRandomBoids(1, 1, 'Circle', 0xFF0000)
    this.boidsNo()
  }

  boidsNo () : void {
    this.preyNo = MainApplication.flocks_.preys_.boids_.length
    this.predatorNo = MainApplication.flocks_.predators_.boids_.length
  }
}
</script>
