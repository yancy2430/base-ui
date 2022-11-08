<template>
    <section>
        <td-table
                title=""
                ref="table"
                :get-item-by-id="parameter=>memberWeixinGetById(parameter)"
                :add-item-ok="parameter=>memberWeixinSave(parameter)"
                :edit-item-ok="parameter=>memberWeixinSave(parameter)"
                :delete-item-ok="parameter=>memberWeixinRemoveById(parameter)"
                :data-source="parameter=>memberWeixinPage(parameter)">
            <template #Search="{formState}">
                    <a-form-item label="微信平台ID" name="wxUnionid">
                            <a-input v-model:value="formState.wxUnionid"/>
                    </a-form-item>
                    <a-form-item label="微信openidID" name="wxOpenid">
                            <a-input v-model:value="formState.wxOpenid"/>
                    </a-form-item>
                    <a-form-item label="微信会话密钥" name="wxSessionKey">
                            <a-input v-model:value="formState.wxSessionKey"/>
                    </a-form-item>
            </template>
            <template #Columns>
                    <a-table-column title="微信平台ID" data-index="wxUnionid" align="center"  />
                    <a-table-column title="微信openidID" data-index="wxOpenid" align="center"  />
                    <a-table-column title="微信会话密钥" data-index="wxSessionKey" align="center"  />
            </template>
            <template #AddItem="{formState}">
                    <a-form-item label="微信平台ID" name="wxUnionid">
                            <a-input v-model:value="formState.wxUnionid"/>
                    </a-form-item>
                    <a-form-item label="微信openidID" name="wxOpenid">
                            <a-input v-model:value="formState.wxOpenid"/>
                    </a-form-item>
                    <a-form-item label="微信会话密钥" name="wxSessionKey">
                            <a-input v-model:value="formState.wxSessionKey"/>
                    </a-form-item>
            </template>
            <template #EditItem="{formState}">
                    <a-form-item label="微信平台ID" name="wxUnionid">
                            <a-input v-model:value="formState.wxUnionid"/>
                    </a-form-item>
                    <a-form-item label="微信openidID" name="wxOpenid">
                            <a-input v-model:value="formState.wxOpenid"/>
                    </a-form-item>
                    <a-form-item label="微信会话密钥" name="wxSessionKey">
                            <a-input v-model:value="formState.wxSessionKey"/>
                    </a-form-item>
            </template>
        </td-table>
    </section>
</template>

<script>
    import {memberWeixinPage,memberWeixinRemoveById,memberWeixinSave,memberWeixinGetById} from "@/api/MemberWeixin";

    export default {
        name: "MemberWeixin",
        components: {},
        data() {
            return {
                memberWeixinPage,
                memberWeixinRemoveById,
                memberWeixinSave,
                memberWeixinGetById
            }
        },
        created() {
        },
        methods: {}
    }
</script>

<style scoped>

</style>