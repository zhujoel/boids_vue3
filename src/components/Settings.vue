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
        <img class="flock-logo" v-if="flock.isPreyFlock()" alt="logo" src="../../assets/fish.png" style="width: 1.5rem; margin-left: auto; margin-right: 0;" />
        <img class="flock-logo" v-else alt="logo" src="../../assets/shark.svg" style="width: 1.5rem; margin-left: auto; margin-right: 0;" />
        <Button class="p-button-text p-button-danger" icon="pi pi-trash" @click="deleteFlock(flock)" />
      </template>
      <div> Color: <input class="color-input" type="color" @change="changeColor($event, flock)" /> </div>
      <div>
        Add boids: <input type="number" value="0" @change="noBoidsToAdd($event, flock)" />
        <Button class="p-button-text" icon="pi pi-plus" style="padding: 0;" @click="addBoids(flock)" />
      </div>
      <div v-for="rule in flock.rules_" :key="rule.name_">
        {{ rule.name_ }}
        <Slider v-if="rule.isSeparation()" :min="0" :max="30" v-model="rule.params_.dist"/>
        <Slider v-else :min="0" :max="120" v-model="rule.params_.dist"/>
      </div>
    </AccordionTab>
  </Accordion>
  <div id="flock-input">
    <Button @click="changeIcon()">
      <img v-if="this.preySelected" alt="logo" src="../../assets/fish.png" style="width: 1.5rem" />
      <img v-else alt="logo" src="../../assets/shark.svg" style="width: 1.5rem" />
    </Button>
    <InputText id="add-flock-name" placeholder="Flock name" v-model="this.flockName" />
    <Button class="p-button-rounded p-button-text" icon="pi pi-plus-circle" @click="addFlock()"/>
  </div>
</template>

<script lang="ts">
import IFlock from '@/models/flocks/IFlock'
import PreyFlock from '@/models/flocks/PreyFlock'
import FlockView from '@/models/flocks/FlockView'
import MainApplication from '@/models/MainApplication'
import { Vue } from 'vue-class-component'
import PredatorFlock from '@/models/flocks/PredatorFlock'
import * as CS from '@/models/ColorSolver'
import * as H2RGB from '@/models/Hex2RGB'

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

    this.changeLogoColor()
  }

  changeLogoColor () : void {
    const logos = document.querySelectorAll('.flock-logo')
    const colorInputs = document.querySelectorAll('.color-input')
    for (let i = 0; i < logos.length; ++i) {
      const logo = logos[i] as any
      const input = colorInputs[i] as any
      const rgb = H2RGB.hex2RGB(this.flocks.flocks_[i].color_.toString(16).padStart(6, '0')) as number[]
      input.value = '#' + this.flocks.flocks_[i].color_.toString(16).padStart(6, '0')
      const c = new CS.Color(rgb[0], rgb[1], rgb[2])
      const solver = new CS.Solver(c)
      const res = solver.solve()
      logo.style.filter = res.filter
    }
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
    MainApplication.flocks_.flocks_[idx].color_ = parseInt(val.slice(1), 16)
    this.changeLogoColor()
  }

  noBoidsToAdd (e: any, flock: IFlock) : void {
    const val = e.target.value
    const idx = this.flocks.flocks_.indexOf(flock)
    this.view.adds_[idx] = val
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
    MainApplication.flocks_.flocks_[idx].createRandomBoids(amount, 3)
  }

  addFlock () : void {
    const newFlock = this.preySelected ? new PreyFlock(this.flockName) : new PredatorFlock(this.flockName)

    MainApplication.flocks_.flocks_.forEach(flock => {
      if ((newFlock instanceof PreyFlock && flock instanceof PredatorFlock) ||
      newFlock instanceof PredatorFlock) {
        flock.others_.push(newFlock)
        newFlock.others_.push(flock)
      }
    })
    newFlock.others_.push(MainApplication.flocks_.walls_)
    this.flocks.flocks_.push(newFlock)
  }

  deleteFlock (flock: IFlock) : void {
    const idx = this.flocks.flocks_.indexOf(flock)
    MainApplication.removeFlockFromApp(MainApplication.flocks_.flocks_[idx])
    this.flocks.flocks_.splice(idx, 1)
  }
}
</script>

<style>
.start-btn {
  width: 100%;
  color:red;
}

input[type=number] {
  -moz-appearance: textfield;
  width: 15%;
  border: 1px solid grey;
  border-radius: 5px;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

#add-flock-name {
  width: 60%;
}

.color-input {
  border: 0;
  width: 40px;
  height: 15px;
}
</style>
