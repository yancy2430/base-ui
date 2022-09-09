<template>
    <section>
        <td-table
                title=""
                ref="table"
                :get-item-by-id="parameter=>mallPayWayGetById(parameter)"
                :add-item-ok="parameter=>mallPayWaySave(parameter)"
                :edit-item-ok="parameter=>mallPayWaySave(parameter)"
                :delete-item-ok="parameter=>mallPayWayRemoveById(parameter)"
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
            <template #AddItem="{formState}">
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
            <template #EditItem="{formState}">
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
        </td-table>
    </section>
</template>

<script>
    import {mallPayWayPage,mallPayWayRemoveById,mallPayWaySave,mallPayWayGetById} from "@/api/MallPayWay";

    export default {
        name: "MallPayWay",
        components: {},
        data() {
            return {
                mallPayWayPage,
                mallPayWayRemoveById,
                mallPayWaySave,
                mallPayWayGetById
            }
        },
        created() {
        },
        methods: {}
    }
</script>

<style scoped>

</style>