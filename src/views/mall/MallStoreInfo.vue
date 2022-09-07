<template>
    <section>
        <td-table
                title="门店信息"
                ref="table"
                :data-source="parameter=>mallStoreInfoPage(parameter)">
            <template #Search="{formState}">
                    <a-form-item label="" name="storeId">
                            <a-input-number v-model:value="formState.storeId"/>
                    </a-form-item>
            </template>
            <template #Columns>
                    <a-table-column title="" data-index="storeId" align="center" :sorter="true" />
            </template>
        </td-table>
    </section>
</template>

<script>

    import {mallStoreInfoPage} from "@/api/MallStoreInfo";

    export default {
        name: "MallStoreInfo",
        components: {},
        data() {
            return {
                mallStoreInfoPage: mallStoreInfoPage
            }
        },
        created() {
        },
        methods: {}
    }
</script>

<style scoped>

</style>