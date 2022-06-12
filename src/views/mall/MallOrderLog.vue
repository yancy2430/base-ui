<template>
    <section>
        <td-table
                title=""
                ref="table"
                :data-source="parameter=>mallOrderLogPage(parameter)">
            <template #Search="{formState}">
                    <a-form-item label="" name="id">
                            <a-input-number v-model:value="formState.id"/>
                    </a-form-item>
                    <a-form-item label="操作时间" name="operatTime">
                            <a-input v-model:value="formState.operatTime"/>
                    </a-form-item>
                    <a-form-item label="操作人" name="operator">
                            <a-input v-model:value="formState.operator"/>
                    </a-form-item>
                    <a-form-item label="操作内容" name="msg">
                            <a-input v-model:value="formState.msg"/>
                    </a-form-item>
                    <a-form-item label="操作人ID" name="operatorId">
                            <a-input-number v-model:value="formState.operatorId"/>
                    </a-form-item>
                    <a-form-item label="订单ID" name="orderId">
                            <a-input-number v-model:value="formState.orderId"/>
                    </a-form-item>
            </template>
            <template #Columns>
                    <a-table-column title="" data-index="id" align="center" :sorter="true" />
                    <a-table-column title="操作时间" data-index="operatTime" align="center"  />
                    <a-table-column title="操作人" data-index="operator" align="center"  />
                    <a-table-column title="操作内容" data-index="msg" align="center"  />
                    <a-table-column title="操作人ID" data-index="operatorId" align="center" :sorter="true" />
                    <a-table-column title="订单ID" data-index="orderId" align="center" :sorter="true" />
            </template>
        </td-table>
    </section>
</template>

<script>
    import TdTable from "@/components/TdTable/TdTable";
    import {mallOrderLogPage} from "@/api/MallOrderLog";

    export default {
        name: "MallOrderLog",
        components: {TdTable},
        data() {
            return {
                mallOrderLogPage: mallOrderLogPage
            }
        },
        created() {
        },
        methods: {}
    }
</script>

<style scoped>

</style>