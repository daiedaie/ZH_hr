<template>
  <div class="newApply">
    <TopPrompt :info="info"></TopPrompt>
    新增申请
  </div>
</template>
<script>
import TopPrompt from "@/components/TopPrompt";
export default {
  name: "newApply",
  components: {
    TopPrompt
  },
  props: {},
  data() {
    return {
      info: '因私出国(境)证明请勿在此申请'
    }
  },
  watch: {},
  methods: {},
  mounted() {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
