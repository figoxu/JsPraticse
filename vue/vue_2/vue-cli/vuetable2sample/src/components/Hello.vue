<template>
  <div class="ui container">
    <h1>{{ msg }}</h1>
    <div class="vuetable-pagination ui basic segment grid">
      <filter-bar></filter-bar>
    </div>
    <vuetable ref="vuetable"
              api-url="http://vuetable.ratiw.net/api/users"
              :fields="fields"
              pagination-path=""
              :per-page="10"
              :sort-order="sortOrder"
              :append-params="moreParams"
              @vuetable:pagination-data="onPaginationData"
              detail-row-component="my-detail-row"
              @vuetable:cell-clicked="onCellClicked"
    ></vuetable>
    <div class="vuetable-pagination ui basic segment grid">
      <vuetable-pagination-info ref="paginationInfo"
      ></vuetable-pagination-info>
      <vuetable-pagination ref="pagination"
                           @vuetable-pagination:change-page="onChangePage"
      ></vuetable-pagination>
    </div>
  </div>


</template>

<script>
  import Vuetable from 'vuetable-2/src/components/Vuetable'
  import VuetablePagination from 'vuetable-2/src/components/VuetablePagination.vue'
  import VuetablePaginationInfo from 'vuetable-2/src/components/VuetablePaginationInfo'
  import accounting from 'accounting'
  import moment from 'moment'
  import DetailRow from './DetailRow'
  import FilterBar from './FilterBar'
  import Vue from 'vue'
  import VueEvents from 'vue-events'
  import CustomActions from './CustomActions'



  Vue.use(VueEvents);
  Vue.component('my-detail-row', DetailRow)
  Vue.component('filter-bar',FilterBar)
  Vue.component('custom-actions',CustomActions)

  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        myCSS: {
          ascendingIcon: 'glyphicon glyphicon-chevron-up',
          descendingIcon: 'glyphicon glyphicon-chevron-down'
        },
      sortOrder: [
        {
          field: 'name',
          sortField: 'name',
          direction: 'desc' //asc/desc
        }
      ],
      moreParams: {},
      fields: [
          {
            name:'name',
            sortField:'name'
          },
          'email', 'birthdate',
          {
            name: 'nickname',
            callback: 'allcap'
          },
          {
            name: 'gender',
            titleClass: 'center aligned',
            dataClass: 'center aligned',
            callback: 'genderLabel'
          },
          {
            name: 'salary',
            titleClass: 'center aligned',
            dataClass: 'right aligned',
            callback: 'formatNumber',
            visible: false
          },{
            name: 'age',
            sortField: 'birthdate',
            dataClass: 'center aligned'
          }, {
            name: 'birthdate',
            titleClass: 'center aligned',
            dataClass: 'center aligned',
            callback: 'formatDate|DD-MM-YYYY'
          },
//          {
//            name: 'address.line1',
//            title: '家庭住宅1',
//            titleClass: 'left aligned',
//            dataClass: 'left aligned'
//          },
//          {
//            name: 'address.line2',
//            title: '家庭住宅2',
//            titleClass: 'center aligned',
//            dataClass: 'center aligned'
//          }, {
//            name: 'address.zipcode',
//            title: '邮政编码',
//            titleClass: 'right aligned',
//            dataClass: 'right aligned'
//          },
        {
            name:'__component:custom-actions',
            title:'Actions',
          titleClass:'center aligned',
          dataClass:'center aligned'
        }
        ]
      }
    },
    components: {
      Vuetable,
      VuetablePagination,
      VuetablePaginationInfo
    },
    methods: {
      allcap(value) {
        return value.toUpperCase()
      },
      genderLabel(value){
        if (value === 'M') {
          return '<span class="ui teal label"><i class="large man icon"></i>Male</span>'
        }
        return '<span class="ui pink label"><i class="large woman icon"></i>Female</span>'
      },
      formatNumber(value){
        return accounting.formatNumber(value, 2)
      },
      formatDate(value, fmt = 'D MMM YYYY'){
        if (value === null) {
          return ''
        }
        return moment(value, "YYYY-MM-DD").format(fmt)
      },
      onPaginationData (data) {
        this.$refs.pagination.setPaginationData(data)
        this.$refs.paginationInfo.setPaginationData(data)
      },
      onChangePage (page) {
        this.$refs.vuetable.changePage(page)
      },
      onCellClicked(data, field, event){
        console.log('cellClicked: ',field.name)
        this.$refs.vuetable.toggleDetailRow(data.id)
      }
    },
    events:{
      'filter-set' (filterText){
        this.moreParams = {
          'filter':filterText
        }
        Vue.nextTick( () => this.$refs.vuetable.refresh() )
      },
      'filter-reset' (){
        this.moreParams = {}
        this.$refs.vuetable.refresh()
        Vue.nextTick( () => this.$refs.vuetable.refresh())
      }
    }
  }
</script>

<style scoped>
</style>
