<template>
    <section>
        <td-table
                title=""
                ref="table"
                :data-source="parameter=>mallUserAddressPage(parameter)">
            <template #Search="{formState}">
                    <a-form-item label="" name="id">
                            <a-input-number v-model:value="formState.id"/>
                    </a-form-item>
                    <a-form-item label="用户ID" name="userId">
                            <a-input-number v-model:value="formState.userId"/>
                    </a-form-item>
                    <a-form-item label="" name="provinceId">
                            <a-input v-model:value="formState.provinceId"/>
                    </a-form-item>
                    <a-form-item label="" name="cityId">
                            <a-input v-model:value="formState.cityId"/>
                    </a-form-item>
                    <a-form-item label="" name="areaId">
                            <a-input v-model:value="formState.areaId"/>
                    </a-form-item>
                    <a-form-item label="" name="address">
                            <a-input v-model:value="formState.address"/>
                    </a-form-item>
                    <a-form-item label="" name="contact">
                            <a-input v-model:value="formState.contact"/>
                    </a-form-item>
                    <a-form-item label="" name="contactMobile">
                            <a-input v-model:value="formState.contactMobile"/>
                    </a-form-item>
                    <a-form-item label="" name="createTime">
                            <a-input v-model:value="formState.createTime"/>
                    </a-form-item>
            </template>
            <template #Columns>
                    <a-table-column title="" data-index="id" align="center" :sorter="true" />
                    <a-table-column title="用户ID" data-index="userId" align="center" :sorter="true" />
                    <a-table-column title="" data-index="provinceId" align="center"  />
                    <a-table-column title="" data-index="cityId" align="center"  />
                    <a-table-column title="" data-index="areaId" align="center"  />
                    <a-table-column title="" data-index="address" align="center"  />
                    <a-table-column title="" data-index="contact" align="center"  />
                    <a-table-column title="" data-index="contactMobile" align="center"  />
                    <a-table-column title="" data-index="createTime" align="center"  />
            </template>
        </td-table>
    </section>
</template>

<script>
    import TdTable from "@/components/TdTable/TdTable";
    import {mallUserAddressPage} from "@/api/MallUserAddress";

    export default {
        name: "MallUserAddress",
        components: {TdTable},
        data() {
            return {
                mallUserAddressPage: mallUserAddressPage
            }
        },
        created() {
        },
        methods: {}
    }
</script>

<style scoped>

</style>