<template>
  <a-tabs v-model:activeKey="activeKey" hide-add type="editable-card" @edit="onEdit" class="multi-tab">
    <a-tab-pane v-for="(pane,index) in panes" :key="index" :tab="pane.title" :closable="pane.closable">
      {{ pane.content }}
    </a-tab-pane>
  </a-tabs>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: "MultiTab",
  setup() {
    const panes = ref([
      {
        title: 'Tab 1',
      },
      {
        title: 'Tab 2',
      },
      {
        title: 'Tab 3',
      },
    ]);
    const activeKey = ref(panes.value[0].key);
    const newTabIndex = ref(0);

    const add = () => {
      activeKey.value = `newTab${newTabIndex.value++}`;
      panes.value.push({
        title: `New Tab ${activeKey.value}`,
        content: `Content of new Tab ${activeKey.value}`,
        key: activeKey.value,
      });
    };

    const remove = targetKey => {
      let lastIndex = 0;
      panes.value.forEach((pane, i) => {
        if (pane.key === targetKey) {
          lastIndex = i - 1;
        }
      });
      panes.value = panes.value.filter(pane => pane.key !== targetKey);

      if (panes.value.length && activeKey.value === targetKey) {
        if (lastIndex >= 0) {
          activeKey.value = panes.value[lastIndex].key;
        } else {
          activeKey.value = panes.value[0].key;
        }
      }
    };

    const onEdit = targetKey => {
      remove(targetKey);
    };

    return {
      panes,
      activeKey,
      onEdit,
      add,
    };
  },
})
</script>

<style>
.multi-tab .ant-tabs-bar {
  margin: 0 0 0 0;
  border-bottom: 0 solid #f0f0f0;
}
.multi-tab {
  padding: 5px 235px 5px 6px;
  background: #f8f8f8;
  height: 42px;
  margin: 0;
}
.multi-tab .ant-tabs-bar{
  height: 32px;
}
.multi-tab .ant-tabs-nav-container {
  height: 32px!important;
  line-height: 32px!important;
}
.multi-tab .ant-tabs-nav-wrap {
  margin-bottom: 0!important;
}
.multi-tab .ant-tabs-tab {
  height: 32px!important;
  line-height: 32px!important;
}
.multi-tab .ant-tabs-tab .ant-tabs-tab-active {
  height: 31px!important;
  border-bottom: none;
}
.multi-tab .ant-tabs-tab{
  border: 0 solid #f0f0f0!important;
  background: #ffffff!important;
  margin-right: 6px!important;
}
</style>