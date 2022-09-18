<template>
  <div style="height: 300px" id="MonitorBarGraph"></div>
</template>

<script>
import { Column } from '@antv/g2plot';
const data = []
import moment from 'moment'
const beginDay = new Date().getTime()

for (let i = 0; i < 60; i++) {
  data.push({
    x: moment(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
    y: Math.round(Math.random() * 10),
    category:'分类1'
  })
}
for (let i = 0; i < 60; i++) {
  data.push({
    x: moment(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
    y: Math.round(Math.random() * 10),
    category:'分类2'
  })
}
for (let i = 0; i < 60; i++) {
  data.push({
    x: moment(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
    y: Math.round(Math.random() * 10),
    category:'分类3'
  })
}
export default {
  name: "MonitorBarGraph",
  mounted() {
    const stackedColumnPlot = new Column('MonitorBarGraph', {
      data,
      isStack: true,
      xField: 'x',
      yField: 'y',
      seriesField: 'category',
      label: {
        // 可手动配置 label 数据标签位置
        position: 'middle', // 'top', 'bottom', 'middle'
        // 可配置附加的布局方法
        layout: [
          // 柱形图数据标签位置自动调整
          { type: 'interval-adjust-position' },
          // 数据标签防遮挡
          { type: 'interval-hide-overlap' },
          // 数据标签文颜色自动调整
          { type: 'adjust-color' },
        ],
      },
    });
    stackedColumnPlot.render();
  }
}
</script>

<style scoped>

</style>