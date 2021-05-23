<template>
  <Button class="start-btn" label="Go" @click="startStop()" />
  <br />
  <Accordion :multiple=true>
    <AccordionTab v-for="flock in this.flocks.flocks_" :key="flock.name_" :header="flock.name_">
      {{ this.view.counter(flock) }}
      <div v-for="rule in flock.rules_" :key="rule.name_">
        {{ rule.name_ }}
        <Slider :min="0" :max="500" v-model="rule.params_.dist"/>
      </div>
      <Button label="Add" @click="addBoids(flock)" />
      <Button label="Delete" @click="deleteAccordion(flock)" />
    </AccordionTab>
  </Accordion>
  <div id="flock-input">
    <Button class="p-button-text" id="add-flock-btn" label="Add Flock" @click="addFlock()"/>
    <InputText id="add-flock-name" v-model="this.flockName" />
  </div>
</template>

<script lang="ts">
import IFlock from '@/models/flocks/IFlock'
import PreyFlock from '@/models/flocks/PreyFlock'
import FlockView from '@/models/flocks/FlockView'
import MainApplication from '@/models/MainApplication'
import { Vue } from 'vue-class-component'

export default class Settings extends Vue {
  start = false
  flocks = MainApplication.flocks_
  view = new FlockView(MainApplication.flocks_)
  flockName = 'New Flock'

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

  addBoids (flock: IFlock) : void {
    const idx = this.flocks.flocks_.indexOf(flock)
    MainApplication.flocks_.flocks_[idx].createRandomBoids(10, 3, 'Line', 0xFF0000)
  }

  addFlock () : void {
    this.flocks.flocks_.push(new PreyFlock(this.flockName))
  }

  deleteAccordion (flock: IFlock) : void {
    const idx = this.flocks.flocks_.indexOf(flock)
    MainApplication.removeFlockFromApp(MainApplication.flocks_.flocks_[idx])
    this.flocks.flocks_.splice(idx, 1)
  }
}
</script>

<style>
.start-btn {
  width: 100%;
}

#add-flock-btn {
  width: 50%;
}

#add-flock-name {
  width: 50%;
}
</style>
