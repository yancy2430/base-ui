<template>
    <section>
        <td-table
                title=""
                ref="table"
                :get-item-by-id="parameter=>lotteryLogGetById(parameter)"
                :add-item-ok="parameter=>lotteryLogSave(parameter)"
                :edit-item-ok="parameter=>lotteryLogSave(parameter)"
                :delete-item-ok="parameter=>lotteryLogRemoveById(parameter)"
                :data-source="parameter=>lotteryLogPage(parameter)">
            <template #Search="{formState}">
                    <a-form-item label="日志ID" name="id">
                            <a-input-number v-model:value="formState.id"/>
                    </a-form-item>
                    <a-form-item label="抽奖用户" name="userId">
                            <a-input-number v-model:value="formState.userId"/>
                    </a-form-item>
                    <a-form-item label="奖品信息" name="prize">
                            <a-input v-model:value="formState.prize"/>
                    </a-form-item>
                    <a-form-item label="活动信息" name="draw">
                            <a-input v-model:value="formState.draw"/>
                    </a-form-item>
                    <a-form-item label="抽奖时间" name="createTime">
                            <a-input v-model:value="formState.createTime"/>
                    </a-form-item>
            </template>
            <template #Columns>
                    <a-table-column title="日志ID" data-index="id" align="center" :sorter="true" />
                    <a-table-column title="抽奖用户" data-index="userId" align="center" :sorter="true" />
                    <a-table-column title="奖品信息" data-index="prize" align="center"  />
                    <a-table-column title="活动信息" data-index="draw" align="center"  />
                    <a-table-column title="抽奖时间" data-index="createTime" align="center"  />
            </template>
            <template #AddItem="{formState}">
                    <a-form-item label="日志ID" name="id">
                            <a-input-number v-model:value="formState.id"/>
                    </a-form-item>
                    <a-form-item label="抽奖用户" name="userId">
                            <a-input-number v-model:value="formState.userId"/>
                    </a-form-item>
                    <a-form-item label="奖品信息" name="prize">
                            <a-input v-model:value="formState.prize"/>
                    </a-form-item>
                    <a-form-item label="活动信息" name="draw">
                            <a-input v-model:value="formState.draw"/>
                    </a-form-item>
                    <a-form-item label="抽奖时间" name="createTime">
                            <a-input v-model:value="formState.createTime"/>
                    </a-form-item>
            </template>
            <template #EditItem="{formState}">
                    <a-form-item label="日志ID" name="id">
                            <a-input-number v-model:value="formState.id"/>
                    </a-form-item>
                    <a-form-item label="抽奖用户" name="userId">
                            <a-input-number v-model:value="formState.userId"/>
                    </a-form-item>
                    <a-form-item label="奖品信息" name="prize">
                            <a-input v-model:value="formState.prize"/>
                    </a-form-item>
                    <a-form-item label="活动信息" name="draw">
                            <a-input v-model:value="formState.draw"/>
                    </a-form-item>
                    <a-form-item label="抽奖时间" name="createTime">
                            <a-input v-model:value="formState.createTime"/>
                    </a-form-item>
            </template>
        </td-table>
    </section>
</template>

<script>
    import {lotteryLogPage,lotteryLogRemoveById,lotteryLogSave,lotteryLogGetById} from "@/api/LotteryLog";

    export default {
        name: "LotteryLog",
        components: {},
        data() {
            return {
                lotteryLogPage,
                lotteryLogRemoveById,
                lotteryLogSave,
                lotteryLogGetById
            }
        },
        created() {
        },
        methods: {}
    }
</script>

<style scoped>

</style>