<template>
  <section>
    <td-table
        title="商铺分类"
        ref="table"
        defaultExpandAllRows
        childrenColumnName
        :data-process="data=>{
            data.records = toTree(data.records, 'id', 'pid', 'cateName', 'children')
            return data
        }"
        :get-item-by-id="parameter=>mallStoreCateGetById({id:parameter.id})"
        :add-item-ok="parameter=>mallStoreCateSave(parameter)"
        :edit-item-ok="parameter=>mallStoreCateSave(parameter)"
        :delete-item-ok="parameter=>mallStoreCateRemoveById(parameter)"
        :data-source="parameter=>mallStoreCatePage(parameter)">
      <template #Search="{formState}">
        <a-form-item label="分类名称" name="cateName">
          <a-input v-model:value="formState.cateName"/>
        </a-form-item>
      </template>
      <template #Columns>
        <a-table-column title="分类名称" data-index="cateName" align="center"/>
        <a-table-column title="创建时间" data-index="createTime" align="center"/>
      </template>
      <template #AddItem="{formState}">
        <div style="width: 400px;margin-right: 60px">
          <a-form-item label="所属分类" name="pid">
            <td-select-tree
                :field-names="{children:'children',parentKey:'pid', label:'cateName', key:'id', value: 'id' }"
                :data-source="mallStoreCateList" v-model:value="formState.pid"/>
          </a-form-item>
          <a-form-item label="分类名称" name="cateName">
            <a-input v-model:value="formState.cateName"/>
          </a-form-item>
          <a-form-item label="排序" name="sort">
            <a-input-number v-model:value="formState.sort"/>
          </a-form-item>
        </div>
      </template>
      <template #EditItem="{formState}">
        <div style="width: 400px;margin-right: 60px">
          <a-form-item label="所属分类" name="pid">
            <td-select-tree
                :field-names="{children:'children',parentKey:'pid', label:'cateName', key:'id', value: 'id' }"
                :data-source="mallStoreCateList" v-model:value="formState.pid"/>
          </a-form-item>
          <a-form-item label="分类名称" name="cateName">
            <a-input v-model:value="formState.cateName"/>
          </a-form-item>
          <a-form-item label="排序" name="sort">
            <a-input-number v-model:value="formState.sort"/>
          </a-form-item>
        </div>
      </template>
    </td-table>
  </section>
</template>

<script>
import {
  mallStoreCatePage,
  mallStoreCateRemoveById,
  mallStoreCateSave,
  mallStoreCateGetById,
  mallStoreCateList
} from "@/api/MallStoreCate";
import {toTree} from "@/utils/util";

export default {
  name: "MallStoreCate",
  components: {},
  data() {
    return {
      mallStoreCatePage,
      mallStoreCateRemoveById,
      mallStoreCateSave,
      mallStoreCateList,
      mallStoreCateGetById,
      toTree
    }
  },
  created() {
  },
  methods: {
  }
}
</script>

<style scoped>

</style>