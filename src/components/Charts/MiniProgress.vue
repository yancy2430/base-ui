<template>
  <div id="miniProgress">
  </div>
</template>

<script>
import { Bullet} from '@antv/g2plot';

const data = [
  {
    title: '满意度',
    ranges: [100],
    measures: [80],
    target: 85,
  },
];

export default {
  name: 'MiniProgress',
  data () {
    return {
      data,
      height: 100
    }
  },
  mounted() {
    const bullet = new Bullet('miniProgress', {
      data,
      measureField: 'measures',
      rangeField: 'ranges',
      targetField: 'target',
      xField: 'title',
      xAxis: false,
      yAxis: false,
      autoFit:true,
      height:56,
      padding:-18,
      color: {
        range: '#f0efff',
        measure: '#5B8FF9',
        target: '#3D76DD',
      },
    });
    bullet.render();
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
