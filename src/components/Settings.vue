<template>
  <Button class="p-button-raised p-button-rounded" label="Go" @click="startStop()" />
  <br />
  {{ this.instruction }}
  <div>Preys: {{this.preyNo}} | Predators: {{this.predatorNo}}</div>
  <Accordion :multiple="true" :activeIdex="active">
    <AccordionTab header="Header I">
      {{this.flock.boids_.length}}
    </AccordionTab>
    <AccordionTab header="Header II">
      Content
    </AccordionTab>
  </Accordion>
</template>

<script lang="ts">
import IFlock from '@/models/flocks/IFlock'
import MainApplication from '@/models/MainApplication'
import { Vue } from 'vue-class-component'

export default class Settings extends Vue {
  start = false
  preyNo = 0
  predatorNo = 0
  instruction = 'Click on the canvas to draw walls!'
  flock : IFlock = MainApplication.flocks_.flocks_[0]

  mounted () : void {
    this.$nextTick(() => {
      this.animate()
    })
  }

  animate () : void {
    MainApplication.app_.ticker.add(() => {
      if (this.start) {
        MainApplication.flocks_.move()
        console.log(this.flock.boids_.length)
      }
    })
  }

  startStop () : void {
    this.start = !this.start
  }
}
</script>
