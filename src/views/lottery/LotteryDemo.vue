<template>
  <section>
    <a-card title="抽奖样式模板">
      <a-row :gutter="[16,16]">
        <a-col :span="6">
          <LuckyWheel
              ref="myLucky"
              width="300px"
              height="300px"
              :prizes="prizes"
              :blocks="blocks"
              :buttons="buttons"
              @start="startCallback($refs.myLucky)"
              @end="endCallback"
          />
        </a-col>
        <a-col :span="6">
          <LuckyGrid
              ref="myGrid"
              width="300px"
              height="300px"
              :prizes="gridData.prizes"
              :blocks="gridData.blocks"
              :buttons="gridData.buttons"
              @start="startCallback($refs.myGrid)"
              @end="endCallback"
          />
        </a-col>
        <a-col :span="6">
          <SlotMachine
              ref="myMachine"
              width="240px"
              height="180px"
              :prizes="soltData.prizes"
              :blocks="soltData.blocks"
              :slots="soltData.slots"
              :defaultConfig="soltData.defaultConfig"
              @end="endCallback"
          />
          <a-button style="margin: 20px" @click="startCallback($refs.myMachine)">开始</a-button>
        </a-col>
      </a-row>
    </a-card>
  </section>
</template>

<script>
import {LuckyWheel,LuckyGrid,SlotMachine} from '@lucky-canvas/vue'

export default {
  name: "LotteryDemo",
  components: {LuckyWheel,LuckyGrid,SlotMachine},
  data() {
    return {
      blocks: [{padding: '13px', background: '#617df2'}],
      prizes: [
        {fonts: [{text: '0', top: '10%'}], background: '#e9e8fe'},
        {fonts: [{text: '1', top: '10%'}], background: '#b8c5f2'},
        {fonts: [{text: '2', top: '10%'}], background: '#e9e8fe'},
        {fonts: [{text: '3', top: '10%'}], background: '#b8c5f2'},
        {fonts: [{text: '4', top: '10%'}], background: '#e9e8fe'},
        {fonts: [{text: '5', top: '10%'}], background: '#b8c5f2'},
      ],
      buttons: [{
        radius: '35%',
        background: '#8a9bf3',
        pointer: true,
        fonts: [{text: '开始', top: '-10px'}]
      }],
      gridData:{
        blocks: [
          { padding: '10px', background: '#869cfa' },
          { padding: '10px', background: '#e9e8fe' },
        ],
        prizes: [
          { x: 0, y: 0, fonts: [{ text: '0', top: '25%' }] },
          { x: 1, y: 0, fonts: [{ text: '1', top: '25%' }] },
          { x: 2, y: 0, fonts: [{ text: '2', top: '25%' }] },
          { x: 2, y: 1, fonts: [{ text: '3', top: '25%' }] },
          { x: 2, y: 2, fonts: [{ text: '4', top: '25%' }] },
          { x: 1, y: 2, fonts: [{ text: '5', top: '25%' }] },
          { x: 0, y: 2, fonts: [{ text: '6', top: '25%' }] },
          { x: 0, y: 1, fonts: [{ text: '7', top: '25%' }] },
        ],
        buttons: [{
          x: 1, y: 1,
          background: '#7f95d1',
          fonts: [{ text: '开始', top: '25%' }]
        }],
        defaultStyle: {
          background: '#b8c5f2'
        }
      },
      soltData:{
        blocks: [
          { padding: '10px', background: '#869cfa' },
          { padding: '10px', background: '#e9e8fe' },
        ],
        slots: [
          { speed: 3, direction: 1 },
          { speed: 3, direction: -1 },
          { speed: 3, direction: 1 },
        ],
        prizes: [
          {
            background: '#bac5ee',
            borderRadius: '10px',
          },
          {
            background: '#bac5ee',
            borderRadius: '10px',
          },
        ],
        defaultConfig: {
          rowSpacing: '20px',
          colSpacing: '10px'
        }
      }
    }
  },
  created() {
  },
  methods: {  // 点击抽奖按钮会触发star回调
    startCallback(lucky) {
      // 调用抽奖组件的play方法开始游戏
      lucky.play()
      // 模拟调用接口异步抽奖
      setTimeout(() => {
        // 假设后端返回的中奖索引是0
        const index = 0
        // 调用stop停止旋转并传递中奖索引
        lucky.stop(index)
      }, 3000)
    },
    // 抽奖结束会触发end回调
    endCallback(prize) {
      console.log(prize)
    },
  }
}
</script>

<style scoped>

</style>