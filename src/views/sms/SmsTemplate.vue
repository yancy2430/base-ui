<template>
  <section>
    <td-table
        title="短信模板"
        ref="table"
        :data-source="parameter=>smsTemplatePage(parameter)">
      <template #Search="{formState}">
        <a-form-item label="模板编号" name="orderId">
          <a-input-number v-model:value="formState.orderId"/>
        </a-form-item>
        <a-form-item label="审核状态" name="auditStatus">
          <a-input v-model:value="formState.auditStatus"/>
        </a-form-item>
        <a-form-item label="模板名称" name="templateName">
          <a-input v-model:value="formState.templateName"/>
        </a-form-item>
      </template>
      <template #Columns>
        <a-table-column title="模板编号" data-index="orderId" :sorter="true" />
        <a-table-column title="模板名称" data-index="templateName"  />
        <a-table-column title="模板代码" data-index="templateCode"  />
        <a-table-column title="审核状态" data-index="auditStatus" :sorter="true" />
        <a-table-column title="模板内容" data-index="templateContent"  />
        <a-table-column title="创建时间" data-index="createDate" :sorter="true" />
      </template>
    </td-table>
  </section>
</template>

<script>

import {smsTemplatePage} from "@/api/SmsTemplate";

export default {
  name: "SmsTemplate",
  data() {
    return {
      smsTemplatePage
    }
  },
  created() {
  },
  methods: {}
}
</script>

<style scoped>

</style>