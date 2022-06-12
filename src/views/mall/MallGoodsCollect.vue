<template>
    <section>
        <td-table
                title=""
                ref="table"
                :data-source="parameter=>mallGoodsCollectPage(parameter)">
            <template #Search="{formState}">
                    <a-form-item label="收藏ID" name="id">
                            <a-input-number v-model:value="formState.id"/>
                    </a-form-item>
                    <a-form-item label="用户ID" name="userId">
                            <a-input-number v-model:value="formState.userId"/>
                    </a-form-item>
                    <a-form-item label="商品ID" name="goodsId">
                            <a-input-number v-model:value="formState.goodsId"/>
                    </a-form-item>
                    <a-form-item label="创建时间" name="createTime">
                            <a-input v-model:value="formState.createTime"/>
                    </a-form-item>
            </template>
            <template #Columns>
                    <a-table-column title="收藏ID" data-index="id" align="center" :sorter="true" />
                    <a-table-column title="用户ID" data-index="userId" align="center" :sorter="true" />
                    <a-table-column title="商品ID" data-index="goodsId" align="center" :sorter="true" />
                    <a-table-column title="创建时间" data-index="createTime" align="center"  />
            </template>
        </td-table>
    </section>
</template>

<script>
    import TdTable from "@/components/TdTable/TdTable";
    import {mallGoodsCollectPage} from "@/api/MallGoodsCollect";

    export default {
        name: "MallGoodsCollect",
        components: {TdTable},
        data() {
            return {
                mallGoodsCollectPage: mallGoodsCollectPage
            }
        },
        created() {
        },
        methods: {}
    }
</script>

<style scoped>

</style>