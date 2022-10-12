<template>
  <section>
    <td-table
        title="发送列表"
        ref="table"
        :add-item-ok="parameter=>smsSendSendParam(parameter)"
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
          <a-form-item label="选择模板" name="templateCode" required>
            <td-select ref="smsTemplateList" :showSearch="true" :data-source="searchValue=>smsTemplateList()"
                       field-value="templateCode"
                       field-name="templateName"
                       @change="onSelectTemplate($event,formState)"
                       v-model:value="formState.templateCode"/>
          </a-form-item>
          <a-form-item label="内容模板" name="template" style="display: none">
            <a-textarea disabled :auto-size="{ minRows: 3 }" v-model:value="formState.template"/>
          </a-form-item>
          <a-form-item label="发送内容" name="content" extra="提醒：发送前请替换${}变量为需要发送的内容" required>
            <a-textarea :auto-size="{ minRows: 3 }" v-model:value="formState.content"/>
          </a-form-item>
          <a-form-item label="签名" name="signName" required>
            <td-select :showSearch="true" :data-source="searchValue=>smsSignList()"
                       field-value="signName"
                       field-name="signName"
                       v-model:value="formState.signName"/>
          </a-form-item>
          <a-form-item label="接收人" name="phoneNumbers" required>
            <a-select mode="tags" :token-separators="[',',';','|']" v-model:value="formState.phoneNumbers"/>
          </a-form-item>
        </div>
      </template>
    </td-table>
  </section>
</template>

<script>

import {smsSendPage, smsSendSendParam} from "@/api/SmsSend";
import {smsSignList} from "@/api/SmsSign";
import {smsTemplateList} from "@/api/SmsTemplate";

export default {
  name: "SmsTemplate",
  data() {
    return {
      smsSignList,
      smsSendPage,
      smsSendSendParam,
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
      formState.content = data.templateContent
      formState.template = data.templateContent
    }
  }
}
</script>

<style scoped>

</style>