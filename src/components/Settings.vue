<template>
  <Button class="start-btn" label="Go" @click="startStop()" />
  <br />
  <Accordion :multiple=true>
    <AccordionTab v-for="flock in this.flocks.flocks_" :key="flock.name_">
      <template #header>
        <span>{{flock.name_}}</span>
        <img v-if="flock.isPreyFlock()" alt="logo" src="../../assets/fish.png" style="width: 1.5rem" />
        <img v-else alt="logo" src="../../assets/shark.svg" style="width: 1.5rem" />
      </template>
      {{ this.view.counter(flock) }}
      <input type="color" @change="changeColor($event, flock)" >
      <div v-for="rule in flock.rules_" :key="rule.name_">
        {{ rule.name_ }}
        <Slider :min="0" :max="500" v-model="rule.params_.dist"/>
      </div>
      <Button label="Add" @click="addBoids(flock)" />
      <Button label="Delete" @click="deleteAccordion(flock)" />
    </AccordionTab>
  </Accordion>
  <div id="flock-input">
    <Button @click="changeIcon()">
      <img v-if="this.preySelected" alt="logo" src="../../assets/fish.png" style="width: 1.5rem" />
      <img v-else alt="logo" src="../../assets/shark.svg" style="width: 1.5rem" />
    </Button>
    <InputText id="add-flock-name" v-model="this.flockName" />
    <Button class="p-button-text" id="add-flock-btn" label="Add Flock" @click="addFlock()"/>
  </div>
</template>

<script lang="ts">
import IFlock from '@/models/flocks/IFlock'
import PreyFlock from '@/models/flocks/PreyFlock'
import FlockView from '@/models/flocks/FlockView'
import MainApplication from '@/models/MainApplication'
import { Vue } from 'vue-class-component'
import PredatorFlock from '@/models/flocks/PredatorFlock'

export default class Settings extends Vue {
  start = false
  flocks = MainApplication.flocks_
  view = new FlockView(MainApplication.flocks_)
  flockName = 'New Flock'
  preySelected = true

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

  changeColor (e: any, flock: IFlock) : void {
    const val = e.target.value
    const idx = this.flocks.flocks_.indexOf(flock)
    MainApplication.flocks_.flocks_[idx].boids_.forEach(boid => {
      console.log(parseInt(val.slice(1), 16))
      boid.color_ = parseInt(val.slice(1), 16)
    })
  }

  startStop () : void {
    this.start = !this.start
  }

  changeIcon () : void {
    this.preySelected = !this.preySelected
  }

  addBoids (flock: IFlock) : void {
    const idx = this.flocks.flocks_.indexOf(flock)
    MainApplication.flocks_.flocks_[idx].createRandomBoids(10, 3, 0xFF0000)
  }

  addFlock () : void {
    const newFlock = this.preySelected ? new PreyFlock(this.flockName) : new PredatorFlock(this.flockName)

    MainApplication.flocks_.flocks_.forEach(flock => {
      if (flock instanceof PreyFlock) {
        flock.others_.push(newFlock)
        newFlock.others_.push(flock)
      }
    })
    this.flocks.flocks_.push(newFlock)
  }

  deleteAccordion (flock: IFlock) : void {
    const idx = this.flocks.flocks_.indexOf(flock)
    MainApplication.removeFlockFromApp(MainApplication.flocks_.flocks_[idx])
    this.flocks.flocks_.splice(idx, 1)
    this.flocks.flocks_.forEach(flock => {
      const otherIdx = flock.others_.indexOf(flock)
      flock.others_.splice(otherIdx, 1)
    })
  }
}
</script>

<style>
.start-btn {
  width: 100%;
}

#add-flock-btn {
  width: 100%;
}

#add-flock-name {
  width: 77%;
}
</style>
