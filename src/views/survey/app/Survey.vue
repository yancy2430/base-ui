<template>
  <section>
    <a-card title="城市管理巡查发现问题录入" :bordered="false">
      <template #extra>
        <a-dropdown>
          <a-button>问题菜单</a-button>
          <template #overlay>
            <a-menu>
              <a-menu-item @click="toPath('/survey/app/list')">
                问题列表
              </a-menu-item>
              <a-menu-item @click="toPath('/survey/app/from')">
                问题录入
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </template>
    </a-card>
    <router-view />
  </section>
</template>

<script>
export default {
  name: "Survey",
  methods:{
    toPath(path){
      this.$router.push({ path: path })
    }
  }
}
</script>

<style scoped>

</style>