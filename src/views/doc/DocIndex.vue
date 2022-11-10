<template>
<!--  <a-card>-->
    <a-tabs class="tabs-bg" v-model:activeKey="activeKey" :animated="false">
      <a-tab-pane key="1" tab="退票模块">
        <a-row type="flex">
          <a-col flex="170px">
            <a-tree
                v-model:expandedKeys="expandedKeys"

                :loadData="treeData"
                :fieldNames="{children:'items', title:'name', key:'url' }"
            >
            </a-tree>

          </a-col>
          <a-col flex="auto">
          </a-col>
        </a-row>
      </a-tab-pane>
      <a-tab-pane key="2" tab="出票接口">

      </a-tab-pane>
      <a-tab-pane key="3" tab="组件接口">

      </a-tab-pane>
    </a-tabs>
<!--  </a-card>-->
</template>

<script>
import request from '@/utils/request'

import { defineComponent, watch, ref } from 'vue';

export default defineComponent({
  name: "DocIndex",
  setup() {
    const treeData = ref([]);
    const getData =() =>{
      request(Object.assign({
        url: "http://localhost:10001/doc/api.json",
        method: 'GET',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        }
      },{})).then(res=>{
        treeData.value=res.apis
      })
    }
    const expandedKeys = ref([]);
    watch(expandedKeys, () => {
      console.log('expandedKeys', expandedKeys);
    });
    return {
      getData,
      expandedKeys,
      activeKey: ref('1'),
      treeData,
    };
  },
  created() {
  },
  methods:{

  }
});
</script>

<style scoped>
.tabs-bg{
  background: #ffffff;
  padding: 0 18px 18px 18px;
}
</style>