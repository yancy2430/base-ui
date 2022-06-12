<template>
    <section>
        <td-table
                title=""
                ref="table"
                :data-source="parameter=>mallStoreCatePage(parameter)">
            <template #Search="{formState}">
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
            <template #Columns>
                    <a-table-column title="分类ID" data-index="id" align="center" :sorter="true" />
                    <a-table-column title="上级ID" data-index="pid" align="center" :sorter="true" />
                    <a-table-column title="分类名称" data-index="cateName" align="center"  />
                    <a-table-column title="排序" data-index="sort" align="center" :sorter="true" />
                    <a-table-column title="创建时间" data-index="createTime" align="center"  />
            </template>
        </td-table>
    </section>
</template>

<script>
    import TdTable from "@/components/TdTable/TdTable";
    import {mallStoreCatePage} from "@/api/MallStoreCate";

    export default {
        name: "MallStoreCate",
        components: {TdTable},
        data() {
            return {
                mallStoreCatePage: mallStoreCatePage
            }
        },
        created() {
        },
        methods: {}
    }
</script>

<style scoped>

</style>