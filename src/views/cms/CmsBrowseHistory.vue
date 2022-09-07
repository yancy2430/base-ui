<template>
    <section>
        <td-table
                title=""
                ref="table"
                :data-source="parameter=>cmsBrowseHistoryPage(parameter)">
            <template #Search="{formState}">
                    <a-form-item label="自增ID" name="id">
                            <a-input-number v-model:value="formState.id"/>
                    </a-form-item>
                    <a-form-item label="文章ID" name="articleId">
                            <a-input-number v-model:value="formState.articleId"/>
                    </a-form-item>
                    <a-form-item label="用户ID" name="userId">
                            <a-input-number v-model:value="formState.userId"/>
                    </a-form-item>
                    <a-form-item label="浏览时间" name="createTime">
                            <a-input v-model:value="formState.createTime"/>
                    </a-form-item>
                    <a-form-item label="用户名" name="userName">
                            <a-input-number v-model:value="formState.userName"/>
                    </a-form-item>
                    <a-form-item label="标题" name="title">
                            <a-input v-model:value="formState.title"/>
                    </a-form-item>
            </template>
            <template #Columns>
                    <a-table-column title="自增ID" data-index="id" align="center" :sorter="true" />
                    <a-table-column title="文章ID" data-index="articleId" align="center" :sorter="true" />
                    <a-table-column title="用户ID" data-index="userId" align="center" :sorter="true" />
                    <a-table-column title="浏览时间" data-index="createTime" align="center"  />
                    <a-table-column title="用户名" data-index="userName" align="center" :sorter="true" />
                    <a-table-column title="标题" data-index="title" align="center"  />
            </template>
        </td-table>
    </section>
</template>

<script>
    import {cmsBrowseHistoryPage} from "@/api/CmsBrowseHistory";

    export default {
        name: "CmsBrowseHistory",
        components: {},
        data() {
            return {
                cmsBrowseHistoryPage: cmsBrowseHistoryPage
            }
        },
        created() {
        },
        methods: {}
    }
</script>

<style scoped>

</style>