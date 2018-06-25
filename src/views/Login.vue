<template>
  <div class="login">
    <!-- <x-header @click.native="loginBack">登录</x-header> -->
    <!-- <img src="../assets/img/logo.png"> -->
    <h1 style="margin-top: 50px">logo</h1>
    <group class="paddingLR10">
      <x-input title="" ref="username" :required="true" placeholder="请输入用户名" :min="4" :max="10" v-model="form.userId">
        <x-icon slot="label" type="person" size="26" style="padding: 5px 10px 0 0"></x-icon>
      </x-input>
      <x-input ref="password" :type="pass" :required="true" placeholder="请输入密码" v-model="form.password" :min="6" :max="20">
        <img slot="label" src="../assets/img/svg_md-lock.svg" width="26" height="26" style="padding: 5px 10px 0 0" />
        <x-icon v-show="pass === 'password'" slot="right" type="eye-disabled" size="26" @click.native="eyeShow" style="vertical-align: middle;"></x-icon>
        <x-icon v-show="pass !== 'password'" slot="right" type="eye" size="26" @click.native="eyeShow" style="vertical-align: middle;"></x-icon>
      </x-input>
    </group>
    <div class="paddingLR10 marginT20">
      <x-button @click.native="formValida" type="primary" :show-loading="loading">登 录</x-button>
    </div>
    <!-- 提示 -->
    <div v-transfer-dom>
      <alert v-model="alertShow" title="提示" > {{msg}}</alert>
    </div>
    <toast v-model="showToast" :time="2000">{{showToast_msg}}</toast>
  </div>
</template>
<script>
import dao from "../common/dao.js";
import { XHeader, Group, XInput, Icon, XButton, TransferDom, Alert, Toast } from "vux";
export default {
  name: "login",
  directives: {
    TransferDom
  },
  components: {
    XHeader,
    Group,
    XInput,
    Icon,
    XButton,
    Alert,
    Toast
  },
  props: {},
  data() {
    return {
      form: {
        userId: "admin",
        password: "admin12"
      },
      pass: "password",
      loading: false,
      // 错误提示
      alertShow: false,
      msg: "",
      // 成功提示
      showToast: false,
      showToast_msg: ''
    };
  },
  watch: {},
  methods: {
    // loginBack() {
    //   console.log("点击返回");
    // },
    eyeShow() {
      this.pass = this.pass === "password" ? "text" : "password";
    },
    // 验证
    formValida() {
      if (this.$refs.username.valid && this.$refs.password.valid) this.submit();
      else this.alertShow = true;
      this.msg = "账号或密码输入错误！";
    },
    async submit() {
      this.loading = true;
      let { data: {resCode, resMsg} } = await dao.logcheck(this.form)
      if (resCode === 200) {
        this.showToast_msg = resMsg
        this.showToast = true
        this.$router.push("/home");
      } else {
        this.alertShow = true;
        this.msg = resMsg
        this.loading = false
      }
    }
  },
  mounted() {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
</style>
