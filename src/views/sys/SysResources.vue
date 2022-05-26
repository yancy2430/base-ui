<template>
  <section>
    <a-row  type="flex" :gutter="[16,16]">
      <a-col flex="320px">
        <a-card size="small" title="资源列表" style="height: 100%">
          <template #extra>
            <a-tag class="tag-click" color="#2db7f5" @click="addVisible = true">新增</a-tag>
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
              :show-line="true"
              v-if="resourcesData.length"
              :tree-data="resourcesData"
              defaultExpandAll
              v-model:checkedKeys="checkedKeys"
              :fieldNames="{
              title: 'name',
              key: 'id',
            }"
              @select="selectTree"
          >
          </a-tree>
        </a-card>

      </a-col>
      <a-col flex="auto">
        <a-card size="small" :title="'编辑资源'" style="height: 100%">
          <template #extra>
            <a-popconfirm
                v-if="selectTreeValue!==undefined"
                @confirm="confirmDel"
                title="是否确定要删除此资源?"
                ok-text="是"
                cancel-text="否"
            >
              <a-tag class="tag-click" color="error">删除</a-tag>
            </a-popconfirm>
          </template>
          <a-alert v-if="selectTreeValue===undefined" message="从资源列表选择一项后，进行编辑" type="info" />
          <a-form v-else :model="treeValue" :rules="addResourcesRules" :label-col="labelCol" :wrapper-col="wrapperCol" ref="submitForm">
            <a-form-item label="上级" name="pid" :autoLink="false">
              <a-tree-select
                  v-model:value="treeValue.pid"
                  style="width: 100%"
                  :tree-data="[{id:0,name:'顶级菜单',pid:0,children:resourcesData}]"
                  placeholder="选择所属上级机构"
                  :treeDefaultExpandedKeys="[0]"
                  :field-names="{
                    children: 'children',
                    label: 'name',
                    value: 'id',
                  }"
              >
              </a-tree-select>
            </a-form-item>
            <a-form-item label="类型">
              <a-radio-group v-model:value="treeValue.type">
                <a-radio :value="0">边栏菜单</a-radio>
                <a-radio :value="1">操作内页</a-radio>
              </a-radio-group>
            </a-form-item>
            <a-form-item label="标题">
              <a-input v-model:value="treeValue.name" />
            </a-form-item>
            <a-form-item label="组件">
              <a-select disabled v-model:value="treeValue.component" placeholder="选择绑定的组件">
                <a-select-option v-for="(item,index) in componentList" :value="item" :key="index">{{item}}</a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item label="接口">
              <a-select disabled v-model:value="treeValue.apis" placeholder="选择页面加载所用到接口" mode="tags">
              </a-select>
            </a-form-item>
            <a-form-item label="页内权限">
              <a-input-group style="margin-bottom: 10px" v-for="(item,index) in treeValue.permissions" :key="index" compact>
                <a-input disabled style="width: 25%" placeholder="权限名称" v-model:value="item.name" />
                <a-input disabled style="width: 25%" placeholder="权限代码" v-model:value="item.code" />
                <a-select disabled style="width: 50%" placeholder="选择接口" mode="tags" v-model:value="item.apis">
                </a-select>
              </a-input-group>
            </a-form-item>
            <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
              <a-button :loading="submitConfirmLoading" @click="submitHandleOk" type="primary">保存修改</a-button>
            </a-form-item>
          </a-form>
        </a-card>
      </a-col>
    </a-row>
    <a-modal v-model:visible="addVisible" title="新增资源" :confirm-loading="confirmLoading" @ok="addHandleOk" @cancel="addResources = {pid:0}" destroyOnClose>
      <a-form ref="formRef" :model="addResources" :rules="addResourcesRules" :label-col="labelCol" :wrapper-col="wrapperCol">
        <a-form-item label="名称" name="name">
          <a-input v-model:value="addResources.name" />
        </a-form-item>
        <a-form-item label="归属" name="pid" :autoLink="false">
          <a-tree-select
              v-model:value="addResources.pid"
              style="width: 100%"
              :tree-data="[{id:0,name:'顶级菜单',pid:0,children:resourcesData}]"
              placeholder="选择所属上级机构"
              :treeDefaultExpandedKeys="[0]"
              :field-names="{
                    children: 'children',
                    label: 'name',
                    value: 'id',
                  }"
          >
          </a-tree-select>
        </a-form-item>
        <a-form-item label="组件" name="component">
          <a-select v-model:value="addResources.component" placeholder="选择绑定的组件" showSearch>
            <a-select-option v-for="(item,index) in componentList" :value="item" :key="index">{{item}}</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="代码" name="code" v-if="addResources.component === './RouteView.vue'">
          <a-input placeholder="选择routeView组件时代码必填" v-model:value="addResources.code" />
        </a-form-item>
        <a-form-item label="类型" name="type">
          <a-radio-group v-model:value="addResources.type" :defaultValue="0">
            <a-radio :value="0">侧边栏菜单</a-radio>
            <a-radio :value="1">操作内页</a-radio>
          </a-radio-group>
        </a-form-item>
      </a-form>
    </a-modal>
  </section>
