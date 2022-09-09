<template>
    <section>
        <td-table
                title=""
                ref="table"
                defaultExpandAllRows
                childrenColumnName
                :data-process="process"
                :indentSize="30"
                :get-item-by-id="parameter=>cmsArticleCategoryGetById({id:parameter.id})"
                :add-item-ok="parameter=>cmsArticleCategorySave(parameter)"
                :edit-item-ok="parameter=>cmsArticleCategorySave(parameter)"
                :delete-item-ok="parameter=>cmsArticleCategoryRemoveById(parameter)"
                :data-source="parameter=>cmsArticleCategoryPage(parameter)">
            <template #Search="{formState}">
                    <a-form-item label="类别ID" name="id">
                            <a-input-number v-model:value="formState.id"/>
                    </a-form-item>
                    <a-form-item label="类别名称" name="name">
                            <a-input v-model:value="formState.name"/>
                    </a-form-item>
            </template>
            <template #Columns>
                    <a-table-column title="类别ID" data-index="id" align="center" :sorter="true" />
                    <a-table-column title="类别名称" data-index="name" align="center"  />
            </template>
            <template #AddItem="{formState}">
                    <a-form-item label="所属上级" name="pid">
                      <td-select-tree :field-names="{children:'children',parentKey:'pid', label:'name', key:'id', value: 'id' }" :data-source="cmsArticleCategoryList" v-model:value="formState.pid"/>
                    </a-form-item>
                    <a-form-item label="类别名称" name="name">
                            <a-input v-model:value="formState.name"/>
                    </a-form-item>
            </template>
            <template #EditItem="{formState}">
                    <a-form-item label="所属上级" name="pid">
                      <td-select-tree :field-names="{children:'children',parentKey:'pid', label:'name', key:'id', value: 'id' }" :data-source="cmsArticleCategoryList" v-model:value="formState.pid"/>
                    </a-form-item>
                    <a-form-item label="类别名称" name="name">
                            <a-input v-model:value="formState.name"/>
                    </a-form-item>
            </template>
        </td-table>
    </section>
</template>

<script>
    import {cmsArticleCategoryPage,cmsArticleCategoryRemoveById,cmsArticleCategorySave,cmsArticleCategoryGetById,cmsArticleCategoryList} from "@/api/CmsArticleCategory";
    import {toTree} from "@/utils/util";
    export default {
        name: "CmsArticleCategory",
        components: {},
        data() {
            return {
                cmsArticleCategoryList,
                cmsArticleCategoryPage,
                cmsArticleCategoryRemoveById,
                cmsArticleCategorySave,
                cmsArticleCategoryGetById
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