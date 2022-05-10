<template>
  <a-page-header
      style="border: 1px solid rgb(235, 237, 240);background: white"
      title="分析页"
      sub-title="业务量数据分析"
      @back="() => null"
  >
    <a-button @click="onNotification">onNotification</a-button>
    <a-button @click="getOs">getos</a-button>
  </a-page-header>
</template>
<script>

export default {
  name: 'Analysis',
  methods:{
    onNotification(){
      let myNotification = new Notification('紧急单通知', {
        body: 'onNotification'
      })
      myNotification.onclick = () => {
        console.log('通知被点击')
      }
    },
    getOs(){
      var os = require("os");

      console.log(os.networkInterfaces());
    }
  }
}
</script>

<style lang="less" scoped>
</style>
