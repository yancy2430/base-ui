<template>
    <section>
        <td-table
                title=""
                ref="table"
                :get-item-by-id="parameter=>mallGoodsCateGetById(parameter)"
                :add-item-ok="parameter=>mallGoodsCateSave(parameter)"
                :edit-item-ok="parameter=>mallGoodsCateSave(parameter)"
                :delete-item-ok="parameter=>mallGoodsCateRemoveById(parameter)"
                :data-source="parameter=>mallGoodsCatePage(parameter)">
            <template #Search="{formState}">
                    <a-form-item label="分类ID" name="id">
                            <a-input-number v-model:value="formState.id"/>
                    </a-form-item>
                    <a-form-item label="分类上级" name="pid">
                            <a-input-number v-model:value="formState.pid"/>
                    </a-form-item>
                    <a-form-item label="分类名称" name="cateName">
                            <a-input v-model:value="formState.cateName"/>
                    </a-form-item>
                    <a-form-item label="所属店铺" name="storeId">
                            <a-input-number v-model:value="formState.storeId"/>
                    </a-form-item>
                    <a-form-item label="排序" name="sort">
                            <a-input-number v-model:value="formState.sort"/>
                    </a-form-item>
                    <a-form-item label="操作人" name="operator">
                            <a-input v-model:value="formState.operator"/>
                    </a-form-item>
                    <a-form-item label="创建时间" name="createTime">
                            <a-input v-model:value="formState.createTime"/>
                    </a-form-item>
                    <a-form-item label="是否删除" name="deleted">
                            <a-input v-model:value="formState.deleted"/>
                    </a-form-item>
            </template>
            <template #Columns>
                    <a-table-column title="分类ID" data-index="id" align="center" :sorter="true" />
                    <a-table-column title="分类上级" data-index="pid" align="center" :sorter="true" />
                    <a-table-column title="分类名称" data-index="cateName" align="center"  />
                    <a-table-column title="所属店铺" data-index="storeId" align="center" :sorter="true" />
                    <a-table-column title="排序" data-index="sort" align="center" :sorter="true" />
                    <a-table-column title="操作人" data-index="operator" align="center"  />
                    <a-table-column title="创建时间" data-index="createTime" align="center"  />
                    <a-table-column title="是否删除" data-index="deleted" align="center"  />
            </template>
            <template #AddItem="{formState}">
                    <a-form-item label="分类ID" name="id">
                            <a-input-number v-model:value="formState.id"/>
                    </a-form-item>
                    <a-form-item label="分类上级" name="pid">
                            <a-input-number v-model:value="formState.pid"/>
                    </a-form-item>
                    <a-form-item label="分类名称" name="cateName">
                            <a-input v-model:value="formState.cateName"/>
                    </a-form-item>
                    <a-form-item label="所属店铺" name="storeId">
                            <a-input-number v-model:value="formState.storeId"/>
                    </a-form-item>
                    <a-form-item label="排序" name="sort">
                            <a-input-number v-model:value="formState.sort"/>
                    </a-form-item>
                    <a-form-item label="操作人" name="operator">
                            <a-input v-model:value="formState.operator"/>
                    </a-form-item>
                    <a-form-item label="创建时间" name="createTime">
                            <a-input v-model:value="formState.createTime"/>
                    </a-form-item>
                    <a-form-item label="是否删除" name="deleted">
                            <a-input v-model:value="formState.deleted"/>
                    </a-form-item>
            </template>
            <template #EditItem="{formState}">
                    <a-form-item label="分类ID" name="id">
                            <a-input-number v-model:value="formState.id"/>
                    </a-form-item>
                    <a-form-item label="分类上级" name="pid">
                            <a-input-number v-model:value="formState.pid"/>
                    </a-form-item>
                    <a-form-item label="分类名称" name="cateName">
                            <a-input v-model:value="formState.cateName"/>
                    </a-form-item>
                    <a-form-item label="所属店铺" name="storeId">
                            <a-input-number v-model:value="formState.storeId"/>
                    </a-form-item>
                    <a-form-item label="排序" name="sort">
                            <a-input-number v-model:value="formState.sort"/>
                    </a-form-item>
                    <a-form-item label="操作人" name="operator">
                            <a-input v-model:value="formState.operator"/>
                    </a-form-item>
                    <a-form-item label="创建时间" name="createTime">
                            <a-input v-model:value="formState.createTime"/>
                    </a-form-item>
                    <a-form-item label="是否删除" name="deleted">
                            <a-input v-model:value="formState.deleted"/>
                    </a-form-item>
            </template>
        </td-table>
    </section>
</template>

<script>
    import {mallGoodsCatePage,mallGoodsCateRemoveById,mallGoodsCateSave,mallGoodsCateGetById} from "@/api/MallGoodsCate";

    export default {
        name: "MallGoodsCate",
        components: {},
        data() {
            return {
                mallGoodsCatePage,
                mallGoodsCateRemoveById,
                mallGoodsCateSave,
                mallGoodsCateGetById
            }
        },
        created() {
        },
        methods: {}
    }
</script>

<style scoped>

</style>