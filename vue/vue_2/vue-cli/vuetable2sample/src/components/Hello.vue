<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <vuetable ref="vuetable"
              api-url="http://vuetable.ratiw.net/api/users"
              :fields="fields"
    ></vuetable>
  </div>


</template>

<script>
  import Vuetable from 'vuetable-2/src/components/Vuetable'


export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      fields: [
        'name', 'email', 'birthdate',
        'address.line1', 'address.line2', 'address.zipcode'
      ]
    }
  },
  components: {
    Vuetable
  }
}
</script>

<style scoped>
</style>
