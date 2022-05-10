<template>
    <section>
        <a-card size="small">
            <td-table
                    ref="table"
                    :data-source="parameter=>dataSource(parameter)">
                <template #Search="{formState}">
                                        <a-form-item label="用户ID" name="userId">
                        <a-input-number v-model:value="formState.userId" />
                    </a-form-item>
                    <a-form-item label="权限ID" name="groupId">
                        <a-input-number v-model:value="formState.groupId" />
                    </a-form-item>
                </template>
                <template #Columns>
                    <a-table-column title="用户ID" data-index="userId" :sorter="true" />
                    <a-table-column title="权限ID" data-index="groupId" :sorter="true" />
                </template>
            </td-table>
        </a-card>
    </section>
</template>

<script>
    import TdTable from "@/components/TdTable/TdTable";
    export default {
        name: "SysUserGroup",
        components: {TdTable},
        data() {
            return {
            }
        },
        created() {
        },
        methods: {
            dataSource(params) {
                return
            },
            handleResizeColumn: (w, col) => {
                col.width = w;
            }
        }
    }
</script>

<style scoped>

</style>