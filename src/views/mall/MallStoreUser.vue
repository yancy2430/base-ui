<template>
    <section>
        <td-table
                title="店铺关联表"
                ref="table"
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
        </td-table>
    </section>
</template>

<script>

    import {mallStoreUserPage} from "@/api/MallStoreUser";

    export default {
        name: "MallStoreUser",
        components: {},
        data() {
            return {
                mallStoreUserPage: mallStoreUserPage
            }
        },
        created() {
        },
        methods: {}
    }
</script>

<style scoped>

</style>