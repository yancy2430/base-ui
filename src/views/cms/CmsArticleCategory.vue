<template>
    <section>
        <td-table
                title="文章分类"
                ref="table"
                :data-source="parameter=>cmsArticleCategoryPage(parameter)">
            <template #Search="{formState}">
                    <a-form-item label="类别名称" name="name">
                            <a-input-number v-model:value="formState.name"/>
                    </a-form-item>
            </template>
            <template #Columns>
                    <a-table-column title="类别ID" data-index="id" align="center" :sorter="true" />
                    <a-table-column title="所属上级" data-index="pid" align="center" :sorter="true" />
                    <a-table-column title="类别名称" data-index="name" align="center" :sorter="true" />
            </template>
        </td-table>
    </section>
</template>

<script>
    import {cmsArticleCategoryPage} from "@/api/CmsArticleCategory";

    export default {
        name: "CmsArticleCategory",
        components: {},
        data() {
            return {
                cmsArticleCategoryPage: cmsArticleCategoryPage
            }
        },
        created() {
        },
        methods: {}
    }
</script>

<style scoped>

</style>