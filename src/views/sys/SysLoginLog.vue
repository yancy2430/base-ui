<template>
    <section>
            <td-table
                    ref="table"
                    :data-source="parameter=>dataSource(parameter)">
                <template #Search="{formState}">
                                        <a-form-item label="id" name="id">
                        <a-input-number v-model:value="formState.id" />
                    </a-form-item>
                    <a-form-item label="登录时间" name="loginTime">
                        <a-input v-model:value="formState.loginTime" />
                    </a-form-item>
                    <a-form-item label="登录IP" name="loginIp">
                        <a-input v-model:value="formState.loginIp" />
                    </a-form-item>
                    <a-form-item label="登录地址" name="loginAddress">
                        <a-input v-model:value="formState.loginAddress" />
                    </a-form-item>
                    <a-form-item label="登录ua" name="loginUa">
                        <a-input v-model:value="formState.loginUa" />
                    </a-form-item>
                    <a-form-item label="用户ID" name="userId">
                        <a-input-number v-model:value="formState.userId" />
                    </a-form-item>
                    <a-form-item label="用户名" name="username">
                        <a-input v-model:value="formState.username" />
                    </a-form-item>
                </template>
                <template #Columns>

                    <a-table-column title="id" data-index="id" :sorter="true" />

                    <a-table-column title="登录时间" data-index="loginTime"  />

                    <a-table-column title="登录IP" data-index="loginIp"  />

                    <a-table-column title="登录地址" data-index="loginAddress"  />

                    <a-table-column title="登录ua" data-index="loginUa"  />

                    <a-table-column title="用户ID" data-index="userId" :sorter="true" />

                    <a-table-column title="用户名" data-index="username"  />
                </template>
            </td-table>
    </section>
</template>

<script>
    import TdTable from "@/components/TdTable/TdTable";
    export default {
        name: "SysLoginLog",
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