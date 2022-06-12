<template>
    <section>
        <td-table
                title=""
                ref="table"
                :data-source="parameter=>mallStoreGoodsCatePage(parameter)">
            <template #Search="{formState}">
                    <a-form-item label="ID" name="id">
                            <a-input-number v-model:value="formState.id"/>
                    </a-form-item>
                    <a-form-item label="名称" name="name">
                            <a-input v-model:value="formState.name"/>
                    </a-form-item>
                    <a-form-item label="排序" name="sort">
                            <a-input-number v-model:value="formState.sort"/>
                    </a-form-item>
                    <a-form-item label="产品数量" name="count">
                            <a-input-number v-model:value="formState.count"/>
                    </a-form-item>
                    <a-form-item label="所属店铺" name="storeId">
                            <a-input-number v-model:value="formState.storeId"/>
                    </a-form-item>
            </template>
            <template #Columns>
                    <a-table-column title="ID" data-index="id" align="center" :sorter="true" />
                    <a-table-column title="名称" data-index="name" align="center"  />
                    <a-table-column title="排序" data-index="sort" align="center" :sorter="true" />
                    <a-table-column title="产品数量" data-index="count" align="center" :sorter="true" />
                    <a-table-column title="所属店铺" data-index="storeId" align="center" :sorter="true" />
            </template>
        </td-table>
    </section>
</template>

<script>
    import TdTable from "@/components/TdTable/TdTable";
    import {mallStoreGoodsCatePage} from "@/api/MallStoreGoodsCate";

    export default {
        name: "MallStoreGoodsCate",
        components: {TdTable},
        data() {
            return {
                mallStoreGoodsCatePage: mallStoreGoodsCatePage
            }
        },
        created() {
        },
        methods: {}
    }
</script>

<style scoped>

</style>