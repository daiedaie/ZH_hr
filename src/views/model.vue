<template>
  <div>
    vue模板
  </div>
</template>
<script>
  import {mapGetters, mapActions} from 'vuex'
  export default {
    name: 'model',
    props: {
    },
    data () {
      return {
      }
    },
    watch: {
    },
    computed: {
      ...mapGetters(['getUser'])
    },
    methods: {
      ...mapActions(['setUser'])
    },
    mounted () {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
