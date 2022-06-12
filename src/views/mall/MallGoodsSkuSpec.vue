<template>
    <section>
        <td-table
                title=""
                ref="table"
                :data-source="parameter=>mallGoodsSkuSpecPage(parameter)">
            <template #Search="{formState}">
                    <a-form-item label="库存ID" name="id">
                            <a-input-number v-model:value="formState.id"/>
                    </a-form-item>
                    <a-form-item label="名称" name="name">
                            <a-input v-model:value="formState.name"/>
                    </a-form-item>
                    <a-form-item label="值" name="value">
                            <a-input v-model:value="formState.value"/>
                    </a-form-item>
            </template>
            <template #Columns>
                    <a-table-column title="库存ID" data-index="id" align="center" :sorter="true" />
                    <a-table-column title="名称" data-index="name" align="center"  />
                    <a-table-column title="值" data-index="value" align="center"  />
            </template>
        </td-table>
    </section>
</template>

<script>
    import TdTable from "@/components/TdTable/TdTable";
    import {mallGoodsSkuSpecPage} from "@/api/MallGoodsSkuSpec";

    export default {
        name: "MallGoodsSkuSpec",
        components: {TdTable},
        data() {
            return {
                mallGoodsSkuSpecPage: mallGoodsSkuSpecPage
            }
        },
        created() {
        },
        methods: {}
    }
</script>

<style scoped>

</style>