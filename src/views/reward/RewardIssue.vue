<template>
  <section>
    <td-table
        title="悬赏榜"
        ref="table"
        :search-data="searchData"
        :add-item-ok="parameter=>rewardIssueSave(parameter)"
        :edit-item-ok="parameter=>rewardIssueSave(parameter)"
        :get-item-by-id="parameter=>rewardIssueGetById({id:parameter.id})"
        :delete-item-ok="parameter=>rewardIssueRemoveById({id:parameter.id})"
        :data-source="parameter=>rewardIssuePage(parameter)">
      <template #LeftHeader>
        <a-switch @change="onAudit" v-model:checked="searchData.audit" checked-children="审"  un-checked-children="审" />
      </template>
      <template #Search="{formState}">
        <a-form-item label="标题" name="title">
          <a-input v-model:value="formState.title"/>
        </a-form-item>
        <a-form-item label="状态" name="state">
          <td-select :showSearch="true" :data-source="searchValue=>enumOption('RewardIssueState')" v-model:value="formState.state"/>
        </a-form-item>
      </template>
      <template #Columns>
        <a-table-column title="标题" data-index="title" align="center"/>
        <a-table-column title="问题描述" data-index="describe" align="center"/>
        <a-table-column title="发布人" data-index="publisher" align="center"/>
        <a-table-column title="发布时间" data-index="publishTime" align="center"/>
        <a-table-column title="发布群体" data-index="groupText" >
          <template #default="{text}">
            <a-tag v-for="tag in text" :key="tag" color="blue" style="margin: 1px">{{ tag }}</a-tag>
          </template>
        </a-table-column>
        <a-table-column title="发布板块" data-index="categoryName" align="center" :sorter="true"/>
      </template>
      <template #AddItem="{formState}">
        <a-row style="width: 600px" :gutter="[16,0]">
          <a-col :span="24">
            <a-form-item label="问题标题" name="title"
                         :rules="[{ required: true, message: '请输入标题!' }]">
              <a-input v-model:value="formState.title"/>
            </a-form-item>
          </a-col>
          <a-col :span="24">
            <a-form-item label="问题描述" name="describe"
                         :rules="[{ required: true, message: '请输入问题描述!' }]"
            >
              <a-textarea v-model:value="formState.describe" placeholder="请输入问题描述" :rows="4" />
            </a-form-item>
          </a-col>
          <a-col :span="24">
            <a-form-item label="发布群体" name="groupId"
                         :rules="[{ required: true, message: '请选择群体类别!' }]">
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
          <a-col :span="24">
            <a-form-item label="发布板块" name="category"
                         :rules="[{ required: true, message: '请选择发布板块!' }]">
              <a-select v-model:value="formState.category" :options="categoryList" :fieldNames="{ label: 'categoryName', value: 'id' }">
              </a-select>
            </a-form-item>
          </a-col>
        </a-row>
      </template>
      <template #EditItem="{formState}" v-if="!searchData.audit">
        <a-row style="width: 600px" :gutter="[16,0]">
          <a-col :span="24">
            <a-form-item label="问题标题" name="title"
                         :rules="[{ required: true, message: '请输入标题!' }]">
              <a-input v-model:value="formState.title"/>
            </a-form-item>
          </a-col>
          <a-col :span="24">
            <a-form-item label="问题描述" name="describe"
                         :rules="[{ required: true, message: '请输入问题描述!' }]"
            >
              <a-textarea v-model:value="formState.describe" placeholder="请输入问题描述" :rows="4" />
            </a-form-item>
          </a-col>
          <a-col :span="24">
            <a-form-item label="发布群体" name="groupId"
                         :rules="[{ required: true, message: '请选择群体类别!' }]">
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
          <a-col :span="24">
            <a-form-item label="发布板块" name="category"
                         :rules="[{ required: true, message: '请选择发布板块!' }]">
              <a-select v-model:value="formState.category" :options="categoryList" :fieldNames="{ label: 'categoryName', value: 'id' }">
              </a-select>
            </a-form-item>
          </a-col>
        </a-row>
      </template>
      <template #Action="{record}">
        <a v-if="searchData.audit" @click="onAuditShow(record)">审核</a>
        <a-divider v-if="searchData.audit" type="vertical"/>
      </template>
    </td-table>
    <a-modal destroy-on-close v-model:visible="visible.audit" title="审核问题" @ok="onAuditHandleOk">
      <a-form
          :model="formState.audit"
          name="basic"
          ref="formAudit"
          autocomplete="off"
      >
        <a-form-item
            label="审核结果"
            name="state"
            :rules="[{ required: true, message: '请选择审核结果!' }]"
        >
          <a-radio-group v-model:value="formState.audit.state" button-style="solid">
            <a-radio-button value="通过">通过</a-radio-button>
            <a-radio-button value="驳回">驳回</a-radio-button>
          </a-radio-group>
        </a-form-item>
        <a-form-item
            label="审核意见"
            name="auditIdea"
            :rules="[{ required: true, message: '请填写审核意见!' }]"
        >
          <a-textarea v-model:value="formState.audit.auditIdea" />
        </a-form-item>
      </a-form>
    </a-modal>
  </section>
</template>

<script>
import TdTable from "@/components/TdTable/TdTable";
import {rewardIssueGetById, rewardIssuePage, rewardIssueRemoveById, rewardIssueSave} from "@/api/RewardIssue";
import {sysGroupList} from "@/api/SysGroup";
import {toTree} from "@/utils/util";
import {rewardCategoryList} from "@/api/RewardCategory";
import {rewardAuditSave} from "@/api/RewardAudit";
import {enumOption} from "@/api/Common";
import TdSelect from "@/components/TdSelect/TdSelect";

export default {
  name: "RewardIssue",
  components: {TdSelect, TdTable},
  data() {
    return {
      searchData:{
        audit:false,
      },
      visible:{
        audit:false,
      },
      formState:{
        audit:{
        }
      },
      rewardIssuePage: rewardIssuePage,
      rewardIssueSave: rewardIssueSave,
      rewardIssueRemoveById: rewardIssueRemoveById,
      rewardIssueGetById: rewardIssueGetById,
      enumOption:enumOption,
      groupData:[],
      categoryList:[]
    }
  },
  created() {
    this.getGroupList();
    this.getCategoryList()
  },
  methods: {
    onAudit(value){
      this.$refs.table.loadData({audit: value})
    },
    getGroupList() {
      sysGroupList().then(res => {
        this.groupData = toTree(res.data)
        console.log(this.groupData)
      })
    },
    getCategoryList(){
      rewardCategoryList().then(res=>{
        this.categoryList=res.data
      })
    },
    onAuditShow(item){//提交审核
      this.formState.audit={}
      this.visible.audit=true;
      this.formState.audit.rewardId=item.id
    },
    onAuditHandleOk(){//提交审核
      this.$refs.formAudit.validateFields().then(values => {
        rewardAuditSave(this.formState.audit).then(res=>{
          console.log(res)
          this.visible.audit=false;
          this.$refs.table.loadData()
        })
      }).catch(info => {
        this.visible.audit=false;
        console.log('Validate Failed:', info);
      });
    }
  }
}
</script>

<style scoped>

</style>