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
        {
          name:'address.line1',
          title:'家庭住宅1'
        },
        {
          name:'address.line2',
            title:'家庭住宅2'
        }, {
          name:'address.zipcode',
            title:'邮政编码'
    }
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
