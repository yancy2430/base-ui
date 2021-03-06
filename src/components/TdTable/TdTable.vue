<template>
  <section>
    <a-form v-if="$slots['Search']"
            class="table-search"
            style="margin-bottom: 16px;" :layout="'inline'"
            :model="searchForm"
            autocomplete="off"
            ref="searchForm"
            @finish="onSearch"
    >
      <slot name="Search" :formState="searchForm"></slot>
      <a-form-item style="width: 138px;">
        <a-button type="primary" html-type="submit">
          <template #icon>
            <SearchOutlined/>
          </template>
          搜 索
        </a-button>
        <a-button style="margin-left: 10px" @click="$refs.searchForm.resetFields()">重 置</a-button>
      </a-form-item>
    </a-form>
    <a-table
        ref="table"
        class="table-list"
        size="small"
        :bordered="false"
        :row-key="(record) => record.id"
        :data-source="data.records"
        :pagination="data"
        :loading="spinning"
        :sortDirections="['ascend', 'descend']"
        v-bind="$attrs"
        :row-class-name="(_record, index) => (index % 2 === 1 ? 'table-striped' : null)"
        @change="handleTableChange">
      <template #emptyText>
        <a-empty :image="simpleImage" :description="locale.errorText" />
      </template>
      <template #title>
        <a-row type="flex" style="padding: 5px 0;display: flex;align-items: center;">
          <a-col flex="400px"><span class="table-title">{{ title }}</span><slot name="LeftHeader">
          </slot></a-col>

          <a-col class="table-header-right" flex="auto"
                 style="display: flex;align-items: center;justify-content: flex-end;">
            <a-button v-if="$slots['AddItem']" type="primary" size="small" @click="onVisible('addItem','addFormState')">
              <plus-outlined/>
              新增
            </a-button>
            <a-tooltip v-if="items.length>0">
              <template #title>列设置</template>
              <a-popover trigger="click" placement="bottomRight">
                <template #title>
                  <a-checkbox style="margin-left: 5px;">列展示 / 排序</a-checkbox>
                  <a-button type="link" style="padding: 0;">重置</a-button>
                </template>
                <template #content>
                  <Container @drop="onDrop">
                    <Draggable v-for="(item, i) in items" :key="item.id">
                      <div style="display: flex;align-items: center;margin-bottom: 8px">
                        <img style="margin-right: 5px;margin-left: -14px;cursor: move;" width="14" height="14"
                             src="../../assets/icon/info-darg.svg"/>
                        <a-checkbox :value="i">列展示{{ i }}</a-checkbox>
                      </div>
                    </Draggable>
                  </Container>
                </template>
                <setting-outlined class="table-header-icon"/>
              </a-popover>
            </a-tooltip>
            <a-tooltip v-if="items.length>0">
              <template #title>导入表</template>
              <import-outlined class="table-header-icon"/>
            </a-tooltip>
            <a-tooltip v-if="items.length>0">
              <template #title>下载表</template>
              <download-outlined class="table-header-icon"/>
            </a-tooltip>
          </a-col>
        </a-row>
      </template>
      <a-table-column v-if="number" title="序号" align="center" >
        <template #default="{ index}">
          {{index+1}}
        </template>
      </a-table-column>
      <slot name="Columns">
      </slot>
      <a-table-column v-if="$slots['Action'] || deleteItemOk" title="操作" align="center">
        <template #default="{ record }">
          <slot name="Action" :record="record">
          </slot>
          <a v-if="$slots['EditItem']" @click="onVisible('editItem','editFormState',record)">编辑</a>
          <a-divider v-if="$slots['EditItem'] && deleteItemOk" type="vertical"/>
          <a-popconfirm
              title="是否需要删除此项?"
              ok-text="删除"
              cancel-text="取消"
              :okButtonProps="{'danger':true}"
              @confirm="onDeleteItemOk(record)">
            <a v-if="deleteItemOk" style="color: #FF4D4FFF;">删除</a>
          </a-popconfirm>
        </template>
      </a-table-column>
    </a-table>
    <a-modal wrapClassName="autoWidth" v-if="$slots['AddItem']" title="新增" v-model:visible="visible.addItem" autoFocusButton="ok" @ok="onAddItem" destroyOnClose>
      <a-form
          name="addItem"
          ref="addItem"
          :model="formState.addFormState"
          autocomplete="off"
      >
        <slot name="AddItem" :formState="formState.addFormState"></slot>
      </a-form>
    </a-modal>
    <a-modal wrapClassName="autoWidth" v-if="$slots['EditItem']" title="编辑" v-model:visible="visible.editItem" autoFocusButton="ok" @ok="onEditItem" destroyOnClose>
      <a-spin :spinning="loadings.editLoad">
        <a-form
            name="editItem"
            ref="editItem"
            :model="formState.editFormState"
            autocomplete="off"
        >
          <slot name="EditItem" :formState="formState.editFormState"></slot>
        </a-form>
      </a-spin>

    </a-modal>
  </section>
