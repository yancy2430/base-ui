<template>
  <div>
    <a-row :gutter="[16,16]">
      <a-col :sm="24" :md="12" :xl="6" >
        <chart-card title="总销售额" total="￥126,560">
          <template #action>
            <a-tooltip title="指标说明">
              <InfoCircleOutlined/>
            </a-tooltip>
          </template>
          <div>
            <Trend :type="true" term="周同比" :percentage="12" style="margin-right: 16px;">
            </Trend>
            <Trend :type="false" term="日同比" :percentage="11">
            </Trend>
          </div>
          <template #footer>日均销售额<span>￥ 234.56</span></template>
        </chart-card>
      </a-col>
      <a-col :sm="24" :md="12" :xl="6" >
        <chart-card title="总访问量" total="126,560">
          <template #action>
            <a-tooltip title="指标说明">
              <InfoCircleOutlined/>
            </a-tooltip>
          </template>
          <mini-area/>
          <template #footer>日均访问量<span>23456</span></template>
        </chart-card>
      </a-col>
      <a-col :sm="24" :md="12" :xl="6" >
        <chart-card title="支付笔数" total="126,560">
          <template #action>
            <a-tooltip title="指标说明">
              <InfoCircleOutlined/>
            </a-tooltip>
          </template>
          <mini-bar-graph>

          </mini-bar-graph>
          <template #footer>日均销售额<span>￥ 234.56</span></template>
        </chart-card>
      </a-col>
      <a-col :sm="24" :md="12" :xl="6" >
        <chart-card title="运营活动效果" total="126,560">
          <template #action>
            <a-tooltip title="指标说明">
              <InfoCircleOutlined/>
            </a-tooltip>
          </template>
          <mini-progress/>
          <template #footer>
            <Trend :type="true" term="周同比" :percentage="12" style="margin-right: 16px;">
            </Trend>
            <Trend :type="false" term="日同比" :percentage="11">
            </Trend>
          </template>
        </chart-card>
      </a-col>
      <a-col :sm="24" :md="24" :xl="15">
        <a-card size="small" title="进单数据" :bordered="false" style="height: 380px">
          <line-statistics/>
        </a-card>
      </a-col>
      <a-col :sm="24" :md="24" :xl="9">
        <a-card size="small" title="订单来源占比" :bordered="false" style="height: 380px">
          <classification-statistics/>
        </a-card>
      </a-col>
      <a-col :sm="24" :md="24" :xl="24">
        <a-card size="small" title="进单监控" :bordered="false" style="height: 380px">
          <monitor-bar-graph/>
        </a-card>
      </a-col>
    </a-row>

  </div>
</template>
<script>
import Editor from '@tinymce/tinymce-vue'

import {InfoCircleOutlined} from "@ant-design/icons-vue";
import MiniArea from "@/components/Charts/MiniArea";
import ChartCard from "@/components/Charts/ChartCard";
import Trend from "@/components/Charts/Trend";
import MiniBarGraph from "@/components/Charts/MiniBarGraph";
import MiniProgress from "@/components/Charts/MiniProgress";
import ClassificationStatistics from "@/components/Charts/ClassificationStatistics";
import LineStatistics from "@/components/Charts/LineStatistics";
import MonitorBarGraph from "@/components/Charts/MonitorBarGraph";

export default {
  name: 'Analysis',
  components: {
    MonitorBarGraph,
    LineStatistics,
    ClassificationStatistics,
    MiniProgress,
    MiniBarGraph,
    MiniArea,
    'editor': Editor,
    ChartCard,
    InfoCircleOutlined,
    Trend
  },
  methods: {
    onNotification() {

    },
    getOs() {

    }
  }
}
</script>


<style lang="less" scoped>
.extra-wrapper {
  line-height: 55px;
  padding-right: 24px;

  .extra-item {
    display: inline-block;
    margin-right: 24px;

    a {
      margin-left: 24px;
    }
  }
}

.antd-pro-pages-dashboard-analysis-twoColLayout {
  position: relative;
  display: flex;
  display: block;
  flex-flow: row wrap;
}

.antd-pro-pages-dashboard-analysis-salesCard {
  height: calc(100% - 24px);

  :deep(.ant-card-head) {
    position: relative;
  }
}

.dashboard-analysis-iconGroup {
  i {
    margin-left: 16px;
    color: rgba(0, 0, 0, .45);
    cursor: pointer;
    transition: color .32s;
    color: black;
  }
}

.analysis-salesTypeRadio {
  position: absolute;
  right: 54px;
  bottom: 12px;
}
</style>

