<template>
    <section>
        <td-table
                title="发布板块表"
                ref="table"
                :data-source="parameter=>rewardCategoryPage(parameter)">
            <template #Search="{formState}">
                    <a-form-item label="ID" name="id">
                            <a-input-number v-model:value="formState.id"/>
                    </a-form-item>
                    <a-form-item label="板块名称" name="categoryName">
                            <a-input v-model:value="formState.categoryName"/>
                    </a-form-item>
                    <a-form-item label="图标" name="icon">
                            <a-input v-model:value="formState.icon"/>
                    </a-form-item>
                    <a-form-item label="排序" name="sort">
                            <a-input-number v-model:value="formState.sort"/>
                    </a-form-item>
            </template>
            <template #Columns>
                    <a-table-column title="ID" data-index="id" align="center" :sorter="true" />
                    <a-table-column title="板块名称" data-index="categoryName" align="center"  />
                    <a-table-column title="图标" data-index="icon" align="center"  />
                    <a-table-column title="排序" data-index="sort" align="center" :sorter="true" />
            </template>
        </td-table>
    </section>
</template>

<script>
    import TdTable from "@/components/TdTable/TdTable";
    import {rewardCategoryPage} from "@/api/RewardCategory";

    export default {
        name: "RewardCategory",
        components: {TdTable},
        data() {
            return {
                rewardCategoryPage: rewardCategoryPage
            }
        },
        created() {
        },
        methods: {}
    }
</script>

<style scoped>

</style>