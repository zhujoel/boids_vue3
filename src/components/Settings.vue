<template>
  <Button class="p-button-raised p-button-rounded" label="Go" @click="startStop()" />
  <br />
  {{ this.instruction }}
  <Accordion :multiple="true">
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
      }
    })
  }

  startStop () : void {
    this.start = !this.start
  }
}
</script>
