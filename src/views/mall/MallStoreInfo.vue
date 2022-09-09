<template>
    <section>
        <td-table
                title="门店信息"
                ref="table"
                :get-item-by-id="parameter=>mallStoreInfoGetById(parameter)"
                :add-item-ok="parameter=>mallStoreInfoSave(parameter)"
                :edit-item-ok="parameter=>mallStoreInfoSave(parameter)"
                :delete-item-ok="parameter=>mallStoreInfoRemoveById(parameter)"
                :data-source="parameter=>mallStoreInfoPage(parameter)">
            <template #Search="{formState}">
                    <a-form-item label="" name="storeId">
                            <a-input-number v-model:value="formState.storeId"/>
                    </a-form-item>
            </template>
            <template #Columns>
                    <a-table-column title="" data-index="storeId" align="center" :sorter="true" />
            </template>
            <template #AddItem="{formState}">
                    <a-form-item label="" name="storeId">
                            <a-input-number v-model:value="formState.storeId"/>
                    </a-form-item>
            </template>
            <template #EditItem="{formState}">
                    <a-form-item label="" name="storeId">
                            <a-input-number v-model:value="formState.storeId"/>
                    </a-form-item>
            </template>
        </td-table>
    </section>
</template>

<script>
    import {mallStoreInfoPage,mallStoreInfoRemoveById,mallStoreInfoSave,mallStoreInfoGetById} from "@/api/MallStoreInfo";

    export default {
        name: "MallStoreInfo",
        components: {},
        data() {
            return {
                mallStoreInfoPage,
                mallStoreInfoRemoveById,
                mallStoreInfoSave,
                mallStoreInfoGetById
            }
        },
        created() {
        },
        methods: {}
    }
</script>

<style scoped>

</style>