<template>
    <section>
        <td-table
                title=""
                ref="table"
                :data-source="parameter=>mallOrderPage(parameter)">
            <template #Search="{formState}">
                    <a-form-item label="订单号" name="id">
                            <a-input-number v-model:value="formState.id"/>
                    </a-form-item>
                    <a-form-item label="用户ID" name="userId">
                            <a-input-number v-model:value="formState.userId"/>
                    </a-form-item>
                    <a-form-item label="订单状态" name="state">
                            <a-input v-model:value="formState.state"/>
                    </a-form-item>
                    <a-form-item label="商品总价" name="goodsTotalPrice">
                            <a-input-number v-model:value="formState.goodsTotalPrice"/>
                    </a-form-item>
                    <a-form-item label="订单总价" name="orderTotalPrice">
                            <a-input-number v-model:value="formState.orderTotalPrice"/>
                    </a-form-item>
                    <a-form-item label="订单减免" name="orderBreaks">
                            <a-input-number v-model:value="formState.orderBreaks"/>
                    </a-form-item>
                    <a-form-item label="支付价格" name="payTotalPrice">
                            <a-input-number v-model:value="formState.payTotalPrice"/>
                    </a-form-item>
                    <a-form-item label="是否邮寄" name="mail">
                            <a-input v-model:value="formState.mail"/>
                    </a-form-item>
                    <a-form-item label="运费" name="freight">
                            <a-input-number v-model:value="formState.freight"/>
                    </a-form-item>
                    <a-form-item label="支付时间" name="payTime">
                            <a-input v-model:value="formState.payTime"/>
                    </a-form-item>
                    <a-form-item label="支付订单号" name="payOrderId">
                            <a-input v-model:value="formState.payOrderId"/>
                    </a-form-item>
                    <a-form-item label="支付方式" name="payType">
                            <a-input-number v-model:value="formState.payType"/>
                    </a-form-item>
                    <a-form-item label="发货时间" name="deliveryTime">
                            <a-input v-model:value="formState.deliveryTime"/>
                    </a-form-item>
                    <a-form-item label="收货人" name="receiver">
                            <a-input v-model:value="formState.receiver"/>
                    </a-form-item>
                    <a-form-item label="收货人电话" name="tel">
                            <a-input v-model:value="formState.tel"/>
                    </a-form-item>
                    <a-form-item label="收货地址" name="address">
                            <a-input v-model:value="formState.address"/>
                    </a-form-item>
                    <a-form-item label="创建时间" name="createTime">
                            <a-input v-model:value="formState.createTime"/>
                    </a-form-item>
                    <a-form-item label="操作人" name="operator">
                            <a-input-number v-model:value="formState.operator"/>
                    </a-form-item>
                    <a-form-item label="备注" name="remark">
                            <a-input v-model:value="formState.remark"/>
                    </a-form-item>
                    <a-form-item label="店铺ID" name="storeId">
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
                    <a-table-column title="支付时间" data-index="payTime" align="center"  />
                    <a-table-column title="支付订单号" data-index="payOrderId" align="center"  />
                    <a-table-column title="支付方式" data-index="payType" align="center" :sorter="true" />
                    <a-table-column title="发货时间" data-index="deliveryTime" align="center"  />
                    <a-table-column title="收货人" data-index="receiver" align="center"  />
                    <a-table-column title="收货人电话" data-index="tel" align="center"  />
                    <a-table-column title="收货地址" data-index="address" align="center"  />
                    <a-table-column title="创建时间" data-index="createTime" align="center"  />
                    <a-table-column title="操作人" data-index="operator" align="center" :sorter="true" />
                    <a-table-column title="备注" data-index="remark" align="center"  />
                    <a-table-column title="店铺ID" data-index="storeId" align="center" :sorter="true" />
            </template>
        </td-table>
    </section>
</template>

<script>
    import TdTable from "@/components/TdTable/TdTable";
    import {mallOrderPage} from "@/api/MallOrder";

    export default {
        name: "MallOrder",
        components: {TdTable},
        data() {
            return {
                mallOrderPage: mallOrderPage
            }
        },
        created() {
        },
        methods: {}
    }
</script>

<style scoped>

</style>