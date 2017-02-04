<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
    <modal></modal>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Modal from './components/Modal'


export default {
  name: 'app',
  components: {
    Hello,
    Modal
  }
}
</script>

<style lang="scss">
  @import '~bulma';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
