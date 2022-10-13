<template>
  <section>
    <td-table
        title="短信记录"
        ref="table"
        :get-item-by-id="parameter=>smsRecordGetById(parameter)"
        :add-item-ok="parameter=>smsRecordSend(parameter)"
        :data-source="parameter=>smsRecordPage(parameter)">
      <template #Search="{formState}">
        <a-form-item label="发送状态" name="status">
          <a-input v-model:value="formState.status"/>
        </a-form-item>
        <a-form-item label="模板代码" name="templateCode">
          <a-input v-model:value="formState.templateCode"/>
        </a-form-item>
        <a-form-item label="签名" name="signName">
          <a-input v-model:value="formState.signName"/>
        </a-form-item>
        <a-form-item label="接收手机号" name="phone">
          <a-input v-model:value="formState.phone"/>
        </a-form-item>
      </template>
      <template #Columns>
        <a-table-column title="发送ID" data-index="id" align="center" :sorter="true"/>
        <a-table-column title="发送状态" data-index="status" align="center"/>
        <a-table-column title="发送时间" data-index="sendTime" align="center"/>
        <a-table-column title="模板代码" data-index="templateCode" align="center"/>
        <a-table-column title="签名" data-index="signName" align="center"/>
        <a-table-column title="内容" data-index="content" align="center"/>
        <a-table-column title="接收手机号" data-index="phone" align="center"/>
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
          <a-form-item label="发送内容" name="content" extra="提醒：发送前请替换${}变量为需要发送的内容" required>
            <a-textarea :auto-size="{ minRows: 3 }" v-model:value="formState.content"/>
          </a-form-item>
          <a-form-item label="签名" name="signName" required>
            <td-select :showSearch="true" :data-source="searchValue=>smsSignList()"
                       field-value="signName"
                       field-name="signName"
                       v-model:value="formState.signName"/>
          </a-form-item>
          <a-form-item label="接收人" name="phone" required>
            <a-input v-model:value="formState.phone"/>
          </a-form-item>
        </div>
      </template>
      <template #Action="{formState}">
        <a-button type="link">重发</a-button>
      </template>
    </td-table>
  </section>
</template>

<script>
import {smsRecordPage, smsRecordSend, smsRecordGetById} from "@/api/SmsRecord";
import {smsSignList} from "@/api/SmsSign";
import {smsTemplateList} from "@/api/SmsTemplate";

export default {
  name: "SmsRecord",
  components: {},
  data() {
    return {
      smsSignList,
      smsTemplateList,
      smsRecordPage,
      smsRecordSend,
      smsRecordGetById
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
    }
  }
}
</script>

<style scoped>

</style>