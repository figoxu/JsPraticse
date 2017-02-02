<template>
  <div>
    <p>
      Here is the demo of vue-fullcalendar, no jquery fullcalendar.js required!
    </p>
    <full-calendar class="test-fc" :events="fcEvents"
                   first-day='1' lang="en"
                   @changeMonth="changeMonth"
                   @eventClick="eventClick"
                   @dayClick="dayClick"
                   @moreClick="moreClick">
    </full-calendar>
  </div>
</template>
<script>
  import Vue from 'vue'
  import fullCalendar from 'vue-fullcalendar'

  Vue.component('full-calendar', fullCalendar)

  let demoEvents = [
    {
      title    : 'Sunny 725-727',
      start    : '2017-01-01',
      end      : '2017-02-27',
      cssClass : 'family'
    },
    {
      title : 'Sunny 726-727',
      start : '2017-02-26',
      end : '2017-02-27',
      cssClass : ['home', 'work']
    },
    {
      title : 'Sunny 727-728',
      start : '2017-02-27',
      end : '2017-02-28'
    },
    {
      title : 'Sunny 728-730',
      start : '2017-02-28',
      end : '2017-03s-30'
    },
  ]
  export default {
    data () {
      return {
        name:'Sunny!',
        fcEvents : demoEvents
      }
    },
    methods : {
      'changeMonth' (start, end, current) {
        console.log('changeMonth', start, end, current)
      },
      'eventClick' (event, jsEvent, pos) {
        console.log('eventClick', event, jsEvent, pos)
      },
      'dayClick' (day, jsEvent) {
        console.log('dayClick', day, jsEvent)
      },
      'moreClick' (day, events, jsEvent) {
        console.log('moreCLick', day, events, jsEvent)
      }
    }
  }
</script>
<style>
  .app{
    color:green;
  }
</style>
