<template>
  <Button class="p-button-raised p-button-rounded" label="Go" @click="startStop()" />
  <Button class="p-button-raised p-button-rounded" label="Add 50 Preys" @click="newPreys()" />
  <Button class="p-button-raised p-button-rounded" label="Add Predator" @click="newPredator()" />
  <Button class="p-button-raised p-button-rounded" label="Clear" @click="clear()" />
  <br />
  {{ this.instruction }}
  <div>Preys: {{this.preyNo}} | Predators: {{this.predatorNo}}</div>
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
