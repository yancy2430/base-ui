<template>
    <section>
        <td-table
                title=""
                ref="table"
                :data-source="parameter=>mallOrderSnapshotPage(parameter)">
            <template #Search="{formState}">
                    <a-form-item label="" name="id">
                            <a-input-number v-model:value="formState.id"/>
                    </a-form-item>
                    <a-form-item label="订单ID" name="orderId">
                            <a-input-number v-model:value="formState.orderId"/>
                    </a-form-item>
                    <a-form-item label="商品快照" name="goodsInfo">
                            <a-input v-model:value="formState.goodsInfo"/>
                    </a-form-item>
                    <a-form-item label="店铺快照" name="storeInfo">
                            <a-input v-model:value="formState.storeInfo"/>
                    </a-form-item>
                    <a-form-item label="收货人快照" name="receiverInfo">
                            <a-input v-model:value="formState.receiverInfo"/>
                    </a-form-item>
            </template>
            <template #Columns>
                    <a-table-column title="" data-index="id" align="center" :sorter="true" />
                    <a-table-column title="订单ID" data-index="orderId" align="center" :sorter="true" />
                    <a-table-column title="商品快照" data-index="goodsInfo" align="center"  />
                    <a-table-column title="店铺快照" data-index="storeInfo" align="center"  />
                    <a-table-column title="收货人快照" data-index="receiverInfo" align="center"  />
            </template>
        </td-table>
    </section>
</template>

<script>
    import TdTable from "@/components/TdTable/TdTable";
    import {mallOrderSnapshotPage} from "@/api/MallOrderSnapshot";

    export default {
        name: "MallOrderSnapshot",
        components: {TdTable},
        data() {
            return {
                mallOrderSnapshotPage: mallOrderSnapshotPage
            }
        },
        created() {
        },
        methods: {}
    }
</script>

<style scoped>

</style>