</template>

<script>
import {sysResourcesList, sysResourcesMethods,sysResourcesGetById,sysResourcesSave,sysResourcesRemoveById} from '@/api/SysResources'
import {toTree} from "@/utils/util";
import { message } from 'ant-design-vue';
const layoutsComponents = require.context('@/layouts', true, /\.vue/)
const viewsComponents = require.context('@/views', true, /\.vue/)
export default {
  name: "Resources",
  data(){
    return {
      submitConfirmLoading:false,
      confirmLoading:false,
      addFormRef:this.$refs.formRef,
      addVisible:false,
      addResources:{
        type:0,
        pid:0,
      },
      addResourcesRules:{
        name: [
          { required: true, message: '名称不能为空', trigger: 'blur' },
          { min: 2, max: 6, message: '菜单长度在2-6个字符内', trigger: 'blur' } ,
        ],
        component:[
          { required: true, message: '请先选择组件', trigger: 'blur' }
        ]
      },
      selectTreeValue:undefined,
      componentList:viewsComponents.keys(),
      resourcesData:[],
      permissionsItems:[],
      methodAll:[],
      checkedKeys:[],
      treeValue:{},
      labelCol: {
        span: 4,
      },
      wrapperCol: {
        span: 14,
      },
      formItemLayoutWithOutLabel:{
        wrapperCol: {
          sm: { span: 14, offset: 4 },
        },
      }
    }
  },
  components:{
  },
  created() {
    this.componentList = layoutsComponents.keys().concat(viewsComponents.keys());
    console.log(this.componentList)
    this.getResourcesList()
    sysResourcesMethods().then(res=>{
      this.methodAll = res.data
    })
  },
  methods:{
    getResourcesList(){
      sysResourcesList().then(res=>{
        this.resourcesData = toTree(res.data)
        console.log(this.resourcesData)
      })
    },
    confirmDel(){
      sysResourcesRemoveById({id:this.selectTreeValue}).then(res=>{
        if (res.code!==200){
          message.error(res.msg);
        }else {
          message.success('删除成功');
          this.selectTreeValue =undefined
          this.getResourcesList()
        }
      })
    },
    confirmDels(){
      sysResourcesRemoveById(this.checkedKeys).then(res=>{
        if (res.code!==200){
          message.error(res.msg);
        }else {
          message.success('删除成功');
          this.getResourcesList()
        }
      })
    },
    addHandleOk(){
      this.$refs.formRef
          .validate()
          .then((res) => {
            this.confirmLoading =true
            sysResourcesSave(res).then(res=>{
              if (res.code!==200){
                message.error(res.msg);
              }else {
                message.success('添加成功');
                this.getResourcesList()
                this.addVisible=false
                this.$refs.formRef.resetFields();
              }
            }).catch(e=>{
              message.error('请求异常');
            }).finally(()=>{
              this.confirmLoading =false
            })
          })
          .catch(error => {
            console.log('error', error);
          });
    },
    submitHandleOk(){
      this.submitConfirmLoading =true
      sysResourcesSave(this.treeValue).then(res=>{
        if (res.code!==200){
          message.error(res.msg);
        }else {
          message.success('更新成功');
          this.getResourcesList()
        }
      }).finally(()=>{
        this.submitConfirmLoading =false
      })
    },
    addItem(e){
      if (!this.treeValue.permissions){
        this.treeValue.permissions = []
      }
      this.treeValue.permissions.push({
      })
    },
    selectTree(e){
      this.selectTreeValue = e[0]
      if (this.selectTreeValue!==undefined){
        sysResourcesGetById({id:e[0]}).then(res=>{
          this.treeValue = res.data
          if (!this.treeValue.apis){
            this.treeValue.apis = []
          }
        })
      }
    },
    removeItem(item){
      let index = this.treeValue.permissions.indexOf(item);
      if (index !== -1) {
        this.treeValue.permissions.splice(index, 1);
      }
    }
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
.tag-click{
  cursor: pointer;
}
</style>
