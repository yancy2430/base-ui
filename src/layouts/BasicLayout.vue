<template>
  <a-layout style="height: 100vh;">
    <a-layout-sider v-if="isMobile()" v-model:collapsed="collapsed" :trigger="null" collapsible
                    :collapsedWidth="70">
      <div class="main-logo">
        <img style="width: 100%;height: 100%;" src="~@/assets/logo.svg" class="logo" alt="logo">
      </div>
      <a-menu
          mode="inline"
          theme="dark"
          @select="onSelect"
      >
        <template v-for="item in rootSubmenuKeys" :key="item.key">
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
    <a-layout>
      <a-layout-header class="lay-header">
        <div class="header-left">
          <menu-unfold-outlined
              v-if="collapsed"
              class="trigger header-icon"
              @click="() => (collapsed = !collapsed)"
          />
          <menu-fold-outlined v-else class="trigger header-icon" @click="() => (collapsed = !collapsed)"/>
        </div>
        <div class="header-tabs">
          <!--          <multi-tab />-->
        </div>
        <div class="header-right">
          <bell-outlined class="header-icon"/>
          <div class="header-icon">
            <a-avatar :size="24">
              <template #icon>
                <UserOutlined/>
              </template>
            </a-avatar>
            <span style="margin-left: 8px">{{ userInfo.name }}</span>
          </div>
          <reload-outlined class="header-icon reload" @click="onReload"/>
          <global-outlined class="header-icon"/>
          <search-outlined class="header-icon" @click="() => (visibleSearch = !visibleSearch)"/>
          <!--          <setting-outlined class="header-icon" />-->
        </div>
      </a-layout-header>
      <a-layout-content style="overflow:auto;height: calc(100vh - 100px);background: #f0f2f5;padding: 15px">
        <router-view v-if="reload"/>
      </a-layout-content>
      <search-window v-model:value="visibleSearch" @change="(val)=>{visibleSearch = val;console.log(val)} "/>
    </a-layout>
  </a-layout>
</template>
<script>
import {
  PieChartOutlined,
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  ReloadOutlined,
  SettingOutlined,
  LineChartOutlined,
  ProfileOutlined,
  SearchOutlined,
  MenuUnfoldOutlined,
  BellOutlined,
  GlobalOutlined,
  MenuFoldOutlined
} from '@ant-design/icons-vue';
import {defineComponent, getCurrentInstance, nextTick, reactive, ref, toRefs} from 'vue';
import {useRouter} from 'vue-router'
import {useStore} from "vuex";

import SubMenu from "@/components/SubMenu/SubMenu";
import {sysUserInfo} from "@/api/SysUser";
import storage from "store";
export default defineComponent({
  name: "BaseLayout",
  components: {
    // SearchWindow,
    // MultiTab,
    PieChartOutlined,
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
    ReloadOutlined,
    SettingOutlined,
    LineChartOutlined,
    ProfileOutlined,
    SearchOutlined,
    MenuUnfoldOutlined,
    BellOutlined,
    GlobalOutlined,
    MenuFoldOutlined,
    SubMenu
  },
  setup() {
    const router = useRouter()
    const store = useStore()
    const userInfo = ref({})

    const routes = store.getters.addRouters.find(item => item.path === '/')
    const menus = (routes && routes.children) || []
    sysUserInfo().then(res => {
      storage.set("userInfo", res.data)
      userInfo.value = res.data
    })
    const state = reactive({
      rootSubmenuKeys: menus,
      openKeys: [],
      selectedKeys: [],
      reload:true,
    });
    const onOpenChange = openKeys => {
      const latestOpenKey = openKeys.find(key => state.openKeys.indexOf(key) === -1);
      if (state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        state.openKeys = openKeys;
      } else {
        state.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
    }
    const onSelect = (item) => {
      router.push(item.key)
    }
    //刷新页面
    const onReload = () => {
      state.reload=false;
      nextTick(()=>{
        state.reload=true;
      })
    }
    const logOut = () =>{
      storage.set("userInfo", null)
      storage.remove("userInfo")
      storage.set("ACCESS_TOKEN", null)
      storage.remove("ACCESS_TOKEN")
      this.$router.replace("/user/login")
    }
    const isMobile= ()=>{
      console.log("isMobile")
      let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
      console.log(flag)
      return !flag;
    }
    return {
      ...toRefs(state),
      userInfo,
      collapsed: ref(false),
      visibleSearch: ref(false),
      onOpenChange,
      logOut,
      onSelect,
      onReload,
      isMobile
    };
  },

});
</script>
<style>
.main-logo {
  height: 42px;
  margin: 14px;
}

.lay-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  padding: 0 16px 0 0;
  height: 42px;
}

.lay-header > div {
  height: 100%;
  display: flex;
  align-items: center;
}

.header-icon {
  width: max-content;
  font-size: 14px;
  padding: 0 12px;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
}

.header-icon:hover {
  background: #f8f8f8;
}

.trigger {
  font-size: 16px;
  padding: 0 22px;
}

.trigger:hover {
  background: #ffffff;
}

.header-tabs {
  width: 100%;
  background: #f8f8f8;
  height: 100%;
  padding: 5px;
  margin-right: 10px;
}

</style>
