<template>
  <section>
    <a-row type="flex" :gutter="[16,16]">
      <a-col flex="320px">
        <a-card size="small" title="用户组" style="height: 100%">
          <template #extra>
            <a-tag class="tag-click" color="#2db7f5" @click="onAddGroup">新增</a-tag>
            <a-popconfirm
                v-if="checkedKeys.length>0"
                :title="'是否确定要删除这 '+checkedKeys.length+' 个资源?'"
                @confirm="confirmDels"
                ok-text="是"
                cancel-text="否"
            >
              <a-tag class="tag-click" :color="checkedKeys.length>0?'error':''">删除选中</a-tag>
            </a-popconfirm>
          </template>
          <a-tree
              :show-icon="false"
              :show-line="true"
              v-if="groupData.length"
              :tree-data="groupData"
              defaultExpandAll
              v-model:checkedKeys="checkedKeys"
              :fieldNames="{title: 'name',key: 'id'}"
              @select="selectTree"
          >
            <template #title="{ dataRef }">
              <TeamOutlined v-if="dataRef.type==0"/><UserOutlined v-if="dataRef.type==1"/>{{ dataRef.name }}
            </template>
          </a-tree>
        </a-card>

      </a-col>
      <a-col flex="auto">
        <a-card size="small" :title="this.selectTreeValue === true?'新增权限':'编辑权限'" style="height: 100%">
          <template #extra>
            <a-popconfirm
                :disabled="!itemForm.id"
                @confirm="confirmDel"
                title="是否确定要删除此资源?"
                ok-text="是"
                cancel-text="否"
            >
              <a-tag class="tag-click" color="error">删除</a-tag>
            </a-popconfirm>
          </template>
          <a-alert v-if="selectTreeValue===undefined" message="从组织机构选择一项后，进行编辑" type="info"/>
          <a-form v-else :model="itemForm" :label-col="labelCol" :wrapper-col="wrapperCol">
            <a-form-item label="名称">
              <a-input v-model:value="itemForm.name"/>
            </a-form-item>
            <a-form-item label="归属">
              <a-tree-select
                  v-model:value="itemForm.pid"
                  show-search
                  style="width: 100%"
                  :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
                  placeholder="选择所属上级机构"
                  :treeDefaultExpandedKeys="[0]"
                  tree-default-expand-all
                  :tree-data="[{id:0,name:'顶级菜单',pid:0,children:groupData}]"
                  :field-names="{
                    children: 'children',
                    label: 'name',
                    value: 'id',
                  }"
              ></a-tree-select>
            </a-form-item>
            <a-form-item label="权限">
              <a-checkbox-group v-model:value="itemForm.permissions">
              <a-tree
                  v-if="resourcesData.length"
                  checkStrictly
                  :selectable="false"
                  class="permissions"
                  autoExpandParent
                  defaultExpandAll
                  :tree-data="resourcesData"
                  :field-names="{title: 'name',key: 'code', value:'code'}"
              >
                <template #title="{ permissions,name,code }">
                  <a-checkbox :value="code">{{ name }}</a-checkbox>
                  <div v-if="permissions && permissions.length>0" style="background: #f8f8f8;padding: 3px 5px;margin-left: 24px">
                    <a-checkbox v-for="item in permissions" :key="item.code"  :value="item.code" style="font-size: 13px">{{ item.name }}</a-checkbox>
                  </div>
                </template>
              </a-tree>
              </a-checkbox-group>
            </a-form-item>
            <a-form-item label="类型">
              <a-radio-group v-model:value="itemForm.type">
                <a-radio :value="0">机构</a-radio>
                <a-radio :value="1">角色</a-radio>
              </a-radio-group>
            </a-form-item>
            <a-form-item label="职级">
              <a-radio-group v-model:value="itemForm.level">
                <a-radio value="普通员工">普通员工</a-radio>
                <a-radio value="部门主管">部门主管</a-radio>
                <a-radio value="部门经理">部门经理</a-radio>
                <a-radio value="总经理">总经理</a-radio>
                <a-radio value="其他账号">其他账号</a-radio>
              </a-radio-group>
            </a-form-item>
            <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
              <a-button type="primary" @click="saveHandleOk" :loading="saveHandleLoading">保存</a-button>
            </a-form-item>
          </a-form>
        </a-card>
      </a-col>
    </a-row>
  </section>
</template>

<script>
import { sysResourcesList } from '@/api/SysResources';
import {sysGroupGetById, sysGroupList, sysGroupRemoveGroupById, sysGroupSubmitGroup} from "@/api/SysGroup";
import {toTree} from "@/utils/util";
import {message} from 'ant-design-vue';
import {TeamOutlined, UserOutlined} from '@ant-design/icons-vue';

export default {
  name: "Resources",
  data() {
    return {
      saveHandleLoading: false,
      addGroup: false,
      confirmLoading: false,
      selectTreeValue: undefined,
      groupData: [],
      resourcesData: [],
      itemForm: {
        select:{},
      },
      checkedKeys: [],
      labelCol: {
        span: 4,
      },
      wrapperCol: {
        span: 14,
      },
      formItemLayoutWithOutLabel: {
        wrapperCol: {
          sm: {span: 14, offset: 4},
        },
      }
    }
  },
  components: {
    TeamOutlined,
    UserOutlined,
  },
  created() {
    this.getGroupList()
    sysResourcesList().then(res => {
      this.resourcesData = toTree(res.data)
      console.log(this.resourcesData)
    })
  },
  methods: {
    onAddGroup() {
      this.itemForm = {}
      this.selectTreeValue = true
    },
    getGroupList() {
      sysGroupList().then(res => {
        this.groupData = toTree(res.data)
      })
    },
    confirmDel() {
      sysGroupRemoveGroupById({groupId: this.itemForm.id})
          .then(res => {
            if (res.code === 200) {
              message.success("删除成功")
              this.itemForm = {}
              this.selectTreeValue = undefined
              this.getGroupList()
            } else {
              message.error(res.msg)
            }
          })
    },
    confirmDels() {
    },
    saveHandleOk() {
      if (!Array.isArray(this.itemForm.permissions)) {
        this.itemForm.permissions = this.itemForm.permissions.checked
      }
      console.log(this.itemForm.permissions)
      this.saveHandleLoading = true
      sysGroupSubmitGroup(this.itemForm).then(res => {
        if (res.code === 200) {
          message.success("保存成功")
          if (!this.itemForm.id) {
            this.itemForm = {}
          }
          this.getGroupList()
        } else {
          message.error(res.msg)
        }
      }).catch((err)=>{
        message.success("网络请求异常")
      }).finally(()=>{
        this.saveHandleLoading = false
      })
    },
    addItem(e) {
    },
    selectTree(e) {
      this.selectTreeValue = e[0]
      if (this.selectTreeValue !== undefined) {
        sysGroupGetById({id: e[0]}).then(res => {
          this.itemForm = res.data
        })
      }
    },
  }
}
</script>

<style scoped>
.dynamic-delete-button {
  cursor: pointer;
  position: relative;
  top: 4px;
  font-size: 24px;
  color: #999;
  transition: all 0.3s;
}

.dynamic-delete-button:hover {
  color: #777;
}

.dynamic-delete-button[disabled] {
  cursor: not-allowed;
  opacity: 0.5;
}

.tag-click {
  cursor: pointer;
}

.permissions {
  background: #f8f8f8;
  border: 1px solid #f0f0f0;
}
</style>
