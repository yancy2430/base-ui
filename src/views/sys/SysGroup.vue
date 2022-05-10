<template>
  <section>
    <a-row type="flex" :gutter="[16,16]">
      <a-col flex="320px">
        <a-card size="small" title="组织机构" style="height: 100%">
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
              :show-icon="true"
              :show-line="true"
              v-if="groupData.length"
              :tree-data="groupData"
              defaultExpandAll
              v-model:checkedKeys="checkedKeys"
              :replace-fields="{
              title: 'name',
              key: 'id',
            }"
              @select="selectTree"
          >

            <template #group>
              <TeamOutlined/>
            </template>
            <template #role>
              <UserOutlined/>
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
                  style="width: 100%"
                  :tree-data="[{id:0,name:'顶级菜单',pid:0,children:groupData}]"
                  placeholder="选择所属上级机构"
                  :treeDefaultExpandedKeys="[0]"
                  :replace-fields="{title: 'name', key: 'id', value:'id'}"
              >
              </a-tree-select>
            </a-form-item>
            <a-form-item label="权限">
              <a-tree
                  :selectable="false"
                  v-if="resourcesData.length"
                  checkStrictly
                  class="permissions"
                  v-model:checked-keys="itemForm.permissions"
                  checkable
                  autoExpandParent
                  defaultExpandAll
                  :tree-data="resourcesData"
                  :replace-fields="{title: 'name',key: 'code', value:'code'}"
              >
              </a-tree>
            </a-form-item>
            <a-form-item label="类型">
              <a-radio-group v-model:value="itemForm.type">
                <a-radio :value="0">机构</a-radio>
                <a-radio :value="1">角色</a-radio>
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
import {toTree} from "@/utils/util";
import {message} from 'ant-design-vue';
import {sysResourcesList} from '@/api/SysResources'
import {TeamOutlined, UserOutlined} from '@ant-design/icons-vue';
import {sysGroupGetById, sysGroupList, sysGroupRemoveGroupById, sysGroupSubmitGroup} from "@/api/SysGroup";

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
      itemForm: {},
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
    })
  },
  methods: {
    onAddGroup() {
      this.itemForm = {}
      this.selectTreeValue = true
    },
    getGroupList() {
      sysGroupList().then(res => {
        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i].type === 1) {
            res.data[i].slots = {
              icon: 'role',
            }
          } else {
            res.data[i].slots = {
              icon: 'group',
            }
          }
        }
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
