<template>
    <section>
        <td-table
                title="悬赏审核表"
                ref="table"
                :data-source="parameter=>rewardAuditPage(parameter)">
            <template #Search="{formState}">
                    <a-form-item label="ID" name="id">
                            <a-input-number v-model:value="formState.id"/>
                    </a-form-item>
                    <a-form-item label="悬赏ID" name="rewardId">
                            <a-input-number v-model:value="formState.rewardId"/>
                    </a-form-item>
                    <a-form-item label="审核人" name="auditor">
                            <a-input v-model:value="formState.auditor"/>
                    </a-form-item>
                    <a-form-item label="审核人ID" name="auditorId">
                            <a-input-number v-model:value="formState.auditorId"/>
                    </a-form-item>
                    <a-form-item label="审核时间" name="auditTime">
                            <a-input v-model:value="formState.auditTime"/>
                    </a-form-item>
                    <a-form-item label="审核意见" name="auditIdea">
                            <a-input v-model:value="formState.auditIdea"/>
                    </a-form-item>
                    <a-form-item label="状态 0未通过 1通过" name="state">
                            <a-input v-model:value="formState.state"/>
                    </a-form-item>
            </template>
            <template #Columns>
                    <a-table-column title="ID" data-index="id" align="center" :sorter="true" />
                    <a-table-column title="悬赏ID" data-index="rewardId" align="center" :sorter="true" />
                    <a-table-column title="审核人" data-index="auditor" align="center"  />
                    <a-table-column title="审核人ID" data-index="auditorId" align="center" :sorter="true" />
                    <a-table-column title="审核时间" data-index="auditTime" align="center"  />
                    <a-table-column title="审核意见" data-index="auditIdea" align="center"  />
                    <a-table-column title="状态 0未通过 1通过" data-index="state" align="center"  />
            </template>
        </td-table>
    </section>
</template>

<script>
    import TdTable from "@/components/TdTable/TdTable";
    import {rewardAuditPage} from "@/api/RewardAudit";

    export default {
        name: "RewardAudit",
        components: {TdTable},
        data() {
            return {
                rewardAuditPage: rewardAuditPage
            }
        },
        created() {
        },
        methods: {}
    }
</script>

<style scoped>

</style>