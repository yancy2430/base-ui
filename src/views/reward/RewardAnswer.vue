<template>
    <section>
        <td-table
                title="悬赏回复表"
                ref="table"
                :data-source="parameter=>rewardAnswerPage(parameter)">
            <template #Search="{formState}">
                    <a-form-item label="ID" name="id">
                            <a-input-number v-model:value="formState.id"/>
                    </a-form-item>
                    <a-form-item label="悬赏ID" name="rewardId">
                            <a-input-number v-model:value="formState.rewardId"/>
                    </a-form-item>
                    <a-form-item label="回复人/审核人" name="answer">
                            <a-input v-model:value="formState.answer"/>
                    </a-form-item>
                    <a-form-item label="回复人ID" name="answerId">
                            <a-input-number v-model:value="formState.answerId"/>
                    </a-form-item>
                    <a-form-item label="回复内容" name="answerContent">
                            <a-input v-model:value="formState.answerContent"/>
                    </a-form-item>
                    <a-form-item label="回复时间" name="answerTime">
                            <a-input v-model:value="formState.answerTime"/>
                    </a-form-item>
                    <a-form-item label="上级ID" name="pid">
                            <a-input-number v-model:value="formState.pid"/>
                    </a-form-item>
                    <a-form-item label="回复对象" name="replyObject">
                            <a-input v-model:value="formState.replyObject"/>
                    </a-form-item>
            </template>
            <template #Columns>
                    <a-table-column title="ID" data-index="id" align="center" :sorter="true" />
                    <a-table-column title="悬赏ID" data-index="rewardId" align="center" :sorter="true" />
                    <a-table-column title="回复人/审核人" data-index="answer" align="center"  />
                    <a-table-column title="回复人ID" data-index="answerId" align="center" :sorter="true" />
                    <a-table-column title="回复内容" data-index="answerContent" align="center"  />
                    <a-table-column title="回复时间" data-index="answerTime" align="center"  />
                    <a-table-column title="上级ID" data-index="pid" align="center" :sorter="true" />
                    <a-table-column title="回复对象" data-index="replyObject" align="center"  />
            </template>
        </td-table>
    </section>
</template>

<script>
    import TdTable from "@/components/TdTable/TdTable";
    import {rewardAnswerPage} from "@/api/RewardAnswer";

    export default {
        name: "RewardAnswer",
        components: {TdTable},
        data() {
            return {
                rewardAnswerPage: rewardAnswerPage
            }
        },
        created() {
        },
        methods: {}
    }
</script>

<style scoped>

</style>