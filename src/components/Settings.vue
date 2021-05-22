<template>
  <Button class="p-button-raised p-button-rounded" label="Go" @click="startStop()" />
  <br />
  {{ this.instruction }}
  <Accordion :multiple=true>
    <AccordionTab v-for="flock in this.flocks.flocks_" :key="flock.name_" :header="flock.name_">
      {{ this.view.cnt }}
      <div v-for="rule in flock.rules_" :key="rule.name_">
        {{ rule.name_ }}
        <Slider :min="0" :max="500" v-model="rule.params_.dist"/>
      </div>
      <Button @click="deleteAccordion(flock)"/>
    </AccordionTab>
  </Accordion>
  <Button @click="addFlock()"/>
</template>

<script lang="ts">
import IFlock from '@/models/flocks/IFlock'
import PreyFlock from '@/models/flocks/PreyFlock'
import FlockView from '@/models/flocks/FlockView'
import MainApplication from '@/models/MainApplication'
import { Vue } from 'vue-class-component'

export default class Settings extends Vue {
  start = false
  instruction = 'Click on the canvas to draw walls!'
  flocks = MainApplication.flocks_
  view = new FlockView(MainApplication.flocks_)
  sliderno = 0

  mounted () : void {
    this.$nextTick(() => {
      this.animate()
    })
  }

  animate () : void {
    MainApplication.app_.ticker.add(() => {
      if (this.start) {
        MainApplication.flocks_.move(this.view)
      }
    })
  }

  startStop () : void {
    this.start = !this.start
  }

  addFlock () : void {
    this.flocks.flocks_.push(new PreyFlock('Pr2'))
  }

  deleteAccordion (flock: IFlock) : void {
    const idx = this.flocks.flocks_.indexOf(flock)
    this.flocks.flocks_.splice(idx, 1)
  }
}
</script>
