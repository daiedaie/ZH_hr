<template>
  <div class="userInfo" id="userInfo">
    <TopPrompt :info="info"></TopPrompt>
    <group>
      <x-input title="姓名" v-model="form.personName" disabled>
        <template slot="label" slot-scope="props">
          <x-icon type="person" ></x-icon>
          <span class="titleSt">姓名</span>
        </template>
      </x-input>
      <x-input title="员工号" v-model="form.personUid" disabled>
        <template slot="label" slot-scope="props">
          <x-icon type="person" ></x-icon>
          <span class="titleSt">员工号</span>
        </template>
      </x-input>
      <x-input title="分行员工号" v-model="form.personId" disabled>
        <template slot="label" slot-scope="props">
          <x-icon type="person" ></x-icon>
          <span class="titleSt">分行员工号</span>
        </template>
      </x-input>
      <x-input title="出生年月" v-model="form.birthday" disabled>
        <template slot="label" slot-scope="props">
          <x-icon type="calendar" ></x-icon>
          <span class="titleSt">出生年月</span>
        </template>
      </x-input>
      <x-input title="民族" v-model="form.nation" disabled>
        <template slot="label" slot-scope="props">
          <x-icon type="person" ></x-icon>
          <span class="titleSt">民族</span>
        </template>
      </x-input>
      <x-input title="籍贯" v-model="form.hometown" disabled>
        <template slot="label" slot-scope="props">
          <x-icon type="person" ></x-icon>
          <span class="titleSt">籍贯</span>
        </template>
      </x-input>
      <x-input title="出生地" v-model="form.homeplace" disabled>
        <template slot="label" slot-scope="props">
          <x-icon type="pricetag"></x-icon>
          <span class="titleSt">出生地</span>
        </template>
      </x-input>
      <x-input title="户口所在地" v-model="form.householderPlace" disabled>
        <template slot="label" slot-scope="props">
          <x-icon type="pricetag"></x-icon>
          <span class="titleSt">户口所在地</span>
        </template>
      </x-input>
      <x-input title="婚姻状况" v-model="form.marriageStatus" disabled>
        <template slot="label" slot-scope="props">
          <x-icon type="person" ></x-icon>
          <span class="titleSt">婚姻状况</span>
        </template>
      </x-input>
      <x-input title="政治面貌" v-model="form.politics" disabled>
        <template slot="label" slot-scope="props">
          <x-icon type="person" ></x-icon>
          <span class="titleSt">政治面貌</span>
        </template>
      </x-input>
      <x-input title="参加工作时间" v-model="form.jobDate" disabled>
        <template slot="label" slot-scope="props">
          <img src="@/assets/img/svg_md-time.svg" width="24" height="24" class="titleSt">
          <span class="titleSt">参加工作时间</span>
        </template>
      </x-input>
      <x-input title="入行时间" v-model="form.inbankDate" disabled>
        <template slot="label" slot-scope="props">
          <img src="@/assets/img/svg_md-time.svg" width="24" height="24" class="titleSt">
          <span class="titleSt">入行时间</span>
        </template>
      </x-input>
      <x-input title="入深圳时间" v-model="form.inbankDateSz" disabled>
        <template slot="label" slot-scope="props">
          <img src="@/assets/img/svg_md-time.svg" width="24" height="24" class="titleSt">
          <span class="titleSt">入深圳时间</span>
        </template>
      </x-input>
      <x-input title="学历" v-model="form.educationalBackground" disabled>
        <template slot="label" slot-scope="props">
          <x-icon type="person" ></x-icon>
          <span class="titleSt">学历</span>
        </template>
      </x-input>
      <x-input title="学位" v-model="form.degree" disabled>
        <template slot="label" slot-scope="props">
          <x-icon type="person" ></x-icon>
          <span class="titleSt">学位</span>
        </template>
      </x-input>
      <x-input title="所在单位" v-model="form.deptName" disabled>
        <template slot="label" slot-scope="props">
          <x-icon type="person" ></x-icon>
          <span class="titleSt">所在单位</span>
        </template>
      </x-input>
      <x-input title="职位名称" v-model="form.position_name" disabled>
        <template slot="label" slot-scope="props">
          <x-icon type="person" ></x-icon>
          <span class="titleSt">职位名称</span>
        </template>
      </x-input>
      <x-input title="职位聘任时间" v-model="form.fwDate" disabled>
        <template slot="label" slot-scope="props">
          <img src="@/assets/img/svg_md-time.svg" width="24" height="24" class="titleSt">
          <span class="titleSt">职位聘任时间</span>
        </template>
      </x-input>
      <x-input title="职务" v-model="form.dutyName" disabled>
        <template slot="label" slot-scope="props">
          <x-icon type="person" ></x-icon>
          <span class="titleSt">职务</span>
        </template>
      </x-input>
      <x-input title="办公电话" v-model="form.workPhone" disabled>
        <template slot="label" slot-scope="props">
          <x-icon type="person" ></x-icon>
          <span class="titleSt">办公电话</span>
        </template>
      </x-input>
      <x-input title="手机号码" v-model="form.mobilePhone" disabled>
        <template slot="label" slot-scope="props">
          <x-icon type="person" ></x-icon>
          <span class="titleSt">手机号码</span>
        </template>
      </x-input>
    </group>
    <x-button @click.native="$router.push('/home')">返 回</x-button>
  </div>
</template>
<script>
import C from "@/common/cfg"
import dao from "@/common/dao.js";
import TopPrompt from "@/components/TopPrompt";
import { Group, XInput, Icon, XButton } from "vux";
export default {
  name: "userInfo",
  components: {
    TopPrompt,
    Group,
    XInput,
    Icon,
    XButton
  },
  props: {},
  data() {
    return {
      info: "* 仅限内部使用，请勿转发或截图外传。",
      form: {
        personName: "",
        personUid: "",
        personId: "",
        birthday: "",
        nation: "",
        hometown: "",
        homeplace: "",
        householderPlace: "",
        marriageStatus: "",
        politics: "",
        jobDate: "",
        inbankDate: "",
        inbankDateSz: "",
        educationalBackground: "",
        degree: "",
        deptName: "",
        position_name: "",
        fwDate: "",
        dutyName: "",
        workPhone: "",
        mobilePhone: ""
      }
    };
  },
  watch: {},
  methods: {
    async initInfo() {
      let { data: { data } } = await dao.empinfo({ personUid: "总行员工号" });
      let {
        personName,
        personUid,
        personId,
        birthday,
        nation,
        hometown,
        homeplace,
        householderPlace,
        marriageStatus,
        politics,
        jobDate,
        inbankDate,
        inbankDateSz,
        educationalBackground,
        degree,
        deptName,
        position_name,
        fwDate,
        dutyName,
        workPhone,
        mobilePhone
      } = data
      this.form = {
        personName,
        personUid,
        personId,
        birthday,
        nation,
        hometown,
        homeplace,
        householderPlace,
        marriageStatus: C.marriageStatus[marriageStatus],
        politics: C.politics[politics],
        jobDate,
        inbankDate,
        inbankDateSz,
        educationalBackground: C.educationalBackground[educationalBackground],
        degree: C.degree[degree],
        deptName,
        position_name,
        fwDate,
        dutyName: C.dutyName[dutyName],
        workPhone,
        mobilePhone
      }
    }
  },
  mounted() {
    this.initInfo();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.vux-x-icon {
  fill: #f66d67;
  vertical-align: text-bottom;
}
.titleSt {
  vertical-align: middle;
}
.weui-btn {
  border-radius: 0
}
.weui-btn:after {
  border: none;
  border-radius: 0
}
</style>
