<template>
  <div style="height: 300px;" id="lineStatistics"></div>
</template>

<script>
import { Line } from '@antv/g2plot';
import moment from 'moment'
const data = []
const beginDay = new Date().getTime()

for (let i = 0; i < 30; i++) {
  data.push({
    x: moment(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
    y: Math.round(Math.random() * 10),
    category:'分类1'
  })
}
for (let i = 0; i < 30; i++) {
  data.push({
    x: moment(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
    y: Math.round(Math.random() * 10),
    category:'分类2'
  })
}
for (let i = 0; i < 30; i++) {
  data.push({
    x: moment(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
    y: Math.round(Math.random() * 10),
    category:'分类3'
  })
}
export default {
  name: "LineStatistics",
  mounted() {
    const line = new Line('lineStatistics', {
      data,
      xField: 'x',
      yField: 'y',
      seriesField: 'category',
      smooth:true,
      xAxis: {
        type: 'time',
      },
      yAxis: {
        label: {
          // 数值格式化为千分位
          formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
        },
      },
    });
    line.render();
  }
}
</script>

<style scoped>
</style>