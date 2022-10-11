<template>
  <section>
    <td-table
        title="发送列表"
        ref="table"
        :add-item-ok="parameter=>smsSendSendBody(parameter)"
        :data-source="parameter=>smsSendPage(parameter)">
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
        <a-table-column title="模板编号" data-index="orderId" :sorter="true"/>
        <a-table-column title="签名名称" data-index="signName"/>
        <a-table-column title="审核状态" data-index="auditStatus" :sorter="true"/>
        <a-table-column title="创建时间" data-index="createDate" :sorter="true"/>
      </template>
      <template #AddItem="{formState}">
        <div style="width: 520px;margin-right: 80px">
          <a-form-item label="发送模板" name="templateCode">
            <td-select ref="smsTemplateList" :showSearch="true" :data-source="searchValue=>smsTemplateList()"
                       field-value="templateCode"
                       field-name="templateName"
                       @change="onSelectTemplate($event,formState)"
                       v-model:value="formState.templateCode"/>
          </a-form-item>
          <a-form-item label="发送内容" name="param">
            <a-textarea :auto-size="{ minRows: 4 }" v-model:value="formState.param"/>
          </a-form-item>
          <a-form-item label="签名" name="signName">
            <td-select :showSearch="true" :data-source="searchValue=>smsSignList()"
                       field-value="signName"
                       field-name="signName"
                       v-model:value="formState.signName"/>
          </a-form-item>
          <a-form-item label="接收人" name="phoneNumbers">
            <a-select mode="tags" :token-separators="[',',';','|']" v-model:value="formState.phoneNumbers"/>
          </a-form-item>
        </div>
      </template>
    </td-table>
  </section>
</template>

<script>

import {smsSendPage, smsSendSendBody} from "@/api/SmsSend";
import {smsSignList} from "@/api/SmsSign";
import {smsTemplateList} from "@/api/SmsTemplate";

export default {
  name: "SmsTemplate",
  data() {
    return {
      smsSignList,
      smsSendPage,
      smsSendSendBody,
      smsTemplateList
    }
  },
  created() {
  },
  methods: {
    onSelectTemplate(value, formState) {
      let data = this.$refs.smsTemplateList.getData().find(function (item) {
        return item.templateCode === value
      })
      formState.param = data.templateContent
    }
  }
}
</script>

<style scoped>

</style>