<template>
  <a-card>

  </a-card>
</template>

<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: "DocIndex",
  setup() {
    return {
      activesumKey: ref('1'),
      activeKey: ref('1'),
      dataSource: [
        {
          key: '1',
          name: '胡彦斌',
          age: 32,
          address: '西湖区湖底公园1号',
        },
        {
          key: '2',
          name: '胡彦祖',
          age: 42,
          address: '西湖区湖底公园1号',
        },
      ],

      columns: [
        {
          title: '姓名',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '年龄',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: '住址',
          dataIndex: 'address',
          key: 'address',
        },
      ],
    };
  },
});
</script>

<style scoped>
.tabs-bg{
  background: #ffffff;
  padding: 0 18px 18px 18px;
}
</style>