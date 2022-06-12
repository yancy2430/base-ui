<template>
    <section>
        <td-table
                title=""
                ref="table"
                :data-source="parameter=>mallGoodsSkuPage(parameter)">
            <template #Search="{formState}">
                    <a-form-item label="库存id" name="id">
                            <a-input-number v-model:value="formState.id"/>
                    </a-form-item>
                    <a-form-item label="商品ID" name="goodsId">
                            <a-input-number v-model:value="formState.goodsId"/>
                    </a-form-item>
                    <a-form-item label="价格单位分" name="price">
                            <a-input-number v-model:value="formState.price"/>
                    </a-form-item>
                    <a-form-item label="编码" name="code">
                            <a-input v-model:value="formState.code"/>
                    </a-form-item>
                    <a-form-item label="库存" name="stockNum">
                            <a-input-number v-model:value="formState.stockNum"/>
                    </a-form-item>
            </template>
            <template #Columns>
                    <a-table-column title="库存id" data-index="id" align="center" :sorter="true" />
                    <a-table-column title="商品ID" data-index="goodsId" align="center" :sorter="true" />
                    <a-table-column title="价格单位分" data-index="price" align="center" :sorter="true" />
                    <a-table-column title="编码" data-index="code" align="center"  />
                    <a-table-column title="库存" data-index="stockNum" align="center" :sorter="true" />
            </template>
        </td-table>
    </section>
</template>

<script>
    import TdTable from "@/components/TdTable/TdTable";
    import {mallGoodsSkuPage} from "@/api/MallGoodsSku";

    export default {
        name: "MallGoodsSku",
        components: {TdTable},
        data() {
            return {
                mallGoodsSkuPage: mallGoodsSkuPage
            }
        },
        created() {
        },
        methods: {}
    }
</script>

<style scoped>

</style>