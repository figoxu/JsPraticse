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
          title:'家庭住宅1',
          titleClass: 'left aligned',
          dataClass: 'left aligned'
        },
        {
          name:'address.line2',
            title:'家庭住宅2',
          titleClass: 'center aligned',
          dataClass: 'center aligned'
        }, {
          name:'address.zipcode',
            title:'邮政编码',
          titleClass: 'right aligned',
          dataClass: 'right aligned'
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
