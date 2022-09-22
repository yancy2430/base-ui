<template>
    <section>
        <td-table
                title="订单总表"
                ref="table"
                :data-source="parameter=>mallOrderPage(parameter)">
            <template #Search="{formState}">
                    <a-form-item label="订单号" name="id">
                            <a-input-number v-model:value="formState.id"/>
                    </a-form-item>
                    <a-form-item label="订单状态" name="state">
                            <a-input v-model:value="formState.state"/>
                    </a-form-item>
                    <a-form-item label="创建时间" name="createTime">
                            <a-input v-model:value="formState.createTime"/>
                    </a-form-item>
                    <a-form-item label="所属店铺" name="storeId">
                            <a-input-number v-model:value="formState.storeId"/>
                    </a-form-item>
            </template>
            <template #Columns>
                    <a-table-column title="订单号" data-index="id" align="center" :sorter="true" />
                    <a-table-column title="用户ID" data-index="userId" align="center" :sorter="true" />
                    <a-table-column title="订单状态" data-index="state" align="center"  />
                    <a-table-column title="商品总价" data-index="goodsTotalPrice" align="center" :sorter="true" />
                    <a-table-column title="订单总价" data-index="orderTotalPrice" align="center" :sorter="true" />
                    <a-table-column title="订单减免" data-index="orderBreaks" align="center" :sorter="true" />
                    <a-table-column title="支付价格" data-index="payTotalPrice" align="center" :sorter="true" />
                    <a-table-column title="是否邮寄" data-index="mail" align="center"  />
                    <a-table-column title="运费" data-index="freight" align="center" :sorter="true" />
                    <a-table-column title="支付方式" data-index="payType" align="center" :sorter="true" />
                    <a-table-column title="发货时间" data-index="deliveryTime" align="center"  />
                    <a-table-column title="创建时间" data-index="createTime" align="center"  />
                    <a-table-column title="备注" data-index="remark" align="center"  />
                    <a-table-column title="店铺ID" data-index="storeId" align="center" :sorter="true" />
            </template>
        </td-table>
    </section>
</template>

<script>
    import {mallOrderPage,mallOrderRemoveById,mallOrderSave,mallOrderGetById} from "@/api/MallOrder";

    export default {
        name: "MallOrder",
        components: {},
        data() {
            return {
                mallOrderPage,
                mallOrderRemoveById,
                mallOrderSave,
                mallOrderGetById
            }
        },
        created() {
        },
        methods: {}
    }
</script>

<style scoped>

</style>