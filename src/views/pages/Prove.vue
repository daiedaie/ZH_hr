<template>
  <div class="prove">
    <tab :line-width='2' v-model="curIndex" :custom-bar-width="getBarWidth">
        <tab-item class="vux-center" :selected="curItem === item" v-for="(item, index) in tabList" @click="curItem = item" :key="index">{{item}}</tab-item>
      </tab>
      <swiper v-model="curIndex" :show-dots="false">
        <swiper-item>
          <div class="tab-swiper vux-center">
            <NewApply></NewApply>
          </div>
        </swiper-item>
        <swiper-item>
          <div class="tab-swiper vux-center">
            <FlowList></FlowList>
          </div>
        </swiper-item>
      </swiper>
  </div>
</template>
<script>
import { Tab, TabItem, Swiper, SwiperItem } from 'vux'
import NewApply from '@/components/NewApply'
import FlowList from '@/components/FlowList'
export default {
  name: "prove",
  components: {
    Tab,
    TabItem,
    Swiper,
    SwiperItem,
    NewApply,
    FlowList
  },
  props: {},
  data() {
    return {
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
.vux-slider {
  margin-top:5px;
  background-color: #fff
}
</style>
