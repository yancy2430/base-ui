<template>
  <div class="antv-chart-mini" id="miniBarGraph">
  </div>
</template>

<script>
import {Column} from '@antv/g2plot';

import moment from 'moment'
const data = []
const beginDay = new Date().getTime()

for (let i = 0; i < 30; i++) {
  data.push({
    x: moment(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
    y: Math.round(Math.random() * 10)
  })
}
export default {
  name: 'MiniBarGraph',
  data () {
    return {
      data,
      height: 100
    }
  },
  mounted() {
    const column = new Column('miniBarGraph', {
      data,
      xField: 'x',
      yField: 'y',
      xAxis: false,
      yAxis: false,
      autoFit:false,
      smooth:true,
      padding:-18,
      meta:{
        range:[0,1]
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
    column.render();
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
