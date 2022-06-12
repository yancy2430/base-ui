<template>
    <section>
        <td-table
                title=""
                ref="table"
                :data-source="parameter=>mallGoodsDetailsPage(parameter)">
            <template #Search="{formState}">
                    <a-form-item label="商品ID" name="id">
                            <a-input-number v-model:value="formState.id"/>
                    </a-form-item>
                    <a-form-item label="商品头图" name="images">
                            <a-input v-model:value="formState.images"/>
                    </a-form-item>
                    <a-form-item label="商品详情" name="goodsContent">
                            <a-input v-model:value="formState.goodsContent"/>
                    </a-form-item>
                    <a-form-item label="价格说明" name="priceDesc">
                            <a-input v-model:value="formState.priceDesc"/>
                    </a-form-item>
                    <a-form-item label="发货城市" name="deliveryCity">
                            <a-input v-model:value="formState.deliveryCity"/>
                    </a-form-item>
                    <a-form-item label="保障条款" name="security">
                            <a-input v-model:value="formState.security"/>
                    </a-form-item>
            </template>
            <template #Columns>
                    <a-table-column title="商品ID" data-index="id" align="center" :sorter="true" />
                    <a-table-column title="商品头图" data-index="images" align="center"  />
                    <a-table-column title="商品详情" data-index="goodsContent" align="center"  />
                    <a-table-column title="价格说明" data-index="priceDesc" align="center"  />
                    <a-table-column title="发货城市" data-index="deliveryCity" align="center"  />
                    <a-table-column title="保障条款" data-index="security" align="center"  />
            </template>
        </td-table>
    </section>
</template>

<script>
    import TdTable from "@/components/TdTable/TdTable";
    import {mallGoodsDetailsPage} from "@/api/MallGoodsDetails";

    export default {
        name: "MallGoodsDetails",
        components: {TdTable},
        data() {
            return {
                mallGoodsDetailsPage: mallGoodsDetailsPage
            }
        },
        created() {
        },
        methods: {}
    }
</script>

<style scoped>

</style>