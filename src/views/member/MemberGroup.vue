<template>
    <section>
        <td-table
                title="会员分组"
                ref="table"
                :get-item-by-id="parameter=>memberGroupGetById(parameter)"
                :add-item-ok="parameter=>memberGroupSave(parameter)"
                :edit-item-ok="parameter=>memberGroupSave(parameter)"
                :delete-item-ok="parameter=>memberGroupRemoveById(parameter)"
                :data-source="parameter=>memberGroupPage(parameter)">
            <template #Search="{formState}">
                    <a-form-item label="分组ID" name="id">
                            <a-input-number v-model:value="formState.id"/>
                    </a-form-item>
                    <a-form-item label="用户组" name="groupName">
                            <a-input v-model:value="formState.groupName"/>
                    </a-form-item>
            </template>
            <template #Columns>
                    <a-table-column title="分组ID" data-index="id" align="center" :sorter="true" />
                    <a-table-column title="用户组" data-index="groupName" align="center"  />
            </template>
            <template #AddItem="{formState}">
                    <a-form-item label="" name="id">
                            <a-input-number v-model:value="formState.id"/>
                    </a-form-item>
                    <a-form-item label="用户组" name="groupName">
                            <a-input v-model:value="formState.groupName"/>
                    </a-form-item>
            </template>
            <template #EditItem="{formState}">
                    <a-form-item label="分组ID" name="id">
                            <a-input-number v-model:value="formState.id"/>
                    </a-form-item>
                    <a-form-item label="用户组" name="groupName">
                            <a-input v-model:value="formState.groupName"/>
                    </a-form-item>
            </template>
        </td-table>
    </section>
</template>

<script>
    import {memberGroupPage,memberGroupRemoveById,memberGroupSave,memberGroupGetById} from "@/api/MemberGroup";

    export default {
        name: "MemberGroup",
        components: {},
        data() {
            return {
                memberGroupPage,
                memberGroupRemoveById,
                memberGroupSave,
                memberGroupGetById
            }
        },
        created() {
        },
        methods: {}
    }
</script>

<style scoped>

</style>