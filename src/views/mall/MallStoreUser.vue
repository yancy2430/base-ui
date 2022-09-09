<template>
    <section>
        <td-table
                title="店铺关联表"
                ref="table"
                :get-item-by-id="parameter=>mallStoreUserGetById(parameter)"
                :add-item-ok="parameter=>mallStoreUserSave(parameter)"
                :edit-item-ok="parameter=>mallStoreUserSave(parameter)"
                :delete-item-ok="parameter=>mallStoreUserRemoveById(parameter)"
                :data-source="parameter=>mallStoreUserPage(parameter)">
            <template #Search="{formState}">
                    <a-form-item label="用户ID" name="userId">
                            <a-input-number v-model:value="formState.userId"/>
                    </a-form-item>
                    <a-form-item label="店铺ID" name="storeId">
                            <a-input-number v-model:value="formState.storeId"/>
                    </a-form-item>
            </template>
            <template #Columns>
                    <a-table-column title="用户ID" data-index="userId" align="center" :sorter="true" />
                    <a-table-column title="店铺ID" data-index="storeId" align="center" :sorter="true" />
            </template>
            <template #AddItem="{formState}">
                    <a-form-item label="用户ID" name="userId">
                            <a-input-number v-model:value="formState.userId"/>
                    </a-form-item>
                    <a-form-item label="店铺ID" name="storeId">
                            <a-input-number v-model:value="formState.storeId"/>
                    </a-form-item>
            </template>
            <template #EditItem="{formState}">
                    <a-form-item label="用户ID" name="userId">
                            <a-input-number v-model:value="formState.userId"/>
                    </a-form-item>
                    <a-form-item label="店铺ID" name="storeId">
                            <a-input-number v-model:value="formState.storeId"/>
                    </a-form-item>
            </template>
        </td-table>
    </section>
</template>

<script>
    import {mallStoreUserPage,mallStoreUserRemoveById,mallStoreUserSave,mallStoreUserGetById} from "@/api/MallStoreUser";

    export default {
        name: "MallStoreUser",
        components: {},
        data() {
            return {
                mallStoreUserPage,
                mallStoreUserRemoveById,
                mallStoreUserSave,
                mallStoreUserGetById
            }
        },
        created() {
        },
        methods: {}
    }
</script>

<style scoped>

</style>