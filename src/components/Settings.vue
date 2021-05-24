<template>
  <Button v-if="!this.start" class="start-btn p-button-success" @click="startStop()">
    <i class="pi pi-play" style="margin: auto" />
  </Button>
  <Button v-else class="start-btn p-button-warning" @click="startStop()">
    <i class="pi pi-pause" style="margin: auto" />
  </Button>
  <br />
  <Accordion :multiple=true>
    <AccordionTab v-for="flock in this.flocks.flocks_" :key="flock.name_">
      <template #header>
        <span>{{flock.name_}}</span>
        <span style="margin: auto"> {{ this.view.counter(flock) }} </span>
        <img v-if="flock.isPreyFlock()" alt="logo" src="../../assets/fish.png" style="width: 1.5rem; margin-left: auto; margin-right: 0;" />
        <img v-else alt="logo" src="../../assets/shark.svg" style="width: 1.5rem; margin-left: auto; margin-right: 0;" />
        <Button class="p-button-text p-button-danger" icon="pi pi-trash" @click="deleteFlock(flock)" />
      </template>
      <div> Color: <input type="color" @change="changeColor($event, flock)" /> </div>
      <div v-for="rule in flock.rules_" :key="rule.name_">
        {{ rule.name_ }}
        <Slider :min="0" :max="500" v-model="rule.params_.dist"/>
      </div>
      <div>
        Add boids: <input type="number" value="0" @change="noBoidsToAdd($event, flock)" />
        <Button class="p-button-text" icon="pi pi-plus" @click="addBoids(flock)" />
      </div>
    </AccordionTab>
  </Accordion>
  <div id="flock-input">
    <Button @click="changeIcon()">
      <img v-if="this.preySelected" alt="logo" src="../../assets/fish.png" style="width: 1.5rem" />
      <img v-else alt="logo" src="../../assets/shark.svg" style="width: 1.5rem" />
    </Button>
    <InputText id="add-flock-name" placeholder="Flock name" v-model="this.flockName" />
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
      boid.color_ = parseInt(val.slice(1), 16)
    })
  }

  noBoidsToAdd (e: any, flock: IFlock) : void {
    const val = e.target.value
    const idx = this.flocks.flocks_.indexOf(flock)
    this.view.adds_[idx] = val
    console.log(this.view.adds_.length)
  }

  startStop () : void {
    this.start = !this.start
  }

  changeIcon () : void {
    this.preySelected = !this.preySelected
  }

  addBoids (flock: IFlock) : void {
    const idx = this.flocks.flocks_.indexOf(flock)
    const amount = this.view.adds_[idx]
    MainApplication.flocks_.flocks_[idx].createRandomBoids(amount, 3, flock.color_)
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

  deleteFlock (flock: IFlock) : void {
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

input[type=number] {
  -moz-appearance: textfield;
  width: 30%
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

#add-flock-btn {
  width: 100%;
}

#add-flock-name {
  width: 77%;
}
</style>
