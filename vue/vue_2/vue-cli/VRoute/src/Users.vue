<template>
  <div>
    Users
    <p>Team ID is {{ $route.params.teamId }}</p>
  </div>
</template>

<script>
  export default {
    created() {
      alert( this.$route.params.teamId )
    }
  }
</script>
