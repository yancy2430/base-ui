<template>
    <section>
        <a-card size="small">
            <td-table
                    ref="table"
                    :data-source="parameter=>dataSource(parameter)">
                <template #Search="{formState}">
                                        <a-form-item label="角色ID" name="groupId">
                        <a-input-number v-model:value="formState.groupId" />
                    </a-form-item>
                    <a-form-item label="权限键" name="code">
                        <a-input v-model:value="formState.code" />
                    </a-form-item>
                </template>
                <template #Columns>

                    <a-table-column title="角色ID" data-index="groupId" :sorter="true" />

                    <a-table-column title="权限键" data-index="code"  />
                </template>
            </td-table>
        </a-card>
    </section>
</template>

<script>
    import TdTable from "@/components/TdTable/TdTable";
    export default {
        name: "SysGroupResources",
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