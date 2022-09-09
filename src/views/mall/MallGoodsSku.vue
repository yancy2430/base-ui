<template>
    <section>
        <td-table
                title=""
                ref="table"
                :get-item-by-id="parameter=>mallGoodsSkuGetById(parameter)"
                :add-item-ok="parameter=>mallGoodsSkuSave(parameter)"
                :edit-item-ok="parameter=>mallGoodsSkuSave(parameter)"
                :delete-item-ok="parameter=>mallGoodsSkuRemoveById(parameter)"
                :data-source="parameter=>mallGoodsSkuPage(parameter)">
            <template #Search="{formState}">
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
                    <a-form-item label="原价" name="originalPrice">
                            <a-input-number v-model:value="formState.originalPrice"/>
                    </a-form-item>
            </template>
            <template #Columns>
                    <a-table-column title="商品ID" data-index="goodsId" align="center" :sorter="true" />
                    <a-table-column title="价格单位分" data-index="price" align="center" :sorter="true" />
                    <a-table-column title="编码" data-index="code" align="center"  />
                    <a-table-column title="库存" data-index="stockNum" align="center" :sorter="true" />
                    <a-table-column title="原价" data-index="originalPrice" align="center" :sorter="true" />
            </template>
            <template #AddItem="{formState}">
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
                    <a-form-item label="原价" name="originalPrice">
                            <a-input-number v-model:value="formState.originalPrice"/>
                    </a-form-item>
            </template>
            <template #EditItem="{formState}">
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
                    <a-form-item label="原价" name="originalPrice">
                            <a-input-number v-model:value="formState.originalPrice"/>
                    </a-form-item>
            </template>
        </td-table>
    </section>
</template>

<script>
    import {mallGoodsSkuPage,mallGoodsSkuRemoveById,mallGoodsSkuSave,mallGoodsSkuGetById} from "@/api/MallGoodsSku";

    export default {
        name: "MallGoodsSku",
        components: {},
        data() {
            return {
                mallGoodsSkuPage,
                mallGoodsSkuRemoveById,
                mallGoodsSkuSave,
                mallGoodsSkuGetById
            }
        },
        created() {
        },
        methods: {}
    }
</script>

<style scoped>

</style>