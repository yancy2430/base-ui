<template>
    <section>
        <td-table
                title=""
                ref="table"
                :get-item-by-id="parameter=>taskLogGetById(parameter)"
                :add-item-ok="parameter=>taskLogSave(parameter)"
                :edit-item-ok="parameter=>taskLogSave(parameter)"
                :delete-item-ok="parameter=>taskLogRemoveById(parameter)"
                :data-source="parameter=>taskLogPage(parameter)">
            <template #Search="{formState}">
                    <a-form-item label="日志ID" name="id">
                            <a-input-number v-model:value="formState.id"/>
                    </a-form-item>
                    <a-form-item label="任务ID" name="jobId">
                            <a-input-number v-model:value="formState.jobId"/>
                    </a-form-item>
                    <a-form-item label="执行结果" name="result">
                            <a-input v-model:value="formState.result"/>
                    </a-form-item>
                    <a-form-item label="执行时间" name="execTime">
                            <a-input v-model:value="formState.execTime"/>
                    </a-form-item>
                    <a-form-item label="执行耗时" name="elapsedTime">
                            <a-input-number v-model:value="formState.elapsedTime"/>
                    </a-form-item>
            </template>
            <template #Columns>
                    <a-table-column title="日志ID" data-index="id" align="center" :sorter="true" />
                    <a-table-column title="任务ID" data-index="jobId" align="center" :sorter="true" />
                    <a-table-column title="执行结果" data-index="result" align="center"  />
                    <a-table-column title="执行时间" data-index="execTime" align="center"  />
                    <a-table-column title="执行耗时" data-index="elapsedTime" align="center" :sorter="true" />
            </template>
            <template #AddItem="{formState}">
                    <a-form-item label="日志ID" name="id">
                            <a-input-number v-model:value="formState.id"/>
                    </a-form-item>
                    <a-form-item label="任务ID" name="jobId">
                            <a-input-number v-model:value="formState.jobId"/>
                    </a-form-item>
                    <a-form-item label="执行结果" name="result">
                            <a-input v-model:value="formState.result"/>
                    </a-form-item>
                    <a-form-item label="执行时间" name="execTime">
                            <a-input v-model:value="formState.execTime"/>
                    </a-form-item>
                    <a-form-item label="执行耗时" name="elapsedTime">
                            <a-input-number v-model:value="formState.elapsedTime"/>
                    </a-form-item>
            </template>
            <template #EditItem="{formState}">
                    <a-form-item label="日志ID" name="id">
                            <a-input-number v-model:value="formState.id"/>
                    </a-form-item>
                    <a-form-item label="任务ID" name="jobId">
                            <a-input-number v-model:value="formState.jobId"/>
                    </a-form-item>
                    <a-form-item label="执行结果" name="result">
                            <a-input v-model:value="formState.result"/>
                    </a-form-item>
                    <a-form-item label="执行时间" name="execTime">
                            <a-input v-model:value="formState.execTime"/>
                    </a-form-item>
                    <a-form-item label="执行耗时" name="elapsedTime">
                            <a-input-number v-model:value="formState.elapsedTime"/>
                    </a-form-item>
            </template>
        </td-table>
    </section>
</template>

<script>
    import {taskLogPage,taskLogRemoveById,taskLogSave,taskLogGetById} from "@/api/TaskLog";

    export default {
        name: "TaskLog",
        components: {},
        data() {
            return {
                taskLogPage,
                taskLogRemoveById,
                taskLogSave,
                taskLogGetById
            }
        },
        created() {
        },
        methods: {}
    }
</script>

<style scoped>

</style>