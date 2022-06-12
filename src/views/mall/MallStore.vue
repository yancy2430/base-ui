<template>
    <section>
        <td-table
                title=""
                ref="table"
                :data-source="parameter=>mallStorePage(parameter)">
            <template #Search="{formState}">
                    <a-form-item label="店铺ID" name="id">
                            <a-input-number v-model:value="formState.id"/>
                    </a-form-item>
                    <a-form-item label="用户ID" name="userId">
                            <a-input-number v-model:value="formState.userId"/>
                    </a-form-item>
                    <a-form-item label="店铺分类" name="cateId">
                            <a-input-number v-model:value="formState.cateId"/>
                    </a-form-item>
                    <a-form-item label="店铺名称" name="storeName">
                            <a-input v-model:value="formState.storeName"/>
                    </a-form-item>
                    <a-form-item label="负责人" name="principalName">
                            <a-input v-model:value="formState.principalName"/>
                    </a-form-item>
                    <a-form-item label="负责人联系电话" name="principalTel">
                            <a-input v-model:value="formState.principalTel"/>
                    </a-form-item>
                    <a-form-item label="店铺logo" name="logo">
                            <a-input v-model:value="formState.logo"/>
                    </a-form-item>
                    <a-form-item label="标签列表" name="storeTag">
                            <a-input v-model:value="formState.storeTag"/>
                    </a-form-item>
                    <a-form-item label="店铺状态 " name="state">
                            <a-input v-model:value="formState.state"/>
                    </a-form-item>
                    <a-form-item label="操作人" name="operator">
                            <a-input v-model:value="formState.operator"/>
                    </a-form-item>
                    <a-form-item label="店铺地址" name="address">
                            <a-input v-model:value="formState.address"/>
                    </a-form-item>
                    <a-form-item label="创建时间" name="createTime">
                            <a-input v-model:value="formState.createTime"/>
                    </a-form-item>
                    <a-form-item label="负责人身份证" name="principalIdentity">
                            <a-input v-model:value="formState.principalIdentity"/>
                    </a-form-item>
                    <a-form-item label="店铺简介" name="about">
                            <a-input v-model:value="formState.about"/>
                    </a-form-item>
                    <a-form-item label="执照照片" name="license">
                            <a-input v-model:value="formState.license"/>
                    </a-form-item>
                    <a-form-item label="店铺状态 " name="business">
                            <a-input v-model:value="formState.business"/>
                    </a-form-item>
            </template>
            <template #Columns>
                    <a-table-column title="店铺ID" data-index="id" align="center" :sorter="true" />
                    <a-table-column title="用户ID" data-index="userId" align="center" :sorter="true" />
                    <a-table-column title="店铺分类" data-index="cateId" align="center" :sorter="true" />
                    <a-table-column title="店铺名称" data-index="storeName" align="center"  />
                    <a-table-column title="负责人" data-index="principalName" align="center"  />
                    <a-table-column title="负责人联系电话" data-index="principalTel" align="center"  />
                    <a-table-column title="店铺logo" data-index="logo" align="center"  />
                    <a-table-column title="标签列表" data-index="storeTag" align="center"  />
                    <a-table-column title="店铺状态 " data-index="state" align="center"  />
                    <a-table-column title="操作人" data-index="operator" align="center"  />
                    <a-table-column title="店铺地址" data-index="address" align="center"  />
                    <a-table-column title="创建时间" data-index="createTime" align="center"  />
                    <a-table-column title="负责人身份证" data-index="principalIdentity" align="center"  />
                    <a-table-column title="店铺简介" data-index="about" align="center"  />
                    <a-table-column title="执照照片" data-index="license" align="center"  />
                    <a-table-column title="店铺状态 " data-index="business" align="center"  />
            </template>
        </td-table>
    </section>
</template>

<script>
    import TdTable from "@/components/TdTable/TdTable";
    import {mallStorePage} from "@/api/MallStore";

    export default {
        name: "MallStore",
        components: {TdTable},
        data() {
            return {
                mallStorePage: mallStorePage
            }
        },
        created() {
        },
        methods: {}
    }
</script>

<style scoped>

</style>