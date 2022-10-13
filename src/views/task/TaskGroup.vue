<template>
  <section>
    <td-table
        title="任务分组"
        ref="table"
        defaultExpandAllRows
        childrenColumnName
        :data-process="process"
        :indentSize="30"
        :get-item-by-id="parameter=>taskGroupGetById(parameter)"
        :add-item-ok="parameter=>taskGroupSave(parameter)"
        :edit-item-ok="parameter=>taskGroupSave(parameter)"
        :delete-item-ok="parameter=>taskGroupRemoveById(parameter)"
        :data-source="parameter=>taskGroupPage(parameter)">
      <template #Search="{formState}">
        <a-form-item label="分组ID" name="id">
          <a-input-number v-model:value="formState.id"/>
        </a-form-item>
        <a-form-item label="所属分组" name="pid">
          <a-input-number v-model:value="formState.pid"/>
        </a-form-item>
        <a-form-item label="分组名" name="name">
          <a-input v-model:value="formState.name"/>
        </a-form-item>
      </template>
      <template #Columns>
        <a-table-column title="分组ID" data-index="id" align="center" :sorter="true"/>
        <a-table-column title="所属分组" data-index="pid" align="center" :sorter="true"/>
        <a-table-column title="分组名" data-index="name" align="center"/>
      </template>
      <template #AddItem="{formState}">
        <a-form-item label="所属分组" name="pid">
          <td-select-tree v-model:value="formState.pid"
                          :field-names="{children:'children',parentKey:'pid', label:'name', key:'id', value: 'id' }"
                          :data-source="taskGroupList"/>
        </a-form-item>
        <a-form-item label="分组名" name="name">
          <a-input v-model:value="formState.name"/>
        </a-form-item>
      </template>
      <template #EditItem="{formState}">
        <a-form-item label="所属分组" name="pid">
          <td-select-tree v-model:value="formState.pid"
                          :field-names="{children:'children',parentKey:'pid', label:'name', key:'id', value: 'id' }"
                          :data-source="taskGroupList"/>
        </a-form-item>
        <a-form-item label="分组名" name="name">
          <a-input v-model:value="formState.name"/>
        </a-form-item>
      </template>
    </td-table>
  </section>
</template>

<script>
import {taskGroupPage, taskGroupRemoveById, taskGroupSave, taskGroupGetById, taskGroupList} from "@/api/TaskGroup";
import {toTree} from "@/utils/util";

export default {
  name: "TaskGroup",
  components: {},
  data() {
    return {
      taskGroupPage,
      taskGroupRemoveById,
      taskGroupSave,
      taskGroupGetById,
      taskGroupList
    }
  },
  created() {
  },
  methods: {
    process(data){
      data.records=toTree(data.records,"id","pid","name","children")
      return data;
    }
  }
}
</script>

<style scoped>

</style>