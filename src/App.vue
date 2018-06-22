<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      titleData: {
        '/': '登录',
        '/home': '人力资源服务',
        '/userInfo': '个人信息',
        '/prove': '证明开具'
      }
    }
  },
  watch: {
    '$route': 'titleMethod'
  },
  methods: {
    // 配置 title
    titleMethod () {
      let title = this.titleData[this.$route.path]
      let domT = document.getElementById("domTitle");
      domT.text = title
    }
  },
  mounted () {
    this.titleMethod()
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0
}
a{
  text-decoration: none;
}
ul, li{
  list-style: none;
}
input,img{
  border: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
