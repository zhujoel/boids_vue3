<template>
  <div id="main">
    <div id="settings">
      <Settings />
    </div>
    <div id="canvas"></div>
  </div>
</template>

<script lang="ts">
import MainApplication from '@/models/MainApplication'
import { Options, Vue } from 'vue-class-component'
import Settings from '@/components/Settings.vue'

@Options({
  components: {
    Settings
  }
})
export default class MainWindow extends Vue {
  created () : void {
    MainApplication.setup(window.innerWidth * 0.8, window.innerHeight)
  }

  mounted () : void {
    const canvas = document.getElementById('canvas') as HTMLDivElement
    canvas.appendChild(MainApplication.app_.view)
  }
}
</script>

<style>
html, body {
  overflow: hidden;
  margin: 0;
}
#settings {
  background-color: red;
  width: 20%;
  float:left;
}
#canvas {
  width: 80%;
  overflow: hidden;
}
</style>
