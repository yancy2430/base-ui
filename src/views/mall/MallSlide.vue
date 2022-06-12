<template>
    <section>
        <td-table
                title=""
                ref="table"
                :data-source="parameter=>mallSlidePage(parameter)">
            <template #Search="{formState}">
                    <a-form-item label="ID" name="id">
                            <a-input-number v-model:value="formState.id"/>
                    </a-form-item>
                    <a-form-item label="名称" name="name">
                            <a-input v-model:value="formState.name"/>
                    </a-form-item>
                    <a-form-item label="图片" name="image">
                            <a-input v-model:value="formState.image"/>
                    </a-form-item>
                    <a-form-item label="链接" name="link">
                            <a-input v-model:value="formState.link"/>
                    </a-form-item>
                    <a-form-item label="排序" name="sort">
                            <a-input-number v-model:value="formState.sort"/>
                    </a-form-item>
            </template>
            <template #Columns>
                    <a-table-column title="ID" data-index="id" align="center" :sorter="true" />
                    <a-table-column title="名称" data-index="name" align="center"  />
                    <a-table-column title="图片" data-index="image" align="center"  />
                    <a-table-column title="链接" data-index="link" align="center"  />
                    <a-table-column title="排序" data-index="sort" align="center" :sorter="true" />
            </template>
        </td-table>
    </section>
</template>

<script>
    import TdTable from "@/components/TdTable/TdTable";
    import {mallSlidePage} from "@/api/MallSlide";

    export default {
        name: "MallSlide",
        components: {TdTable},
        data() {
            return {
                mallSlidePage: mallSlidePage
            }
        },
        created() {
        },
        methods: {}
    }
</script>

<style scoped>

</style>