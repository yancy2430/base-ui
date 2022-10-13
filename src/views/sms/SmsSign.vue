<template>
  <section>
    <td-table
        title="短信签名"
        ref="table"

        :data-source="parameter=>smsSignPage(parameter)">
      <template #Columns>
        <a-table-column title="签名名称" data-index="signName"  />
        <a-table-column title="审核状态" data-index="auditStatus" :sorter="true" />
        <a-table-column title="创建时间" data-index="createDate" :sorter="true" />
      </template>
      <template #AddItem="{formState}">
        <div style="width: 400px;margin-right: 80px">
          <a-form-item label="签名名称" name="signName" required>
            <a-input v-model:value="formState.signName"/>
          </a-form-item>
          <a-form-item label="签名来源" name="signSource" required>
            <td-select :showSearch="false" :data-source="searchValue=>enumOption('SmsSignSource')"
                       v-model:value="formState.signSource"/>
          </a-form-item>
          <a-form-item label="签名申请说明" name="remark" extra="短信签名申请说明。场景说明是签名审核的参考信息之一。长度不超过200个字符。" required>
            <a-textarea :auto-size="{ minRows: 3 }" v-model:value="formState.remark"/>
          </a-form-item>
          <a-form-item label="签名类型" name="signType" required>
            <td-select :showSearch="false" :data-source="searchValue=>enumOption('SmsSignType')"
                       v-model:value="formState.signType"/>
          </a-form-item>
          <a-form-item label="签名文件列表" name="signFileList" required>
            <a-input v-model:value="formState.signFileList"/>
          </a-form-item>
        </div>
      </template>
    </td-table>
  </section>
</template>

<script>

import {smsSignPage} from "@/api/SmsSign";
import {enumOption} from "@/api/Common";

export default {
  name: "SmsTemplate",
  data() {
    return {
      enumOption,
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