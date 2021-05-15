<template>
  <div id="main">
    <div>
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
  mounted () : void {
    MainApplication.setup(window.innerWidth * 0.9, window.innerHeight * 0.9)
    const canvas = document.getElementById('canvas') as HTMLDivElement
    canvas.appendChild(MainApplication.app_.view)
  }
}
</script>
