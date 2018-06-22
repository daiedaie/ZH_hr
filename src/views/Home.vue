<template>
  <div id="home" class="home">
    <grid :cols="2" :show-lr-borders="false" :show-vertical-dividers="false">
      <grid-item v-for="(i, index) in listData"
        :key="index"
        :label="i.name"
        :link="i.path">
        <img slot="icon" v-show="index === 0" src="../assets/img/wdxx_icon.png" />
        <img slot="icon" v-show="index === 1" src="../assets/img/zmkj_icon.png" />
      </grid-item>
    </grid>
  </div>
</template>
<script>
import { Grid, GridItem } from "vux";
export default {
  name: "home",
  components: {
    Grid,
    GridItem
  },
  props: {},
  data() {
    return {
      listData: [
        {
          name: '我的信息',
          path: '/userInfo'
        },
        {
          name: '证明开具',
          path: '/prove'
        }
      ]
    }
  },
  watch: {},
  methods: {},
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
