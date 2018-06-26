<template>
  <div id="newApply" class="newApply">
    <!-- 写 -->
    <group class="marginT5">
      <popup-picker title="证件种类" value-text-align="left"  :data="certificateTypeList" v-model="form.certificateType">
        <template slot="title" slot-scope="props">
          <x-icon type="person" ></x-icon>
          <span class="titleSt">证件种类</span>
        </template>
      </popup-picker>
      <popup-picker title="申请用途" value-text-align="left" :data="useList" v-model="form.use">
        <template slot="title" slot-scope="props">
          <x-icon type="person" ></x-icon>
          <span class="titleSt">申请用途</span>
        </template>
      </popup-picker>
      <x-input title="发送单位抬头" v-model="form.sendUnit">
        <template slot="label" slot-scope="props">
          <x-icon type="person" ></x-icon>
          <span class="titleSt">发送单位抬头</span>
        </template>
      </x-input>
      <cell title="份数" align="left" class="itemNumber">
        <template slot="title" slot-scope="props">
          <x-icon type="person" ></x-icon>
          <span class="titleSt">份数</span>
        </template>
        <inline-x-number style="display:block" :min="1" v-model="form.numberValue"></inline-x-number>
      </cell>
      <popup-picker title="领取方式" value-text-align="left"  :data="wayList" v-model="form.way">
        <template slot="title" slot-scope="props">
          <x-icon type="person" ></x-icon>
          <span class="titleSt">领取方式</span>
        </template>
      </popup-picker>
      <x-input title="委托人" v-model="form.mandator">
        <template slot="label" slot-scope="props">
          <x-icon type="person" ></x-icon>
          <span class="titleSt">委托人</span>
        </template>
      </x-input>
      <x-textarea :max="200" v-model="form.description" placeholder="备注" name="description">
      </x-textarea>
    </group>
    <!-- 读 -->
    <group class="marginT5 read">
      <x-input title="姓名" v-model="info.personName" disabled>
        <template slot="label" slot-scope="props">
          <x-icon type="person" ></x-icon>
          <span class="titleSt">姓名</span>
        </template>
      </x-input>
      <x-input title="员工号" v-model="info.personUid" disabled>
        <template slot="label" slot-scope="props">
          <x-icon type="person" ></x-icon>
          <span class="titleSt">员工号</span>
        </template>
      </x-input>
      <x-input title="所在单位" v-model="info.deptName" disabled>
        <template slot="label" slot-scope="props">
          <x-icon type="person" ></x-icon>
          <span class="titleSt">所在单位</span>
        </template>
      </x-input>
      <x-input title="职位名称" v-model="info.position_name" disabled>
        <template slot="label" slot-scope="props">
          <x-icon type="person" ></x-icon>
          <span class="titleSt">职位名称</span>
        </template>
      </x-input>
      <x-input title="职务" v-model="info.dutyName" disabled>
        <template slot="label" slot-scope="props">
          <x-icon type="person" ></x-icon>
          <span class="titleSt">职务</span>
        </template>
      </x-input>
      <x-input title="办公电话" v-model="info.workPhone" disabled>
        <template slot="label" slot-scope="props">
          <x-icon type="person" ></x-icon>
          <span class="titleSt">办公电话</span>
        </template>
      </x-input>
      <x-input title="手机号码" v-model="info.mobilePhone" disabled>
        <template slot="label" slot-scope="props">
          <x-icon type="person" ></x-icon>
          <span class="titleSt">手机号码</span>
        </template>
      </x-input>
    </group>
    <!-- <div class="apply_button">
      <x-button mini type="warn">重置</x-button>
      <x-button mini type="primary">提交</x-button>
    </div> -->
    <flexbox class="apply_button">
      <flexbox-item>
        <x-button type="warn">重置</x-button>
      </flexbox-item>
      <flexbox-item style="margin:0">
        <x-button type="primary">提交</x-button>
      </flexbox-item>
    </flexbox>
  </div>
</template>
<script>
import dao from "@/common/dao.js";
import { Group, PopupPicker, XInput, Cell, InlineXNumber, XTextarea, XButton, Flexbox, FlexboxItem } from "vux";
export default {
  name: "newApply",
  components: {
    Group,
    PopupPicker,
    XInput,
    Cell,
    InlineXNumber,
    XTextarea,
    XButton,
    Flexbox,
    FlexboxItem
  },
  props: {},
  data() {
    return {
      certificateTypeList: [['工作证明', '收入证明', '小孩读书证明']],
      useList: [['贷款购车', '贷款买房']],
      wayList: [['自取', '委托他人']],
      form: {
        certificateType: ['工作证明'],
        use: ['贷款购车'],
        sendUnit: '',
        numberValue: 1,
        way: ['自取'],
        mandator: ''
      },
      info: {
        personName: '张三',
        personUid: '',
        deptName: '',
        position_name: '',
        dutyName: '',
        workPhone: '',
        mobilePhone: ''
      }
    }
  },
  watch: {},
  methods: {
    async initInfo() {
      let { data: { data } } = await dao.empinfo({ personUid: "总行员工号" });
      let {
        personName,
        personUid,
        deptName,
        position_name,
        dutyName,
        workPhone,
        mobilePhone
      } = data
      this.info = {
        personName,
        personUid,
        deptName,
        position_name,
        dutyName,
        workPhone,
        mobilePhone
      }
    }
  },
  mounted() {
    this.initInfo()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.newApply {
  background-color: #eee
}
.vux-x-icon {
  fill: #f66d67;
  vertical-align: text-bottom;
}
.read .vux-x-icon {
  fill: #ccc;
}
.titleSt {
  vertical-align: middle;
}
.apply_button {
  position: fixed;
  bottom: 0;
  width: 100%;
}
.weui-btn {
  border-radius: 0
}
</style>
