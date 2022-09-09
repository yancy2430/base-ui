<template>
    <section>
        <td-table
                title=""
                ref="table"
                :get-item-by-id="parameter=>mallGoodsCollectGetById(parameter)"
                :add-item-ok="parameter=>mallGoodsCollectSave(parameter)"
                :edit-item-ok="parameter=>mallGoodsCollectSave(parameter)"
                :delete-item-ok="parameter=>mallGoodsCollectRemoveById(parameter)"
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
            <template #AddItem="{formState}">
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
            <template #EditItem="{formState}">
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
        </td-table>
    </section>
</template>

<script>
    import {mallGoodsCollectPage,mallGoodsCollectRemoveById,mallGoodsCollectSave,mallGoodsCollectGetById} from "@/api/MallGoodsCollect";

    export default {
        name: "MallGoodsCollect",
        components: {},
        data() {
            return {
                mallGoodsCollectPage,
                mallGoodsCollectRemoveById,
                mallGoodsCollectSave,
                mallGoodsCollectGetById
            }
        },
        created() {
        },
        methods: {}
    }
</script>

<style scoped>

</style>