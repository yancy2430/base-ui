<template>
  <div id="classificationStatistics"></div>
</template>

<script>
import { Pie } from '@antv/g2plot';

const data = [
  { type: '分类一', value: 27 },
  { type: '分类二', value: 25 },
  { type: '分类三', value: 18 },
  { type: '分类四', value: 15 },
  { type: '分类五', value: 10 },
  { type: '分类六', value: 27 },
  { type: '分类七', value: 25 },
  { type: '分类八', value: 18 },
  { type: '分类九', value: 15 },
  { type: '分类十', value: 10 },
  { type: '其他', value: 5 },
];

export default {
  name: "ClassificationStatistics",
  mounted() {
    const piePlot = new Pie('classificationStatistics', {
      appendPadding: 10,
      data,
      angleField: 'value',
      colorField: 'type',
      radius: 1,
      innerRadius: 0.5,
      height:300,
      autoFit:true,
      label: {
        type: 'inner',
        offset: '-50%',
        content: '{value}',
        style: {
          textAlign: 'center',
          fontSize: 14,
        },
      },
      interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
      statistic: {
        title: false,
        content: {
          style: {
            whiteSpace: 'pre-wrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            fontSize:"18px"
          },
          content: 'AntV\nG2Plot',
        },
      },
    });

    piePlot.render();
  }
}
</script>

<style scoped>

</style>