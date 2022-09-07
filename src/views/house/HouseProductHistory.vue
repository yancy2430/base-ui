<template>
    <section>
        <td-table
                title=""
                ref="table"
                :data-source="parameter=>houseProductHistoryPage(parameter)">
            <template #Search="{formState}">
                    <a-form-item label="ID" name="id">
                            <a-input-number v-model:value="formState.id"/>
                    </a-form-item>
                    <a-form-item label="楼盘ID" name="productId">
                            <a-input-number v-model:value="formState.productId"/>
                    </a-form-item>
                    <a-form-item label="用户ID" name="userId">
                            <a-input-number v-model:value="formState.userId"/>
                    </a-form-item>
                    <a-form-item label="创建时间" name="createTime">
                            <a-input v-model:value="formState.createTime"/>
                    </a-form-item>
                    <a-form-item label="用户名" name="userName">
                            <a-input v-model:value="formState.userName"/>
                    </a-form-item>
                    <a-form-item label="标题" name="title">
                            <a-input v-model:value="formState.title"/>
                    </a-form-item>
            </template>
            <template #Columns>
                    <a-table-column title="ID" data-index="id" align="center" :sorter="true" />
                    <a-table-column title="楼盘ID" data-index="productId" align="center" :sorter="true" />
                    <a-table-column title="用户ID" data-index="userId" align="center" :sorter="true" />
                    <a-table-column title="创建时间" data-index="createTime" align="center"  />
                    <a-table-column title="用户名" data-index="userName" align="center"  />
                    <a-table-column title="标题" data-index="title" align="center"  />
            </template>
        </td-table>
    </section>
</template>

<script>

    import {houseProductHistoryPage} from "@/api/HouseProductHistory";

    export default {
        name: "HouseProductHistory",
        components: {},
        data() {
            return {
                houseProductHistoryPage: houseProductHistoryPage
            }
        },
        created() {
        },
        methods: {}
    }
</script>

<style scoped>

</style>