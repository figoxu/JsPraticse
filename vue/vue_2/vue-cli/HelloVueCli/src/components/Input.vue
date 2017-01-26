<template>
  <div>
    <p>{{ msg }}</p>
    <input type="text" v-model="msg" @input="changeMsg">
    <p>{{ message }}</p>
  </div>
</template>

<script>
  export default{
    props: ['msg'],
    data () {
      return {
        message: ''
      }
    },
    methods: {
      changeMsg (event) {
        this.message = event.target.value
        this.$emit('msgChanged', this.message)
      }
    }
  }
</script>
