<template>
  <a-card size="default" title="《小象》项目接口文档" :head-style="{'padding-left':'18px'}" style="height: calc(100vh - 70px);"
          :body-style="{padding:'0','border-top': '0px solid #f0f0f0'}">
    <a-row type="flex" :wrap="false">
      <a-col flex="330px" style="border-right: 1px solid #f0f0f0;">
        <a-card title="接口目录" size="small" :bordered="false" :head-style="{'margin-bottom':'0'}"
                :body-style="{ 'overflow-y':'auto','height':'calc(100vh - 172px)'}">
          <template #extra>
            <a-input style="width: 180px" size="small" placeholder="搜索文档"/>
          </template>
          <a-directory-tree
              :showIcon="true"
              v-model:expandedKeys="expandedKeys"
              v-model:selectedKeys="selectedKeys"
              :tree-data="treeData"
              :fieldNames="{children:'items', title:'name', key:'name' }"
          >
          </a-directory-tree>
        </a-card>
      </a-col>
      <a-col flex="auto">
        <a-card title="接口内容" size="small" :bordered="false" :head-style="{'margin-bottom':'0'}"
                :body-style="{ 'overflow-y':'auto','height':'calc(100vh - 172px)'}">
          <template #extra>
            <a-tag style="cursor: pointer;padding: 3px 8px" color="#2db7f5" v-if="!debugging" @click="debugging=true">
              <template #icon>
                <api-outlined/>
              </template>
              调试模式
            </a-tag>
            <a-tag style="cursor: pointer;padding: 3px 8px" color="#87d068" v-else @click="debugging=false">
              <template #icon>
                <eye-outlined/>
              </template>
              浏览模式
            </a-tag>
          </template>
          <a-page-header
              :title="Api.name"
              style="padding:0;"
              :sub-title="Api.description!==Api.name?Api.description:''"
              :ghost="false"
          >
            <a-descriptions layout="vertical" size="small" :column="1" style="width: 100%">
              <a-descriptions-item label="请求地址" :labelStyle="labelTitleStyle">
                <a-tag v-if="Api.httpMethod==='GET'" color="processing">{{ Api.httpMethod }}</a-tag>
                <a-tag v-if="Api.httpMethod==='POST'" color="success">{{ Api.httpMethod }}</a-tag>
                <a-tag v-if="Api.httpMethod==='PUT'" color="warning">{{ Api.httpMethod }}</a-tag>
                <a-tag v-if="Api.httpMethod==='DELETE'" color="error">{{ Api.httpMethod }}</a-tag>
                <div v-for="(item,index) in docData.debugEnvs" :key="index">
                  <a-tag>{{ item.url }}{{ Api.url }}</a-tag>

                </div>
              </a-descriptions-item>
              <a-descriptions-item label="请求类型" :labelStyle="labelTitleStyle">
                <a-tag>{{ Api.contentType }}</a-tag>
              </a-descriptions-item>
              <a-descriptions-item label="请求参数" :labelStyle="labelTitleStyle">
                <a-descriptions layout="vertical" size="small" :column="1" style="width: 100%">
                  <a-descriptions-item label="Header Parameter" v-if="Api.headerParams"
                                       :labelStyle="labelSubTitleStyle">
                    <a-table bordered :dataSource="Api.headerParams" size="small"
                             :pagination="false"
                             style="min-width: 70%;max-width: 100%;"
                             emptyText="无需请求参数" defaultExpandAllRows>
                      <a-table-column width="30%" data-index="name" title="名称"/>
                      <a-table-column width="20%" data-index="required" title="必填">
                        <template #default="{record}">
                          <a-tag color="red" v-if="record.required==='1'">是</a-tag>
                          <a-tag v-else>否</a-tag>
                        </template>
                      </a-table-column>
                      <a-table-column width="30%" data-index="description" title="描述"/>
                      <a-table-column width="20%" data-index="example" title="示例值"/>
                    </a-table>
                  </a-descriptions-item>
                  <a-descriptions-item label="Query Parameter" v-if="Api.queryParams" :labelStyle="labelSubTitleStyle">
                    <a-table bordered :dataSource="Api.queryParams" size="small"
                             :pagination="false"
                             style="min-width: 70%;max-width: 100%;"
                             emptyText="无需请求参数" defaultExpandAllRows>
                      <a-table-column width="20%" data-index="name" title="名称"/>
                      <a-table-column width="20%" data-index="type" title="类型"/>
                      <a-table-column width="10%" data-index="required" title="必填">
                        <template #default="{record}">
                          <a-tag color="red" v-if="record.required==='1'">是</a-tag>
                          <a-tag v-else>否</a-tag>
                        </template>
                      </a-table-column>
                      <a-table-column width="30%" data-index="description" title="描述"/>
                      <a-table-column width="20%" data-index="example" title="示例值"/>
                    </a-table>
                  </a-descriptions-item>
                  <a-descriptions-item label="Body Parameter" v-if="Api.requestParams" :labelStyle="labelSubTitleStyle">
                    <a-table bordered :dataSource="Api.requestParams" size="small"
                             :pagination="false"
                             style="min-width: 70%;max-width: 100%;"
                             emptyText="无需请求参数" defaultExpandAllRows>
                      <a-table-column width="20%" data-index="name" title="名称"/>
                      <a-table-column width="20%" data-index="type" title="类型"/>
                      <a-table-column width="10%" data-index="required" title="必填">
                        <template #default="{record}">
                          <a-tag color="red" v-if="record.required==='1'">是</a-tag>
                          <a-tag v-else>否</a-tag>
                        </template>
                      </a-table-column>
                      <a-table-column width="30%" data-index="description" title="描述"/>
                      <a-table-column width="20%" data-index="example" title="示例值"/>
                    </a-table>
                  </a-descriptions-item>
                </a-descriptions>
              </a-descriptions-item>
              <a-descriptions-item label="响应参数" :labelStyle="labelTitleStyle">
                <a-table bordered v-if="Api.responseParams" :dataSource="Api.responseParams"
                         style="min-width: 70%;max-width: 100%;"
                         size="small" :pagination="false" defaultExpandAllRows>
                  <a-table-column width="20%" data-index="name" title="名称"/>
                  <a-table-column width="20%" data-index="type" title="类型"/>
                  <a-table-column width="30%" data-index="description" title="描述">
                    <template #default="{record}">
                      <div style="padding: 5px 0" v-if="record.type==='enum'">
                        <a-table v-if="record.enumInfo.items" style="margin: 0px" :dataSource="record.enumInfo.items"
                                 size="small" :pagination="false" defaultExpandAllRows>
                          <template #title>
                            {{ record.description }}枚举
                          </template>
                          <a-table-column data-index="value" title="值"/>
                          <a-table-column data-index="type" title="类型"/>
                          <a-table-column data-index="name" title="描述"/>
                        </a-table>
                      </div>
                      <span v-else>{{ record.description }}</span>
                    </template>
                  </a-table-column>
                  <a-table-column width="10%" data-index="example" title="示例值"/>
                </a-table>
              </a-descriptions-item>
                            <a-descriptions-item label="响应示例" :labelStyle="labelTitleStyle">
                              <a-typography-paragraph>
                                <pre>
