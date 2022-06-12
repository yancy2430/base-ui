<template>
    <section>
        <td-table
                title=""
                ref="table"
                :data-source="parameter=>mallPayWayPage(parameter)">
            <template #Search="{formState}">
                    <a-form-item label="" name="id">
                            <a-input-number v-model:value="formState.id"/>
                    </a-form-item>
                    <a-form-item label="支付名称" name="payName">
                            <a-input v-model:value="formState.payName"/>
                    </a-form-item>
                    <a-form-item label="配置信息" name="payConfig">
                            <a-input v-model:value="formState.payConfig"/>
                    </a-form-item>
            </template>
            <template #Columns>
                    <a-table-column title="" data-index="id" align="center" :sorter="true" />
                    <a-table-column title="支付名称" data-index="payName" align="center"  />
                    <a-table-column title="配置信息" data-index="payConfig" align="center"  />
            </template>
        </td-table>
    </section>
</template>

<script>
    import TdTable from "@/components/TdTable/TdTable";
    import {mallPayWayPage} from "@/api/MallPayWay";

    export default {
        name: "MallPayWay",
        components: {TdTable},
        data() {
            return {
                mallPayWayPage: mallPayWayPage
            }
        },
        created() {
        },
        methods: {}
    }
</script>

<style scoped>

</style>