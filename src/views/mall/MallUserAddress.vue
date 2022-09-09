<template>
    <section>
        <td-table
                title=""
                ref="table"
                :get-item-by-id="parameter=>mallUserAddressGetById(parameter)"
                :add-item-ok="parameter=>mallUserAddressSave(parameter)"
                :edit-item-ok="parameter=>mallUserAddressSave(parameter)"
                :delete-item-ok="parameter=>mallUserAddressRemoveById(parameter)"
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
            <template #AddItem="{formState}">
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
            <template #EditItem="{formState}">
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
        </td-table>
    </section>
</template>

<script>
    import {mallUserAddressPage,mallUserAddressRemoveById,mallUserAddressSave,mallUserAddressGetById} from "@/api/MallUserAddress";

    export default {
        name: "MallUserAddress",
        components: {},
        data() {
            return {
                mallUserAddressPage,
                mallUserAddressRemoveById,
                mallUserAddressSave,
                mallUserAddressGetById
            }
        },
        created() {
        },
        methods: {}
    }
</script>

<style scoped>

</style>