<template>
  <div id="app">

    <div>
      <router-link to="/">Home</router-link>
      <router-link to="/users">Users</router-link>
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
