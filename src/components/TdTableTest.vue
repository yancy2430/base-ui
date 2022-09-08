<template>
  <section>
    <a-form v-if="$slots['Search']"
            class="table-search" :layout="'inline'"
            :model="searchForm"
            autocomplete="off"
            ref="searchForm"
            @finish="onSearch"
    >
      <slot name="Search" :formState="searchForm"></slot>
      <a-form-item class="table-search-btn">
        <a-button type="primary" html-type="submit">
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
        :columns="column"
        :pagination="data"
        :loading="spinning"
        :sortDirections="['ascend', 'descend']"
        v-bind="$attrs"
        @resizeColumn="handleResizeColumn"
        :row-class-name="(_record, index) => (index % 2 === 1 ? 'table-striped' : null)"
        @change="handleTableChange">
      <template #emptyText>
        <a-empty :image="simpleImage" :description="locale.errorText"/>
      </template>
      <template #title>
        <a-row type="flex" style="padding: 5px 0;display: flex;align-items: center;">
          <a-col flex="400px">
            <span class="table-title">{{ title }}</span>
            <slot name="LeftHeader">
            </slot>
          </a-col>
          <a-col class="table-header-right" flex="auto"
                 style="display: flex;align-items: center;justify-content: flex-end;">
            <a-button v-if="$slots['AddItem']" type="primary" size="small" @click="onVisible('addItem','addFormState')">
              新增
            </a-button>
            <a-tooltip>
              <template #title>导入表</template>
              <cloud-upload-outlined class="table-header-icon"/>
            </a-tooltip>
            <a-tooltip>
              <template #title>下载表</template>
              <cloud-download-outlined class="table-header-icon"/>
            </a-tooltip>
            <a-tooltip>
              <template #title>列设置</template>
              <a-popover trigger="click" placement="bottomRight" class="column-sort-show">
                <template #title>
                  <span style="margin-left: 8px;">列展示 / 排序</span>
                  <a-button type="link" style="padding: 0;">重置</a-button>
                </template>
                <setting-outlined class="table-header-icon"/>
                <template #content>
                  <draggable
                      v-model="baseColumn"
                      @end="onUpdateColumn"
                      item-key="dataIndex">
                    <template #item="{element,index}">
                      <div class="column-sort-show-item">
                        <holder-outlined class="holder-outlined"/>
                        <a-checkbox @change="onUpdateColumn" v-model:checked="baseColumn[index].show">{{ element.title }}</a-checkbox>
                      </div>
                    </template>
                  </draggable>
                </template>
              </a-popover>
            </a-tooltip>
          </a-col>
        </a-row>

      </template>
      <a-table-column title="操作">
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
    <a-modal :maskClosable="false" wrapClassName="autoWidth p0" v-if="$slots['AddItem']" title="新增"
             v-model:visible="visible.addItem" autoFocusButton="ok" @ok="onAddItem" destroyOnClose>
      <a-form
          name="addItem"
          ref="addItem"
          :label-col="labelCol"
          :wrapper-col="wrapperCol"
          :model="formState.addFormState"
          autocomplete="off"
      >
        <slot name="AddItem" :formState="formState.addFormState"></slot>
      </a-form>
    </a-modal>
    <a-modal :maskClosable="false" wrapClassName="autoWidth p0" v-if="$slots['EditItem']" title="编辑"
             v-model:visible="visible.editItem" autoFocusButton="ok" @ok="onEditItem" destroyOnClose>
      <a-spin :spinning="loadings.editLoad">
        <a-form
            name="editItem"
            ref="editItem"
            :label-col="labelCol"
            :wrapper-col="wrapperCol"
            :model="formState.editFormState"
            autocomplete="off"
        >
          <slot name="EditItem" :formState="formState.editFormState" :loading="loadings.editLoad">
          </slot>
        </a-form>
      </a-spin>

    </a-modal>
  </section>
</template>

<script>
import {
  SettingOutlined,
  CloudUploadOutlined,
  CloudDownloadOutlined,
  HolderOutlined,
} from '@ant-design/icons-vue';
import {Empty} from 'ant-design-vue';
import storage from "store";

