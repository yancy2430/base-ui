<template>
    <section>
        <td-table
                title=""
                ref="table"
                :data-source="parameter=>mallStoreCollectPage(parameter)">
            <template #Search="{formState}">
                    <a-form-item label="" name="id">
                            <a-input-number v-model:value="formState.id"/>
                    </a-form-item>
                    <a-form-item label="用户" name="userId">
                            <a-input-number v-model:value="formState.userId"/>
                    </a-form-item>
                    <a-form-item label="店铺" name="storeId">
                            <a-input-number v-model:value="formState.storeId"/>
                    </a-form-item>
                    <a-form-item label="收藏时间" name="createTime">
                            <a-input v-model:value="formState.createTime"/>
                    </a-form-item>
            </template>
            <template #Columns>
                    <a-table-column title="" data-index="id" align="center" :sorter="true" />
                    <a-table-column title="用户" data-index="userId" align="center" :sorter="true" />
                    <a-table-column title="店铺" data-index="storeId" align="center" :sorter="true" />
                    <a-table-column title="收藏时间" data-index="createTime" align="center"  />
            </template>
        </td-table>
    </section>
</template>

<script>

    import {mallStoreCollectPage} from "@/api/MallStoreCollect";

    export default {
        name: "MallStoreCollect",
        components: {},
        data() {
            return {
                mallStoreCollectPage: mallStoreCollectPage
            }
        },
        created() {
        },
        methods: {}
    }
</script>

<style scoped>

</style>