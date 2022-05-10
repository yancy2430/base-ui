<template>
  <a-sub-menu :key="menuInfo.path" v-if="!menuInfo.hidden">
    <template #icon><MailOutlined /></template>
    <template #title>{{ menuInfo.meta.title }}</template>
    <template v-for="item in menuInfo.children" :key="item.path">
      <template v-if="!item.children && !item.hidden">
        <a-menu-item :key="item.path"  v-if="!menuInfo.hidden">
          <template #icon>
            <PieChartOutlined />
          </template>
          {{ item.meta.title }}
        </a-menu-item>
      </template>
      <template v-else>
        <sub-menu :menu-info="item"  :key="item.path" v-if="!item.hidden" />
      </template>
    </template>
  </a-sub-menu>
</template>

<script>
import {
  PieChartOutlined,
  MailOutlined,
} from '@ant-design/icons-vue'; // you can rewrite it to a single file component, if not, you should config vue alias to vue/dist/vue.esm-bundler.js

export default {
  name: "SubMenu",
  props: {
    menuInfo: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {
    PieChartOutlined,
    MailOutlined,
  },
}
</script>

<style scoped>

</style>