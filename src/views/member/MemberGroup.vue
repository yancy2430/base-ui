<template>
    <section>
        <td-table
                title=""
                ref="table"
                :data-source="parameter=>memberGroupPage(parameter)">
            <template #Search="{formState}">
                    <a-form-item label="" name="id">
                            <a-input-number v-model:value="formState.id"/>
                    </a-form-item>
                    <a-form-item label="用户组" name="groupName">
                            <a-input v-model:value="formState.groupName"/>
                    </a-form-item>
            </template>
            <template #Columns>
                    <a-table-column title="" data-index="id" align="center" :sorter="true" />
                    <a-table-column title="用户组" data-index="groupName" align="center"  />
            </template>
        </td-table>
    </section>
</template>

<script>
    import TdTable from "@/components/TdTable/TdTable";
    import {memberGroupPage} from "@/api/MemberGroup";

    export default {
        name: "MemberGroup",
        components: {TdTable},
        data() {
            return {
                memberGroupPage: memberGroupPage
            }
        },
        created() {
        },
        methods: {}
    }
</script>

<style scoped>

</style>