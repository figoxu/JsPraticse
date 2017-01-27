<template>
  <div id="app">

    <div>
      <router-link to="/">Home</router-link>
      <router-link to="/users/10">Users for Team 10</router-link>
      <router-link to="/users/11">Users for Team 11</router-link>
      <hr>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  export default{
    data () {
      return {

      }
    }
  }
</script>
