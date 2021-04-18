<template>
  <div class="home">
    <MainWindow msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import MainWindow from '@/components/MainWindow.vue' // @ is an alias to /src

@Options({
  components: {
    MainWindow
  }
})
export default class Home extends Vue {}
</script>
