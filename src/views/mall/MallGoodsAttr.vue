<template>
    <section>
        <td-table
                title=""
                ref="table"
                :data-source="parameter=>mallGoodsAttrPage(parameter)">
            <template #Search="{formState}">
                    <a-form-item label="属性ID" name="id">
                            <a-input-number v-model:value="formState.id"/>
                    </a-form-item>
                    <a-form-item label="分类名称" name="cateId">
                            <a-input-number v-model:value="formState.cateId"/>
                    </a-form-item>
                    <a-form-item label="属性类型" name="attrType">
                            <a-input v-model:value="formState.attrType"/>
                    </a-form-item>
                    <a-form-item label="属性名称" name="attrName">
                            <a-input v-model:value="formState.attrName"/>
                    </a-form-item>
                    <a-form-item label="排序" name="sort">
                            <a-input-number v-model:value="formState.sort"/>
                    </a-form-item>
                    <a-form-item label="待选值" name="forValue">
                            <a-input v-model:value="formState.forValue"/>
                    </a-form-item>
            </template>
            <template #Columns>
                    <a-table-column title="属性ID" data-index="id" align="center" :sorter="true" />
                    <a-table-column title="分类名称" data-index="cateId" align="center" :sorter="true" />
                    <a-table-column title="属性类型" data-index="attrType" align="center"  />
                    <a-table-column title="属性名称" data-index="attrName" align="center"  />
                    <a-table-column title="排序" data-index="sort" align="center" :sorter="true" />
                    <a-table-column title="待选值" data-index="forValue" align="center"  />
            </template>
        </td-table>
    </section>
</template>

<script>
    import TdTable from "@/components/TdTable/TdTable";
    import {mallGoodsAttrPage} from "@/api/MallGoodsAttr";

    export default {
        name: "MallGoodsAttr",
        components: {TdTable},
        data() {
            return {
                mallGoodsAttrPage: mallGoodsAttrPage
            }
        },
        created() {
        },
        methods: {}
    }
</script>

<style scoped>

</style>