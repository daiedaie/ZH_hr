<template>
  <div class="prove">
    <TopPrompt v-show="!curIndex" :info="info"></TopPrompt>
    <sticky>
      <tab :line-width='2' v-model="curIndex" :custom-bar-width="getBarWidth">
        <tab-item class="vux-center" :selected="curItem === item" v-for="(item, index) in tabList" @click="curItem = item" :key="index">{{item}}</tab-item>
      </tab>
    </sticky>
      <div v-show="!curIndex">
        <NewApply></NewApply>
      </div>
      <div v-show="curIndex">
        <FlowList></FlowList>
      </div>
  </div>
</template>
<script>
import TopPrompt from "@/components/TopPrompt";
import { Tab, TabItem, Sticky, Swiper, SwiperItem } from 'vux'
import NewApply from '@/components/NewApply'
import FlowList from '@/components/FlowList'
export default {
  name: "prove",
  components: {
    TopPrompt,
    Tab,
    TabItem,
    Sticky,
    Swiper,
    SwiperItem,
    NewApply,
    FlowList
  },
  props: {},
  data() {
    return {
      info: '因私出国(境)证明请勿在此申请',
      curIndex: 0,
      getBarWidth: function (index) {
        return 3 * 22 + 'px'
      },
      tabList: ['新增申请', '流转信息'],
      curItem: '新增申请'
    }
  },
  watch: {},
  methods: {
    switchTabItem (index) {
      console.log(index)
      this.index01 = index
    }
  },
  mounted() {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.prove {
  background-color: #eee
}
/* .vux-slider {
  margin-top:5px;
  background-color: #fff
} */
</style>
