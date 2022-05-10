<template>
  <section>
    <td-table
        title="附件表"
        ref="table"
        :data-source="parameter=>sysAttachmentPage(parameter)">
      <template #Search="{formState}">
        <a-form-item label="附件ID" name="id">
          <a-input-number v-model:value="formState.id"/>
        </a-form-item>
        <a-form-item label="文件名" name="name">
          <a-input v-model:value="formState.name"/>
        </a-form-item>
        <a-form-item label="原文件名" name="originalName">
          <a-input v-model:value="formState.originalName"/>
        </a-form-item>
        <a-form-item label="储存路径" name="path">
          <a-input v-model:value="formState.path"/>
        </a-form-item>
        <a-form-item label="访问地址" name="url">
          <a-input v-model:value="formState.url"/>
        </a-form-item>
        <a-form-item label="文件类型" name="type">
          <a-input-number v-model:value="formState.type"/>
        </a-form-item>
        <a-form-item label="文件大小" name="fileSize">
          <a-input v-model:value="formState.fileSize"/>
        </a-form-item>
      </template>
      <template #Columns>
        <a-table-column title="附件ID" data-index="id" align="center" :sorter="true"/>
        <a-table-column title="文件名" data-index="name" align="center"/>
        <a-table-column title="原文件名" data-index="originalName" align="center"/>
        <a-table-column title="储存路径" data-index="path" align="center"/>
        <a-table-column title="访问地址" data-index="url" align="center"/>
        <a-table-column title="文件类型" data-index="type" align="center" :sorter="true"/>
        <a-table-column title="文件大小" data-index="fileSize" align="center"/>
      </template>
    </td-table>
  </section>
</template>

<script>
import TdTable from "@/components/TdTable/TdTable";
import {sysAttachmentPage} from "@/api/SysAttachment";

export default {
  name: "SysAttachment",
  components: {TdTable},
  data() {
    return {
      sysAttachmentPage: sysAttachmentPage
    }
  },
  created() {
  },
  methods: {}
}
</script>

<style scoped>

</style>