<template>
    <section>
        <td-table
                ref="table"
                defaultExpandAllRows
                childrenColumnName
                :data-process="process"
                :get-item-by-id="parameter=>mallStoreCateGetById(parameter)"
                :add-item-ok="parameter=>mallStoreCateSave(parameter)"
                :edit-item-ok="parameter=>mallStoreCateSave(parameter)"
                :delete-item-ok="parameter=>mallStoreCateRemoveById(parameter)"
                :data-source="parameter=>mallStoreCatePage(parameter)">
            <template #Search="{formState}">
                    <a-form-item label="分类名称" name="cateName">
                            <a-input v-model:value="formState.cateName"/>
                    </a-form-item>
            </template>
            <template #Columns>
                    <a-table-column title="分类ID" data-index="id" align="center" :sorter="true" />
                    <a-table-column title="分类名称" data-index="cateName" align="center"  />
                    <a-table-column title="创建时间" data-index="createTime" align="center"  />
            </template>
            <template #AddItem="{formState}">
                    <a-form-item label="分类ID" name="id">
                            <a-input-number v-model:value="formState.id"/>
                    </a-form-item>
                    <a-form-item label="上级ID" name="pid">
                            <a-input-number v-model:value="formState.pid"/>
                    </a-form-item>
                    <a-form-item label="分类名称" name="cateName">
                            <a-input v-model:value="formState.cateName"/>
                    </a-form-item>
                    <a-form-item label="排序" name="sort">
                            <a-input-number v-model:value="formState.sort"/>
                    </a-form-item>
                    <a-form-item label="创建时间" name="createTime">
                            <a-input v-model:value="formState.createTime"/>
                    </a-form-item>
            </template>
            <template #EditItem="{formState}">
                    <a-form-item label="分类ID" name="id">
                            <a-input-number v-model:value="formState.id"/>
                    </a-form-item>
                    <a-form-item label="上级ID" name="pid">
                            <a-input-number v-model:value="formState.pid"/>
                    </a-form-item>
                    <a-form-item label="分类名称" name="cateName">
                            <a-input v-model:value="formState.cateName"/>
                    </a-form-item>
                    <a-form-item label="排序" name="sort">
                            <a-input-number v-model:value="formState.sort"/>
                    </a-form-item>
                    <a-form-item label="创建时间" name="createTime">
                            <a-input v-model:value="formState.createTime"/>
                    </a-form-item>
            </template>
        </td-table>
    </section>
</template>

<script>
    import {mallStoreCatePage,mallStoreCateRemoveById,mallStoreCateSave,mallStoreCateGetById} from "@/api/MallStoreCate";
    import {toTree} from "@/utils/util";

    export default {
        name: "MallStoreCate",
        components: {},
        data() {
            return {
                mallStoreCatePage,
                mallStoreCateRemoveById,
                mallStoreCateSave,
                mallStoreCateGetById
            }
        },
        created() {
        },
        methods: {
          process(data){
            data.records=toTree(data.records,"id","pid","name","children")
            return data;
          }
        }
    }
</script>

<style scoped>

</style>