</template>

<script>
import {
  SearchOutlined,
  SettingOutlined,
  ImportOutlined,
  DownloadOutlined,
  PlusOutlined
} from '@ant-design/icons-vue';
import { Empty } from 'ant-design-vue';

import {Container, Draggable} from "vue3-smooth-dnd";

export default {
  name: 'TdTable',
  props: {
    number:{
      type: Boolean,
      default() {
        return false
      }
    },
    title: {
      type: String,
      default() {
        return ""
      }
    },
    columns: {
      type: Array,
      default() {
        return []
      }
    },
    addItemOk: {
      type: Function,
      default() {
        return function (data) {

        }
      }
    },
    editItemOk: {
      type: Function,
      default() {
        return function (data) {

        }
      }
    },
    getItemById: {
      type: Function,
      default() {
        return function (data) {

        }
      }
    },
    deleteItemOk: {
      type: Function,
    },
    loadDataComplete: {
      type: Function,
      default() {
        return function (data) {
        }
      }
    },
    dataSource: {
      type: Function
    },
    searchData: {
      type: Object,
      default() {
        return {}
      }
    },
    pageSize: {
      type: Number,
      default: 16
    },
  },
  components: {
    SearchOutlined,
    SettingOutlined,
    ImportOutlined,
    DownloadOutlined,
    PlusOutlined,
    Container,
    Draggable
  },
  data() {
    let search = Object.assign({}, this.searchData)
    return {
      simpleImage: Empty.PRESENTED_IMAGE_SIMPLE,
      items: [],
      formState: {
        addFormState: {},
        editFormState: {}
      },
      visible: {
        addItem: false,
        editItem: false,
      },
      searchForm: search,
      addForm: [],
      locale: {
        errorText: ''
      },
      spinning: false,
      loadings: {
        editLoad:false,
      },
      selectedRowKeys: [],
      data: {
        records: [],
        pageSizeOptions: [
          "16",
          "30",
          "50",
          "100",
        ],
        showQuickJumper: true,
        showSizeChanger: true,
        showTotal: total => `共 ${total} 条`
      },
    }
  },
  created() {
    this.loadData({page: 1, size: this.pageSize})
  },
  computed: {
    columnsData() {
      return this.columns;
    }
  },
  methods: {
    onAddItem(){
      this.$refs.addItem.validateFields().then(values => {
        this.addItemOk(values).then(res=>{
          this.visible.addItem=false;
          this.loadData()
        })
      }).catch(info => {
        console.log('Validate Failed:', info);
      });
    },
    onEditItem(){
      this.$refs.editItem.validateFields().then(values => {
        this.editItemOk(Object.assign({},values,this.formState['editFormState'])).then(res=>{
          this.visible.editItem=false;
          this.loadData()
        })
      }).catch(info => {
        console.log('Validate Failed:', info);
      });
    },
    onDeleteItemOk(item) {
      this.deleteItemOk(item)
          .then(res => {
            if (res.code===200){
              this.loadData()
            }else {
              this.$message.error(res.msg)
            }
          })
    },
    onVisible(visible, formState,record) {
      if (visible==='editItem') {
        this.formState[formState] = {}
        this.visible[visible] = true
        this.loadings.editLoad = true
        this.getItemById(record).then(res=>{
          this.formState[formState] = res.data
          this.loadings.editLoad = false
        })
      }else {
        this.formState[formState] = Object.assign({},record) || {}
        this.visible[visible] = true
      }

    },
    onDrop(dropResult) {
      this.items = this.applyDrag(this.items, dropResult);
    },
    applyDrag(arr, dragResult) {
      const {removedIndex, addedIndex, payload} = dragResult;

      if (removedIndex === null && addedIndex === null) return arr;
      const result = [...arr];
      let itemToAdd = payload;

      if (removedIndex !== null) {
        itemToAdd = result.splice(removedIndex, 1)[0];
      }
      if (addedIndex !== null) {
        result.splice(addedIndex, 0, itemToAdd);
      }
      return result;
    },
    handleTableChange(pagination, filters, sorter) {
      console.log(sorter)
      if (sorter && sorter.field) {
        if (sorter.order) {
          this.searchForm.sorter = sorter.field + "," + sorter.order.replace("end", "")
        } else {
          this.searchForm.sorter = undefined
        }
      }
      this.searchForm.page = pagination.current
      this.searchForm.size = pagination.pageSize
      this.loadData(this.searchForm)
    },
    onSearch() {
      this.$refs.searchForm.validateFields().then(values => {
        this.loadData(values)
      }).catch(info => {
        console.log('Validate Failed:', info);
      });

    },
    updateItem(item, key) {
      key = key || 'id';
      let index = this.data.records.findIndex(record => record[key] === item[key]);
      if (index >= 0) {
        Object.assign(this.data.records[index], item)
      } else {
        this.loadData()
      }
    },
    loadData(param, success, error) {
      success = success || function () {
      }
      error = error || function () {
      }
      param = param || {}
      param.page = param.page || 1
      param.size = param.size || this.pageSize
      this.searchForm = Object.assign(this.searchForm, param)
      this.spinning = true
      this.dataSource(this.searchForm).then(res => {
        this.data = {}
        if (res.code === 200) {
          this.locale.errorText = undefined
          Object.assign(this.data, res.data)
          this.data.pageSize = res.data.size
          this.data.size = undefined
          this.loadDataComplete(this.data)
        } else {
          this.locale.errorText = res.msg
        }
        success(res)
      }).catch(function (err) {
        error(err)
        this.locale.errorText = err
      }).finally(() => {
        this.spinning = false
      })
    }
  }
}
</script>

<style>
.pageStyle {
  padding: 16px 0px;
  text-align: right;
}

.table-search {
  background: #ffffff;
  padding: 20px 20px 10px 20px;
}

.table-header {

}

.table-search .ant-form-item {
  margin-bottom: 10px;
}

.table-title {
  font-size: 15px;
  margin: 0 15px;
  font-weight: 500;
}

.table-header-icon {
  font-size: 16px;
  font-weight: bold;
}

.table-list {
  background: #fff;
}

.table-header-right > * {
  margin-right: 16px;

}

.table-striped {
  background-color: #fafafa;
}

.table-search .ant-form-item .ant-form-item-control .ant-form-item-control-input .ant-form-item-control-input-content > .ant-input, .table-search .ant-form-item .ant-form-item-control .ant-form-item-control-input .ant-form-item-control-input-content > .ant-input-number {
  width: 100%;
}

.table-search .ant-form-item {
  width: 280px;
}

.table-search .long-value {
  width: auto;
}
.autoWidth .ant-modal{
  display: flex;
  align-content: center;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: center;
}
</style>
