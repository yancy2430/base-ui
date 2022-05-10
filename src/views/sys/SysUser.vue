<template>
  <section>
    <td-table
        title="管理账号"
        ref="table"
        :data-source="parameter=>sysUserPage(parameter)">
      <template #Search="{formState}">
        <a-form-item label="UID" name="id">
          <a-input-number v-model:value="formState.id"/>
        </a-form-item>
        <a-form-item label="姓名" name="name">
          <a-input v-model:value="formState.name"/>
        </a-form-item>
        <a-form-item label="登录名" name="username">
          <a-input v-model:value="formState.username"/>
        </a-form-item>
        <a-form-item label="手机号" name="phone">
          <a-input v-model:value="formState.phone"/>
        </a-form-item>
        <a-form-item label="邮箱" name="email">
          <a-input v-model:value="formState.email"/>
        </a-form-item>
        <a-form-item label="用户状态" name="status">
          <a-input v-model:value="formState.status"/>
        </a-form-item>
      </template>
      <template #Columns>
        <a-table-column title="UID" data-index="id" align="center" :sorter="true"/>
        <a-table-column title="姓名" data-index="name" align="center"/>
        <a-table-column title="登录名" data-index="username" align="center"/>
        <a-table-column title="手机号" data-index="phone" align="center"/>
        <a-table-column title="邮箱" data-index="email" align="center"/>
        <a-table-column title="创建时间" data-index="createTime" align="center"/>
        <a-table-column title="用户状态" data-index="status" align="center" :sorter="true"/>
        <a-table-column title="最后登录ip" data-index="lastLoginIp" align="center"/>
        <a-table-column title="最后登录时间" data-index="lastLoginTime" align="center"/>
      </template>
    </td-table>
  </section>
</template>

<script>
import TdTable from "@/components/TdTable/TdTable";
import {sysUserPage} from "@/api/SysUser";

export default {
  name: "SysUser",
  components: {TdTable},
  data() {
    return {
      sysUserPage: sysUserPage
    }
  },
  created() {
  },
  methods: {}
}
</script>

<style scoped>

</style>