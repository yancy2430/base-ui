<template>
  <section>
    <td-table
        title="短信签名"
        ref="table"
        :data-source="parameter=>smsSignPage(parameter)">
      <template #Search="{formState}">
        <a-form-item label="签名编号" name="orderId">
          <a-input-number v-model:value="formState.orderId"/>
        </a-form-item>
        <a-form-item label="审核状态" name="auditStatus">
          <a-input v-model:value="formState.auditStatus"/>
        </a-form-item>
        <a-form-item label="签名名称" name="templateName">
          <a-input v-model:value="formState.templateName"/>
        </a-form-item>
      </template>
      <template #Columns>
        <a-table-column title="模板编号" data-index="orderId" :sorter="true" />
        <a-table-column title="签名名称" data-index="signName"  />
        <a-table-column title="审核状态" data-index="auditStatus" :sorter="true" />
        <a-table-column title="创建时间" data-index="createDate" :sorter="true" />
      </template>
    </td-table>
  </section>
</template>

<script>

import {smsSignPage} from "@/api/SmsSign";

export default {
  name: "SmsTemplate",
  data() {
    return {
      smsSignPage
    }
  },
  created() {
  },
  methods: {}
}
</script>

<style scoped>

</style>