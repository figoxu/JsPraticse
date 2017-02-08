<template>
  <div id="app">
    <boardview></boardview>
  </div>
</template>

<script>
import Boardview from './components/BoardView.vue'
import './assets/scss/main.scss'
import './assets/scss/style.scss'


export default {
  name: 'app',
  components: {
    Boardview
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
