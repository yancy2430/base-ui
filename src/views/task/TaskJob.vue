<template>
  <section>
    <td-table
        title="任务列表"
        ref="table"
        :get-item-by-id="parameter=>taskJobGetById(parameter)"
        :add-item-ok="parameter=>taskJobSave(parameter)"
        :edit-item-ok="parameter=>taskJobSave(parameter)"
        :delete-item-ok="parameter=>taskJobRemoveById(parameter)"
        :data-source="parameter=>taskJobPage(parameter)">
      <template #Search="{formState}">
        <a-form-item label="任务状态" name="status">
          <a-input v-model:value="formState.status"/>
        </a-form-item>
        <a-form-item label="任务名称" name="name">
          <a-input v-model:value="formState.name"/>
        </a-form-item>
        <a-form-item label="触发类型" name="triggerType">
          <a-input v-model:value="formState.triggerType"/>
        </a-form-item>
        <a-form-item label="并发执行" name="async">
          <a-input v-model:value="formState.async"/>
        </a-form-item>
        <a-form-item label="任务分组" name="groupId">
          <td-select-tree v-model:value="formState.groupId"
                          :field-names="{children:'children',parentKey:'pid', label:'name', key:'id', value: 'id' }"
                          :data-source="taskGroupList"/>
        </a-form-item>
      </template>
      <template #Columns>
        <a-table-column title="任务ID" data-index="id" align="center" :sorter="true"/>
        <a-table-column title="任务状态" data-index="status" align="center"/>
        <a-table-column title="任务名称" data-index="name" align="center"/>
        <a-table-column title="执行规则" data-index="cron" align="center"/>
        <a-table-column title="创建时间" data-index="createTime" align="center"/>
        <a-table-column title="触发类型" data-index="triggerType" align="center"/>
        <a-table-column title="目标" data-index="target" align="center"/>
        <a-table-column title="并发执行" data-index="async" align="center"/>
        <a-table-column title="任务分组" data-index="groupId" align="center" :sorter="true"/>
        <a-table-column title="备注" data-index="remark" align="center"/>
        <a-table-column title="最新执行结果" data-index="latestExecResult" align="center"/>
        <a-table-column title="下次执行时间" data-index="nextExecTime" align="center"/>
      </template>
      <template #AddItem="{formState}">
        <div style="width: 700px;margin-right: 80px">
        <a-form-item label="任务分组" name="groupId" required>
          <td-select-tree v-model:value="formState.groupId"
                          :field-names="{children:'children',parentKey:'pid', label:'name', key:'id', value: 'id' }"
                          :data-source="taskGroupList"/>
        </a-form-item>
        <a-form-item label="任务名称" name="name" required>
          <a-input v-model:value="formState.name"/>
        </a-form-item>
        <a-form-item label="执行规则" name="cron" required>
          <cron-input v-model:value="formState.cron" />
        </a-form-item>
        <a-form-item label="触发类型" name="triggerType" required>
          <td-select :showSearch="false" :data-source="searchValue=>enumOption('TaskJobTriggerType')"
                     v-model:value="formState.triggerType"/>
        </a-form-item>
        <a-form-item label="触发目标" name="target" required>
          <a-input v-model:value="formState.target"/>
        </a-form-item>
        <a-form-item label="并发执行" name="async" required>
          <td-select :showSearch="false" :data-source="searchValue=>enumOption('TaskJobAsync')"
                     v-model:value="formState.async"/>

        </a-form-item>
          <a-form-item label="任务状态" name="status" required>
            <a-radio-group v-model:value="formState.status" button-style="solid">
              <a-radio-button value="开启">开启</a-radio-button>
              <a-radio-button value="关闭">关闭</a-radio-button>
            </a-radio-group>
          </a-form-item>
        <a-form-item label="备注" name="remark">
          <a-textarea :auto-size="{ minRows: 2 }" v-model:value="formState.remark"/>
        </a-form-item>
        </div>
      </template>
      <template #EditItem="{formState}">
        <a-form-item label="任务ID" name="id">
          <a-input-number v-model:value="formState.id"/>
        </a-form-item>
        <a-form-item label="任务状态" name="status">
          <a-input v-model:value="formState.status"/>
        </a-form-item>
        <a-form-item label="任务名称" name="name">
          <a-input v-model:value="formState.name"/>
        </a-form-item>
        <a-form-item label="执行规则" name="cron">
          <a-input v-model:value="formState.cron"/>
        </a-form-item>
        <a-form-item label="创建时间" name="createTime">
          <a-input v-model:value="formState.createTime"/>
        </a-form-item>
        <a-form-item label="任务触发类型" name="triggerType">
          <a-input v-model:value="formState.triggerType"/>
        </a-form-item>
        <a-form-item label="目标" name="target">
          <a-input v-model:value="formState.target"/>
        </a-form-item>
        <a-form-item label="并发执行" name="async">
          <a-input v-model:value="formState.async"/>
        </a-form-item>
        <a-form-item label="任务分组" name="groupId">
          <a-input-number v-model:value="formState.groupId"/>
        </a-form-item>
        <a-form-item label="备注" name="remark">
          <a-input v-model:value="formState.remark"/>
        </a-form-item>
        <a-form-item label="最新执行结果" name="latestExecResult">
          <a-input v-model:value="formState.latestExecResult"/>
        </a-form-item>
        <a-form-item label="下次执行时间" name="nextExecTime">
          <a-input v-model:value="formState.nextExecTime"/>
        </a-form-item>
      </template>
    </td-table>
  </section>
</template>

<script>
import {taskJobPage, taskJobRemoveById, taskJobSave, taskJobGetById} from "@/api/TaskJob";
import {taskGroupList} from "@/api/TaskGroup";
import Cron from "@/components/Cron/Cron";
import CronInput from "@/components/Cron/CronInput";
import {enumOption} from "@/api/Common";

export default {
  name: "TaskJob",
  components: {CronInput, Cron},
  data() {
    return {
      enumOption,
      cronPopover:false,
      cron:'',
      taskGroupList,
      taskJobPage,
      taskJobRemoveById,
      taskJobSave,
      taskJobGetById
    }
  },
  created() {
  },
  methods: {
    changeCron(val){
      this.cron=val
    }
  }
}
</script>

<style scoped>

</style>