<template>
  <section>
    <td-table
        title="管理账号"
        ref="table"
        :add-item-ok="parameter=>sysUserSave(parameter)"
        :delete-item-ok="parameter=>sysUserRemoveById(parameter)"
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
        <a-form-item label="用户状态" name="state">
          <a-input v-model:value="formState.state"/>
        </a-form-item>
      </template>
      <template #Columns>
        <a-table-column title="UID" data-index="id" align="center" :sorter="true"/>
        <a-table-column title="姓名" data-index="name" align="center"/>
        <a-table-column title="登录名" data-index="username" align="center"/>
        <a-table-column title="手机号" data-index="phone" align="center"/>
        <a-table-column title="邮箱" data-index="email" align="center"/>
        <a-table-column title="创建时间" data-index="createTime" align="center"/>
        <a-table-column title="用户状态" data-index="state" align="center" :sorter="true"/>
        <a-table-column title="最后登录ip" data-index="lastLoginIp" align="center"/>
        <a-table-column title="最后登录时间" data-index="lastLoginTime" align="center"/>
      </template>
      <template #AddItem="{formState}">
        <a-row style="width: 800px" :gutter="[16,0]">
          <a-col :span="12">
            <a-form-item
                label="姓名"
                name="name"
                :rules="[{ required: true, message: 'Please input your username!' }]">
              <a-input v-model:value="formState.name" />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item
                label="账号"
                name="username"
                :rules="[{ required: true, message: 'Please input your username!' }]">
              <a-input v-model:value="formState.username" />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item
                label="电话"
                name="phone"
                :rules="[{ required: true, message: 'Please input your username!' }]">
              <a-input v-model:value="formState.phone" />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item
                label="邮箱"
                name="email"
                :rules="[{ required: true, message: 'Please input your username!' }]">
              <a-input v-model:value="formState.email" />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item
                label="状态"
                name="state"
                :rules="[{ required: true, message: 'Please input your username!' }]"
            >
              <a-radio-group v-model:value="formState.state" button-style="solid">
                <a-radio-button value="禁用">禁用</a-radio-button>
                <a-radio-button value="启用">启用</a-radio-button>
              </a-radio-group>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item
                label="角色"
                :rules="[{ required: true, message: 'Please input your username!' }]"
                name="groupId">
              <a-tree-select
                  v-model:value="formState.groupId"
                  :tree-data="groupData"
                  :fieldNames="{label: 'name', key: 'id', value:'id'}"
                  show-search
                  style="width: 100%"
                  placeholder="选择角色"
                  allow-clear
                  multiple
                  tree-default-expand-all
              >
              </a-tree-select>
            </a-form-item>
          </a-col>
        </a-row>


      </template>
    </td-table>
  </section>
</template>

<script>
import TdTable from "@/components/TdTable/TdTable";
import {sysUserPage, sysUserRemoveById, sysUserSave} from "@/api/SysUser";
import {sysGroupList} from "@/api/SysGroup";
import {toTree} from "@/utils/util";

export default {
  name: "SysUser",
  components: {TdTable},
  data() {
    return {
      sysUserPage: sysUserPage,
      sysUserRemoveById:sysUserRemoveById,
      sysUserSave:sysUserSave,
      groupData:[],
    }
  },
  created() {
    this.getGroupList();
  },
  methods: {
    getGroupList() {
      sysGroupList().then(res => {
        this.groupData = toTree(res.data)
        console.log(this.groupData)
      })
    },
  }
}
</script>

<style scoped>

</style>