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
    MainApplication.setup(window.innerWidth * 0.8, window.innerHeight * 0.99)
  }

  mounted () : void {
    const canvas = document.getElementById('canvas') as HTMLDivElement
    canvas.appendChild(MainApplication.app_.view)
  }
}
</script>

<style>
html, body {
  margin: 0;
}
#settings {
  width: 20%;
  float:left;
}
#canvas {
  overflow: hidden;
}
</style>