import draggable from 'vuedraggable'
import { debounce } from 'lodash-es';
let saveTableConfig
export default {
  name: 'TdTableTest',
  props: {
    number: {
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
        return function () {

        }
      }
    },
    editItemOk: {
      type: Function,
      default() {
        return function () {

        }
      }
    },
    getItemById: {
      type: Function,
      default() {
        return function () {

        }
      }
    },
    deleteItemOk: {
      type: Function,
    },
    loadDataComplete: {
      type: Function,
      default() {
        return function () {
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
    SettingOutlined,
    CloudUploadOutlined,
    CloudDownloadOutlined,
    HolderOutlined,
    draggable,
  },
  data() {
    let search = Object.assign({}, this.searchData)
    let sorts ={}
    let widths ={}
    let shows={}
    let individuationObj =storage.get(this.$route.fullPath);
    if (individuationObj){//显示排序
      sorts = individuationObj.sort || {}
      widths=individuationObj.width || {}
      shows=individuationObj.shows || {}
    }
    let columnList = this.$slots.Columns().map(function (col, index) {
      if (typeof col.props.width ==='string'){
        col.props.width=Number(col.props.width.replace("px",""))
      }
      col.props.dataIndex = col.props['data-index']
      col.props.resizable = true
      col.props.align = 'center'
      col.props.show = shows[col.props.dataIndex]!==undefined?shows[col.props.dataIndex]:true
      col.props.width = widths[col.props.dataIndex] || col.props.width || 100
      col.props.sort = sorts[col.props.dataIndex] !== undefined ? sorts[col.props.dataIndex] : index
      col.props.customRender =  ({text, record, index, column})=>{
        if (col.children){
          return col.children.default({text, record, index, column})
        }
        return text
      }
      return col.props
    })
    columnList.sort(function (a, b) {
      return a.sort - b.sort;
    })

   let baseColumn = [...columnList]
    return {
      drag: false,
      labelCol: {
        style: {
          width: '150px',
        },
      },
      wrapperCol: {
        span: 18,
      },
      simpleImage: Empty.PRESENTED_IMAGE_SIMPLE,
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
        editLoad: false,
      },
      selectedRowKeys: [],
      baseColumn: baseColumn,
      column: [...baseColumn.filter(function (item) {
        return item.show
      })],
      DragColumn: {
      },
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
    let that = this;
    let sort={},widths = {},shows={}
    saveTableConfig = debounce(function () {
      that.baseColumn.map(function (item,index) {
        sort[item.dataIndex]=index
        widths[item.dataIndex]=item.width
        shows[item.dataIndex]=item.show
      })
      storage.set(that.$route.fullPath, {
        sort:sort,
        width:widths,
        export:{},
        search:{},
        shows:shows
      })
      if (that.$setIndividuation){
        that.$setIndividuation({
          sort:sort,
          width:widths,
          export:{},
          search:{},
          shows:shows
        })
      }
    },500)
  },
  mounted() {
    const that = this;
    that.$refs.table.$slots.default().map(function (col) {
      if (typeof col.props.width ==='string'){
        col.props.width=Number(col.props.width.replace("px",""))
      }
      col.props.width = col.props.width || 0
      col.props.dataIndex = col.props['data-index']
      col.props.resizable = true
      col.props.align = 'center'
      col.props.customRender =  ({text, record, index, column})=>{
        if (col.children){
          return col.children.default({text, record, index, column})
        }
        return text
      }
      that.column.push(col.props)
    })
  },
  methods: {
    onUpdateColumn(){
      this.column=[...this.baseColumn.filter(function (item) {
        return item.show
      })]
      saveTableConfig();
    },
    handleResizeColumn: (w, col) => {
      col.width = w;
      saveTableConfig(col);
    },
    onAddItem() {
      this.$refs.addItem.validateFields().then(values => {
        this.addItemOk(values).then(() => {
          this.visible.addItem = false;
          this.loadData()
        })
      }).catch(info => {
        console.log('Validate Failed:', info);
      });
    },
    onEditItem() {
      this.$refs.editItem.validateFields().then(values => {
        this.editItemOk(Object.assign({}, values, this.formState['editFormState'])).then(() => {
          this.visible.editItem = false;
          this.loadData()
        })
      }).catch(info => {
        console.log('Validate Failed:', info);
      });
    },
    onDeleteItemOk(item) {
      this.deleteItemOk(item)
          .then(res => {
            if (res.code === 200) {
              this.loadData()
            } else {
              this.$message.error(res.msg)
            }
          })
    },
    onVisible(visible, formState, record) {
      if (visible === 'editItem') {
        this.formState[formState] = {}
        this.visible[visible] = true
        this.loadings.editLoad = true
        this.getItemById(record).then(res => {
          this.formState[formState] = res.data
          this.loadings.editLoad = false
        })
      } else {
        this.formState[formState] = Object.assign({}, record) || {}
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
        this.locale.errorText = err || '网络异常'
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
  margin-bottom: 15px;
  padding: 16px 16px 6px 16px;
  position: relative;
}

.table-search .ant-form-item {
  margin-bottom: 8px;
  margin-right: 16px;
}

.table-title {
  font-size: 15px;
  margin: 0 10px;
  font-weight: 500;
}

.table-header-icon {
  font-size: 16px;
  font-weight: bold;
}

.table-list {
  background: #ffffff;
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

.autoWidth .ant-modal {
  display: flex;
  align-content: center;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: center;
}
.ant-table.ant-table-bordered > .ant-table-title {
  border: 0px solid #f0f0f0;
}

.ant-table.ant-table-bordered > .ant-table-container {
  border-left: 0px solid #f0f0f0;
}

.table-search .table-search-btn {
  width: 138px;
}

.column-sort-show-item {
  margin-left: 3px !important;
  padding: 3px 0;
}

.column-sort-show-item .holder-outlined {
  margin-right: 4px;
  cursor: move;
}
.table-search .ant-input{
  line-height: 1.286;
}
.table-search .ant-input-number-input{
  line-height: 1.286;
  height: 26px;
}
.table-search .ant-btn{
  line-height: 1.286;
  height: 26px;
  padding: 4px 8px;
  font-size: 12px;
}

.table-search .ant-select-selector{
  line-height: 26px!important;
  height: 28px!important;
}
.table-search .ant-select-selection-item{
  line-height: 26px!important;
  font-size: 13px;
}
.table-search .ant-select-selection-search-input{
  line-height: 26px!important;
  height: 28px!important;

}
.table-list .ant-pagination{
  margin-right: 16px;
}

</style>
