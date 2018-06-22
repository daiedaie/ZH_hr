<template>
  <h5 class="topPrompt">{{info}}</h5>
</template>

<script>
export default {
  name: 'topPrompt',
  props: {
    info: String
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.topPrompt {
  height: 30px;
  line-height: 30px;
  color: #fe978f;
  background-color: #ffeae8;
}
</style>
