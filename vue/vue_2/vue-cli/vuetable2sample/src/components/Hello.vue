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
import accounting from 'accounting'
import moment from 'moment'


export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      fields: [
        'name', 'email', 'birthdate',
        {
          name:'nickname',
          callback:'allcap'
        },
        {
          name:'gender',
          titleClass:'center aligned',
          dataClass:'center aligned',
          callback:'genderLabel'
        },
        {
          name:'salary',
          titleClass:'center aligned',
          dataClass:'right aligned',
          callback:'formatNumber'
        },{
          name:'birthdate',
          titleClass:'center aligned',
          dataClass:'center aligned',
          callback:'formatDate|DD-MM-YYYY'
        },
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
  },
  methods: {
    allcap(value) {
      return value.toUpperCase()
    },
    genderLabel(value){
      if (value === 'M'){
        return '<span class="ui teal label"><i class="large man icon"></i>Male</span>'
      }
      return '<span class="ui pink label"><i class="large woman icon"></i>Female</span>'
    },
    formatNumber(value){
      return accounting.formatNumber(value,2)
    },
    formatDate(value,fmt='D MMM YYYY'){
      if (value === null){
        return ''
      }
      return moment(value,"YYYY-MM-DD").format(fmt)
    }
  }
}
</script>

<style scoped>
</style>
