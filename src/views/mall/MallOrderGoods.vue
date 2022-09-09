<template>
    <section>
        <td-table
                title=""
                ref="table"
                :get-item-by-id="parameter=>mallOrderGoodsGetById(parameter)"
                :add-item-ok="parameter=>mallOrderGoodsSave(parameter)"
                :edit-item-ok="parameter=>mallOrderGoodsSave(parameter)"
                :delete-item-ok="parameter=>mallOrderGoodsRemoveById(parameter)"
                :data-source="parameter=>mallOrderGoodsPage(parameter)">
            <template #Search="{formState}">
                    <a-form-item label="" name="id">
                            <a-input-number v-model:value="formState.id"/>
                    </a-form-item>
                    <a-form-item label="所属订单" name="orderId">
                            <a-input-number v-model:value="formState.orderId"/>
                    </a-form-item>
                    <a-form-item label="产品名称" name="goodsName">
                            <a-input v-model:value="formState.goodsName"/>
                    </a-form-item>
                    <a-form-item label="产品单价" name="goodsPrice">
                            <a-input-number v-model:value="formState.goodsPrice"/>
                    </a-form-item>
                    <a-form-item label="产品数量" name="goodsCount">
                            <a-input-number v-model:value="formState.goodsCount"/>
                    </a-form-item>
                    <a-form-item label="规格ID" name="goodsSku">
                            <a-input-number v-model:value="formState.goodsSku"/>
                    </a-form-item>
                    <a-form-item label="规格信息" name="skuInfo">
                            <a-input v-model:value="formState.skuInfo"/>
                    </a-form-item>
            </template>
            <template #Columns>
                    <a-table-column title="" data-index="id" align="center" :sorter="true" />
                    <a-table-column title="所属订单" data-index="orderId" align="center" :sorter="true" />
                    <a-table-column title="产品名称" data-index="goodsName" align="center"  />
                    <a-table-column title="产品单价" data-index="goodsPrice" align="center" :sorter="true" />
                    <a-table-column title="产品数量" data-index="goodsCount" align="center" :sorter="true" />
                    <a-table-column title="规格ID" data-index="goodsSku" align="center" :sorter="true" />
                    <a-table-column title="规格信息" data-index="skuInfo" align="center"  />
            </template>
            <template #AddItem="{formState}">
                    <a-form-item label="" name="id">
                            <a-input-number v-model:value="formState.id"/>
                    </a-form-item>
                    <a-form-item label="所属订单" name="orderId">
                            <a-input-number v-model:value="formState.orderId"/>
                    </a-form-item>
                    <a-form-item label="产品名称" name="goodsName">
                            <a-input v-model:value="formState.goodsName"/>
                    </a-form-item>
                    <a-form-item label="产品单价" name="goodsPrice">
                            <a-input-number v-model:value="formState.goodsPrice"/>
                    </a-form-item>
                    <a-form-item label="产品数量" name="goodsCount">
                            <a-input-number v-model:value="formState.goodsCount"/>
                    </a-form-item>
                    <a-form-item label="规格ID" name="goodsSku">
                            <a-input-number v-model:value="formState.goodsSku"/>
                    </a-form-item>
                    <a-form-item label="规格信息" name="skuInfo">
                            <a-input v-model:value="formState.skuInfo"/>
                    </a-form-item>
            </template>
            <template #EditItem="{formState}">
                    <a-form-item label="" name="id">
                            <a-input-number v-model:value="formState.id"/>
                    </a-form-item>
                    <a-form-item label="所属订单" name="orderId">
                            <a-input-number v-model:value="formState.orderId"/>
                    </a-form-item>
                    <a-form-item label="产品名称" name="goodsName">
                            <a-input v-model:value="formState.goodsName"/>
                    </a-form-item>
                    <a-form-item label="产品单价" name="goodsPrice">
                            <a-input-number v-model:value="formState.goodsPrice"/>
                    </a-form-item>
                    <a-form-item label="产品数量" name="goodsCount">
                            <a-input-number v-model:value="formState.goodsCount"/>
                    </a-form-item>
                    <a-form-item label="规格ID" name="goodsSku">
                            <a-input-number v-model:value="formState.goodsSku"/>
                    </a-form-item>
                    <a-form-item label="规格信息" name="skuInfo">
                            <a-input v-model:value="formState.skuInfo"/>
                    </a-form-item>
            </template>
        </td-table>
    </section>
</template>

<script>
    import {mallOrderGoodsPage,mallOrderGoodsRemoveById,mallOrderGoodsSave,mallOrderGoodsGetById} from "@/api/MallOrderGoods";

    export default {
        name: "MallOrderGoods",
        components: {},
        data() {
            return {
                mallOrderGoodsPage,
                mallOrderGoodsRemoveById,
                mallOrderGoodsSave,
                mallOrderGoodsGetById
            }
        },
        created() {
        },
        methods: {}
    }
</script>

<style scoped>

</style>