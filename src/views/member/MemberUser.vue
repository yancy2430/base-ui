<template>
    <section>
        <td-table
                title="会员管理"
                ref="table"
                :get-item-by-id="parameter=>memberUserGetById(parameter)"
                :add-item-ok="parameter=>memberUserSave(parameter)"
                :edit-item-ok="parameter=>memberUserSave(parameter)"
                :delete-item-ok="parameter=>memberUserRemoveById(parameter)"
                :data-source="parameter=>memberUserPage(parameter)">
            <template #Search="{formState}">
                    <a-form-item label="UID" name="id">
                            <a-input-number v-model:value="formState.id"/>
                    </a-form-item>
                    <a-form-item label="头像" name="avatar">
                            <a-input v-model:value="formState.avatar"/>
                    </a-form-item>
                    <a-form-item label="昵称" name="nickName">
                            <a-input v-model:value="formState.nickName"/>
                    </a-form-item>
                    <a-form-item label="会员名" name="memberName">
                            <a-input v-model:value="formState.memberName"/>
                    </a-form-item>
                    <a-form-item label="真实姓名" name="realName">
                            <a-input v-model:value="formState.realName"/>
                    </a-form-item>
                    <a-form-item label="手机号" name="mobile">
                            <a-input v-model:value="formState.mobile"/>
                    </a-form-item>
                    <a-form-item label="邮件" name="email">
                            <a-input v-model:value="formState.email"/>
                    </a-form-item>
                    <a-form-item label="密码" name="password">
                            <a-input v-model:value="formState.password"/>
                    </a-form-item>
                    <a-form-item label="性别" name="gender">
                            <a-input v-model:value="formState.gender"/>
                    </a-form-item>
                    <a-form-item label="生日" name="birthday">
                            <a-input v-model:value="formState.birthday"/>
                    </a-form-item>
                    <a-form-item label="用户状态" name="state">
                            <a-input v-model:value="formState.state"/>
                    </a-form-item>
                    <a-form-item label="会员组" name="groupId">
                            <a-input-number v-model:value="formState.groupId"/>
                    </a-form-item>
                    <a-form-item label="注册时间" name="registerTime">
                            <a-input v-model:value="formState.registerTime"/>
                    </a-form-item>
            </template>
            <template #Columns>
                    <a-table-column title="UID" data-index="id" align="center" :sorter="true" />
                    <a-table-column title="头像" data-index="avatar" align="center"  />
                    <a-table-column title="昵称" data-index="nickName" align="center"  />
                    <a-table-column title="会员名" data-index="memberName" align="center"  />
                    <a-table-column title="真实姓名" data-index="realName" align="center"  />
                    <a-table-column title="手机号" data-index="mobile" align="center"  />
                    <a-table-column title="邮件" data-index="email" align="center"  />
                    <a-table-column title="密码" data-index="password" align="center"  />
                    <a-table-column title="性别" data-index="gender" align="center"  />
                    <a-table-column title="生日" data-index="birthday" align="center"  />
                    <a-table-column title="用户状态" data-index="state" align="center"  />
                    <a-table-column title="会员组" data-index="groupId" align="center" :sorter="true" />
                    <a-table-column title="注册时间" data-index="registerTime" align="center"  />
            </template>
            <template #AddItem="{formState}">
                    <a-form-item label="UID" name="id">
                            <a-input-number v-model:value="formState.id"/>
                    </a-form-item>
                    <a-form-item label="头像" name="avatar">
                            <a-input v-model:value="formState.avatar"/>
                    </a-form-item>
                    <a-form-item label="昵称" name="nickName">
                            <a-input v-model:value="formState.nickName"/>
                    </a-form-item>
                    <a-form-item label="会员名" name="memberName">
                            <a-input v-model:value="formState.memberName"/>
                    </a-form-item>
                    <a-form-item label="真实姓名" name="realName">
                            <a-input v-model:value="formState.realName"/>
                    </a-form-item>
                    <a-form-item label="手机号" name="mobile">
                            <a-input v-model:value="formState.mobile"/>
                    </a-form-item>
                    <a-form-item label="邮件" name="email">
                            <a-input v-model:value="formState.email"/>
                    </a-form-item>
                    <a-form-item label="密码" name="password">
                            <a-input v-model:value="formState.password"/>
                    </a-form-item>
                    <a-form-item label="性别" name="gender">
                            <a-input v-model:value="formState.gender"/>
                    </a-form-item>
                    <a-form-item label="生日" name="birthday">
                            <a-input v-model:value="formState.birthday"/>
                    </a-form-item>
                    <a-form-item label="用户状态" name="state">
                            <a-input v-model:value="formState.state"/>
                    </a-form-item>
                    <a-form-item label="会员组" name="groupId">
                            <a-input-number v-model:value="formState.groupId"/>
                    </a-form-item>
                    <a-form-item label="注册时间" name="registerTime">
                            <a-input v-model:value="formState.registerTime"/>
                    </a-form-item>
            </template>
            <template #EditItem="{formState}">
                    <a-form-item label="UID" name="id">
                            <a-input-number v-model:value="formState.id"/>
                    </a-form-item>
                    <a-form-item label="头像" name="avatar">
                            <a-input v-model:value="formState.avatar"/>
                    </a-form-item>
                    <a-form-item label="昵称" name="nickName">
                            <a-input v-model:value="formState.nickName"/>
                    </a-form-item>
                    <a-form-item label="会员名" name="memberName">
                            <a-input v-model:value="formState.memberName"/>
                    </a-form-item>
                    <a-form-item label="真实姓名" name="realName">
                            <a-input v-model:value="formState.realName"/>
                    </a-form-item>
                    <a-form-item label="手机号" name="mobile">
                            <a-input v-model:value="formState.mobile"/>
                    </a-form-item>
                    <a-form-item label="邮件" name="email">
                            <a-input v-model:value="formState.email"/>
                    </a-form-item>
                    <a-form-item label="密码" name="password">
                            <a-input v-model:value="formState.password"/>
                    </a-form-item>
                    <a-form-item label="性别" name="gender">
                            <a-input v-model:value="formState.gender"/>
                    </a-form-item>
                    <a-form-item label="生日" name="birthday">
                            <a-input v-model:value="formState.birthday"/>
                    </a-form-item>
                    <a-form-item label="用户状态" name="state">
                            <a-input v-model:value="formState.state"/>
                    </a-form-item>
                    <a-form-item label="会员组" name="groupId">
                            <a-input-number v-model:value="formState.groupId"/>
                    </a-form-item>
                    <a-form-item label="注册时间" name="registerTime">
                            <a-input v-model:value="formState.registerTime"/>
                    </a-form-item>
            </template>
        </td-table>
    </section>
</template>

<script>
    import {memberUserPage,memberUserRemoveById,memberUserSave,memberUserGetById} from "@/api/MemberUser";

    export default {
        name: "MemberUser",
        components: {},
        data() {
            return {
                memberUserPage,
                memberUserRemoveById,
                memberUserSave,
                memberUserGetById
            }
        },
        created() {
        },
        methods: {}
    }
</script>

<style scoped>

</style>