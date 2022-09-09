<template>
    <section>
        <td-table
                title=""
                ref="table"
                :get-item-by-id="parameter=>mallPayLogGetById(parameter)"
                :add-item-ok="parameter=>mallPayLogSave(parameter)"
                :edit-item-ok="parameter=>mallPayLogSave(parameter)"
                :delete-item-ok="parameter=>mallPayLogRemoveById(parameter)"
                :data-source="parameter=>mallPayLogPage(parameter)">
            <template #Search="{formState}">
                    <a-form-item label="" name="id">
                            <a-input-number v-model:value="formState.id"/>
                    </a-form-item>
                    <a-form-item label="订单号" name="orderId">
                            <a-input-number v-model:value="formState.orderId"/>
                    </a-form-item>
                    <a-form-item label="支付参数" name="payParam">
                            <a-input v-model:value="formState.payParam"/>
                    </a-form-item>
                    <a-form-item label="支付结果" name="payResult">
                            <a-input v-model:value="formState.payResult"/>
                    </a-form-item>
                    <a-form-item label="发起时间" name="requestTime">
                            <a-input v-model:value="formState.requestTime"/>
                    </a-form-item>
                    <a-form-item label="通知时间" name="notifyTime">
                            <a-input v-model:value="formState.notifyTime"/>
                    </a-form-item>
            </template>
            <template #Columns>
                    <a-table-column title="" data-index="id" align="center" :sorter="true" />
                    <a-table-column title="订单号" data-index="orderId" align="center" :sorter="true" />
                    <a-table-column title="支付参数" data-index="payParam" align="center"  />
                    <a-table-column title="支付结果" data-index="payResult" align="center"  />
                    <a-table-column title="发起时间" data-index="requestTime" align="center"  />
                    <a-table-column title="通知时间" data-index="notifyTime" align="center"  />
            </template>
            <template #AddItem="{formState}">
                    <a-form-item label="" name="id">
                            <a-input-number v-model:value="formState.id"/>
                    </a-form-item>
                    <a-form-item label="订单号" name="orderId">
                            <a-input-number v-model:value="formState.orderId"/>
                    </a-form-item>
                    <a-form-item label="支付参数" name="payParam">
                            <a-input v-model:value="formState.payParam"/>
                    </a-form-item>
                    <a-form-item label="支付结果" name="payResult">
                            <a-input v-model:value="formState.payResult"/>
                    </a-form-item>
                    <a-form-item label="发起时间" name="requestTime">
                            <a-input v-model:value="formState.requestTime"/>
                    </a-form-item>
                    <a-form-item label="通知时间" name="notifyTime">
                            <a-input v-model:value="formState.notifyTime"/>
                    </a-form-item>
            </template>
            <template #EditItem="{formState}">
                    <a-form-item label="" name="id">
                            <a-input-number v-model:value="formState.id"/>
                    </a-form-item>
                    <a-form-item label="订单号" name="orderId">
                            <a-input-number v-model:value="formState.orderId"/>
                    </a-form-item>
                    <a-form-item label="支付参数" name="payParam">
                            <a-input v-model:value="formState.payParam"/>
                    </a-form-item>
                    <a-form-item label="支付结果" name="payResult">
                            <a-input v-model:value="formState.payResult"/>
                    </a-form-item>
                    <a-form-item label="发起时间" name="requestTime">
                            <a-input v-model:value="formState.requestTime"/>
                    </a-form-item>
                    <a-form-item label="通知时间" name="notifyTime">
                            <a-input v-model:value="formState.notifyTime"/>
                    </a-form-item>
            </template>
        </td-table>
    </section>
</template>

<script>
    import {mallPayLogPage,mallPayLogRemoveById,mallPayLogSave,mallPayLogGetById} from "@/api/MallPayLog";

    export default {
        name: "MallPayLog",
        components: {},
        data() {
            return {
                mallPayLogPage,
                mallPayLogRemoveById,
                mallPayLogSave,
                mallPayLogGetById
            }
        },
        created() {
        },
        methods: {}
    }
</script>

<style scoped>

</style>