<!--                                  {{ Api.responseExample }}-->
                                </pre>
                              </a-typography-paragraph>
                            </a-descriptions-item>
            </a-descriptions>
          </a-page-header>
        </a-card>
      </a-col>
    </a-row>
  </a-card>
</template>

<script>
import {EyeOutlined, ApiOutlined} from '@ant-design/icons-vue';
import request from '@/utils/request'

import {defineComponent, watch, ref} from 'vue';

export default defineComponent({
  name: "DocIndex",
  components: {
    EyeOutlined,
    ApiOutlined,
  },
  setup() {
    const treeData = ref([]);
    const debugging = ref(false);

    const Apis = ref({});
    const Api = ref({});
    const docData = ref({});
    const getData = () => {
      request(Object.assign({
        url: "http://192.168.1.50:10001/doc/api.json",
        method: 'GET',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        }
      }, {})).then(res => {
        console.log(res)
        docData.value = res
        treeData.value = res.apis
        for (const group of res.apis) {
          for (const api of group.items) {
            for (const apiElement of api.items) {
              if (apiElement.headerParams && apiElement.headerParams.length > 0) {
                apiElement.headerParams.map(function (item) {
                  item.children = item.children.length > 0 ? item.children : undefined
                })
              } else {
                apiElement.headerParams = undefined
              }
              if (apiElement.queryParams && apiElement.queryParams.length > 0) {
                apiElement.queryParams.map(function (item) {
                  item.children = item.children.length > 0 ? item.children : undefined
                })
              } else {
                apiElement.queryParams = undefined
              }
              if (apiElement.requestParams && apiElement.requestParams.length > 0) {
                apiElement.requestParams.map(function (item) {
                  item.children = item.children.length > 0 ? item.children : undefined
                })
              } else {
                apiElement.requestParams = undefined
              }
              apiElement.responseParams.map(function (item) {
                item.children = item.children.length > 0 ? item.children : undefined
              })
              Apis.value[apiElement.name] = apiElement
            }
          }
        }

        Api.value = Apis.value[selectedKeys.value[0]] || {}
      })
    }
    const expandedKeys = ref(['用户接口']);
    watch(expandedKeys, () => {
      console.log('expandedKeys', expandedKeys.value);
    });
    const selectedKeys = ref(['用户注册']);

    watch(selectedKeys, () => {
      console.log('selectedKeys', selectedKeys.value[0]);
      if (Apis.value[selectedKeys.value[0]]) {
        Api.value = Apis.value[selectedKeys.value[0]]
      }
      console.log(Api.value)
    });

    return {
      getData,
      debugging,
      Api,
      Apis,
      docData,
      expandedKeys,
      activeKey: ref('1'),
      treeData,
      selectedKeys,
      labelTitleStyle: {
        "font-size": "18px",
        "font-weight": "500"
      },
      labelSubTitleStyle: {
        "font-size": "15px",
        "font-weight": "500"
      }
    };
  },
  created() {
  },
  mounted() {
    this.getData()
  },
  methods: {}
});
</script>

<style scoped>
.tabs-bg {
  background: #ffffff;
}

/deep/ .ant-tabs-nav {
  margin: 0;
}

/deep/ .ant-tabs-tab:first-child {
  margin: 0 0 0 18px;
}

/deep/ .ant-descriptions-view table {
  table-layout: auto;
}

code {
  margin: 0;
  overflow: auto;
  color: #000000d9;
  font-size: 13px;
  direction: ltr;
  text-align: left;
  background: #f5f5f5;
  border: none;
  padding: 10px;
  min-width: 70%;
}
</style>