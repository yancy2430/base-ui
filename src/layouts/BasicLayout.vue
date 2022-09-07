<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }"
                    v-model:collapsed="collapsed" collapsible :width="180">
      <div class="logo"><h1>后台管理系统</h1></div>
      <a-menu
          mode="inline"
          theme="dark"
          :inline-collapsed="collapsed"
          @select="onSelect"
      >
        <template v-for="item in menus" :key="item.key">
          <template v-if="!item.children && !item.hidden">
            <a-menu-item :key="item.key">
              <template #icon>
                <PieChartOutlined/>
              </template>
              {{ item.title }}
            </a-menu-item>
          </template>
          <template v-else>
            <sub-menu :menu-info="item" v-if="!item.hidden" :key="item.key"/>
          </template>
        </template>
      </a-menu>
    </a-layout-sider>
    <a-layout :style="{ marginLeft: '180px' }">
      <a-layout-header class="layout-header">
        <a-row type='flex' style="height: 42px;">
          <a-col flex="60px" class="header-left">
            <MenuFoldOutlined style="padding: 13px 22px;" class="head-icon"/>
          </a-col>
          <a-col flex="auto" class="header-center">
            <multi-tab v-if="false"></multi-tab>
          </a-col>
          <a-col flex="220px" class="header-right">
            <BellOutlined class="head-icon"/>
            <a-dropdown>
              <a class="ant-dropdown-link" @click.prevent>
                <a-avatar class="avatar" :size="24">
                  <template #icon><img src="https://xiangshangsl.com/avatar2.jpg"></template>
                </a-avatar>
                {{ userInfo.name }}
              </a>
              <template #overlay>
                <a-menu>
                  <a-menu-item @click="onSelect({key:'/account/settings'})">
                    个人设置
                  </a-menu-item>
                  <a-menu-item @click="logOut">
                    退出登录
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
            <ReloadOutlined class="head-icon"/>
          </a-col>
        </a-row>
      </a-layout-header>
      <a-layout-content :style="{ margin: '60px 16px 0', overflow: 'initial' }">
        <router-view/>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import {defineComponent, ref, reactive} from 'vue';
import {
  PieChartOutlined,
  ReloadOutlined,
  MenuFoldOutlined,
  BellOutlined,
} from '@ant-design/icons-vue';
import SubMenu from "@/components/SubMenu/SubMenu";
import {sysUserInfo} from "@/api/SysUser";
import storage from "store";

export default defineComponent({
  name: "BasicLayout",
  data() {
    const collapsed = ref(false);

    const toggleCollapsed = () => {
      collapsed.value = !collapsed.value;
    };

    return {
      menus: [],
      userInfo: {},
      collapsed,
      toggleCollapsed,
    };
  },
  created() {
    const routes = this.$store.getters.addRouters.find(item => item.path === '/')
    this.menus = (routes && routes.children) || []
    sysUserInfo().then(res => {
      storage.set("userInfo", res.data)
      this.userInfo = res.data
    })
  },
  methods: {
    onSelect(e) {
      console.log(e.key)
      if (e.key) {
        this.$router.push(e.key)
      }
    },
    logOut() {
      storage.set("userInfo", null)
      storage.remove("userInfo")
      storage.set("ACCESS_TOKEN", null)
      storage.remove("ACCESS_TOKEN")
      this.$router.replace("/user/login")
    }
  },
  components: {
    'sub-menu': SubMenu,
    PieChartOutlined,
    ReloadOutlined,
    BellOutlined,
    MenuFoldOutlined,
  }
});
</script>

<style scoped>
.logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.logo h1 {
  color: #fff;
  font-size: 20px;
  margin: 0 0 0 12px;
  font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
  font-weight: 600;
  vertical-align: middle;
}

.site-layout .site-layout-background {
  background: #fff;
}

[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
</style>
