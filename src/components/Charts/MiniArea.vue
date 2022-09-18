<template>
  <div class="antv-chart-mini" id="container">
  </div>
</template>

<script>
import { Area } from '@antv/g2plot';

import moment from 'moment'
const data = []
const beginDay = new Date().getTime()

for (let i = 0; i < 30; i++) {
  data.push({
    x: moment(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
    y: Math.round(Math.random() * 10+2)
  })
}


export default {
  name: 'MiniArea',
  data () {
    return {
      data,
      height: 100
    }
  },
  mounted() {
    const area = new Area('container', {
      data,
      xField: 'x',
      yField: 'y',
      xAxis: false,
      yAxis: false,
      autoFit:false,
      smooth:true,
      padding:-18,
      meta:{
        range:[0,10]
      },
      appendPadding:0,
      areaStyle:{
        fill:"#7bbfff",
        fillOpacity:1,
        stroke:'none',
        lineOpacity:0,
        lineWidth:0
      },
      style:{
        fillOpacity:0
      },
      line:{
        size:0,
      }
    });
    area.render();
  }
}
</script>

<style lang="less" scoped>
  .antv-chart-mini{
    height: 100%;
    width: 100%;
  }
  /deep/.chart-card-content{
    margin-bottom: 0;
  }
</style>
