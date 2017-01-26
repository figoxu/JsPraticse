<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
    <message></message>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Message from './components/Message'

export default {
  name: 'app',
  components: {
    Hello,
    Message
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
