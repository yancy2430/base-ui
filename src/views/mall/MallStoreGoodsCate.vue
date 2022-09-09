<template>
    <section>
        <td-table
                title=""
                ref="table"
                :get-item-by-id="parameter=>mallStoreGoodsCateGetById(parameter)"
                :add-item-ok="parameter=>mallStoreGoodsCateSave(parameter)"
                :edit-item-ok="parameter=>mallStoreGoodsCateSave(parameter)"
                :delete-item-ok="parameter=>mallStoreGoodsCateRemoveById(parameter)"
                :data-source="parameter=>mallStoreGoodsCatePage(parameter)">
            <template #Search="{formState}">
                    <a-form-item label="ID" name="id">
                            <a-input-number v-model:value="formState.id"/>
                    </a-form-item>
                    <a-form-item label="所属上级" name="pid">
                            <a-input-number v-model:value="formState.pid"/>
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
                    <a-table-column title="所属上级" data-index="pid" align="center" :sorter="true" />
                    <a-table-column title="名称" data-index="name" align="center"  />
                    <a-table-column title="排序" data-index="sort" align="center" :sorter="true" />
                    <a-table-column title="产品数量" data-index="count" align="center" :sorter="true" />
                    <a-table-column title="所属店铺" data-index="storeId" align="center" :sorter="true" />
            </template>
            <template #AddItem="{formState}">
                    <a-form-item label="ID" name="id">
                            <a-input-number v-model:value="formState.id"/>
                    </a-form-item>
                    <a-form-item label="所属上级" name="pid">
                            <a-input-number v-model:value="formState.pid"/>
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
            <template #EditItem="{formState}">
                    <a-form-item label="ID" name="id">
                            <a-input-number v-model:value="formState.id"/>
                    </a-form-item>
                    <a-form-item label="所属上级" name="pid">
                            <a-input-number v-model:value="formState.pid"/>
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
        </td-table>
    </section>
</template>

<script>
    import {mallStoreGoodsCatePage,mallStoreGoodsCateRemoveById,mallStoreGoodsCateSave,mallStoreGoodsCateGetById} from "@/api/MallStoreGoodsCate";

    export default {
        name: "MallStoreGoodsCate",
        components: {},
        data() {
            return {
                mallStoreGoodsCatePage,
                mallStoreGoodsCateRemoveById,
                mallStoreGoodsCateSave,
                mallStoreGoodsCateGetById
            }
        },
        created() {
        },
        methods: {}
    }
</script>

<style scoped>

</style>